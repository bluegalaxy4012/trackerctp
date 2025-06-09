export interface MapElementData {
    id: number;
    position: {
        lat: number,
        lng: number
    };
    color: string;
}

export interface BusElementData extends MapElementData {
    speed: string;
    previousStopName: string;
    nextStopName: string;
    tripId: string;
}

export function getStopPositions(tripId: string, tripStops, stopLocations): {stopPositions: any, firstGreen: number} {
    if(!tripId) return { stopPositions: [], firstGreen: -1 };

    const tripId0 = tripId + '_0'
    const tripId1 = tripId + '_1'
    const stops : MapElementData[] = []

    const tripStopsForId = tripStops.filter(tripStop => tripStop.trip_id === tripId0 || tripStop.trip_id === tripId1);

    tripStopsForId.forEach(tripStop => {
        const stopLocation = stopLocations.find(stop => stop.stop_id === tripStop.stop_id);
        if (stopLocation) {
            stops.push({
                id: stopLocation.stop_id,
                position: {
                    lat: stopLocation.stop_lat,
                    lng: stopLocation.stop_lon
                },
                color: tripStop.trip_id.endsWith('_0') ? 'red' : 'green'
            });
        }
    });

    const firstGreen = stops.findIndex(stop => stop.color === 'green');
    return { stopPositions: stops, firstGreen: firstGreen };
}

export function getRouteShapePositions(shapeId: string, shapesData) {
    if (!shapesData || !shapesData.length) {
        console.warn('Shapes data is not available');
        return [];
    }
    
    const shapePoints = shapesData.flat().filter(shape => shape.shape_id === shapeId).sort((a, b) => a.shape_pt_sequence - b.shape_pt_sequence).map(point => ({
        lat: point.shape_pt_lat,
        lng: point.shape_pt_lon
    }));
    return shapePoints
}

function getBusData(vehicle: any, tripStops: any, stopLocations: any) { //vehicle fetched din api
    const data = {
        id: vehicle.label,
        tripId: vehicle.trip_id,
        position: {
            lat: vehicle.latitude,
            lng: vehicle.longitude
        },
        color: vehicle.trip_id.endsWith('_0') ? 'red' : 'green'
    }

    const stopLocationsForVehicle = stopLocations.filter(tripStop => tripStop.trip_id === vehicle.trip_id);
    const startStop = stopLocationsForVehicle.find(stop => stop.stop_sequence === 0);
    if (!startStop) {
        console.warn(`Stop distances could not be calculated.`);
        return data;
    }
    const startStopLocation = tripStops.find(sl => sl.stop_id === startStop.stop_id);
    const stopDistances = stopLocationsForVehicle.map(stop => {
        const stopLocation = tripStops.find(sl => sl.stop_id === stop.stop_id);
        if (stopLocation) {
            const distanceToStop = calculateDistance(startStopLocation.stop_lat, startStopLocation.stop_lon, stopLocation.stop_lat, stopLocation.stop_lon);
            return {
                stop,
                distance: distanceToStop
            };
        }
        return null;
    }).filter(stopDistance => stopDistance !== null);
    const vehicleDistance = calculateDistance(startStopLocation.stop_lat, startStopLocation.stop_lon, vehicle.latitude, vehicle.longitude);
    stopDistances.push({
        stop: {
            stop_id: 'vehicle',
            stop_lat: vehicle.latitude,
            stop_lon: vehicle.longitude
        },
        distance: vehicleDistance
    });
    stopDistances.sort((a, b) => a.distance - b.distance);

    let vehicleIndex = stopDistances.findIndex(stopDistance => stopDistance.stop.stop_id === 'vehicle');
    const previousStop = vehicleIndex > 0 ? stopDistances[vehicleIndex - 1].stop : {
        stop_id: null
    };
    const nextStop = vehicleIndex < stopDistances.length - 1 ? stopDistances[vehicleIndex + 1].stop : {
        stop_id: null
    };
    const previousStopName = tripStops.find(sl => sl.stop_id === previousStop.stop_id)?.stop_name || 'At first stop';
    const nextStopName = tripStops.find(sl => sl.stop_id === nextStop.stop_id)?.stop_name || 'At last stop';
    return {
        ...data,
        speed: vehicle.speed,
        previousStopName: previousStopName,
        nextStopName: nextStopName
    }
}

export function getBussesPositions(routeId: string, data: any, tripStops: any, stopLocations: any) {
    if(!data || !routeId) return [];

    const busData = data.flat()
                    .filter(vehicle => vehicle.route_id?.toString() === routeId && vehicle.trip_id !== null && (vehicle.trip_id.endsWith('_0') || vehicle.trip_id.endsWith('_1')))
                    .map(vehicle => (getBusData(vehicle, tripStops, stopLocations)));

    return busData
}


function calculateDistance(lat1, lon1, lat2, lon2) {
    //Haversine formula
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export function calculateRoadDistance(lat, lng, vehicleTripId, shapesData): number | null {
    const shapePoints = getRouteShapePositions(vehicleTripId, shapesData);
    if (!shapePoints) {
      return null;
    }
  
    let closestDistance = Infinity;
    let closestIndex: number | null = null;
    let cumulativeDistance = 0;
  
    // Find the closest shape point to the vehicle
    shapePoints.forEach((point, index) => {
        const shapeLat = point.lat;
        const shapeLng = point.lng;
        const distanceToVehicle = calculateDistance(shapeLat, shapeLng, lat, lng);

        if (distanceToVehicle < closestDistance) {
            closestDistance = distanceToVehicle;
            closestIndex = index;
        }
    });

  
    // Calculate cumulative distance up to the closest shape point
    if (closestIndex !== null) {
        for (let i = 0; i < closestIndex; i++) {
            const { lat: lat1, lng: lon1 } = shapePoints[i];
            const { lat: lat2, lng: lon2 } = shapePoints[i + 1];
            cumulativeDistance += calculateDistance(lat1, lon1, lat2, lon2);
        }
    }
  
    return cumulativeDistance;
}