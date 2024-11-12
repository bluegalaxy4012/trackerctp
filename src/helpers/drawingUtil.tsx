export interface StopPosition {
    id: number;
    position: {
        lat: number,
        lng: number
    };
    color: string;
}

export function getStopPositions(tripId: string, tripStops, stopLocations) {
    if(!tripId) return [];

    const tripId0 = tripId + '_0'
    const tripId1 = tripId + '_1'
    const stops : StopPosition[] = []

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

    return stops;
}

export function getRouteShapePositions(shapeId: string, shapesData) {
    if (!shapesData || !shapesData.length) {
        console.warn('Shapes data is not available');
        return;
    }
    
    const shapePoints = shapesData.flat().filter(shape => shape.shape_id === shapeId).sort((a, b) => a.shape_pt_sequence - b.shape_pt_sequence).map(point => ({
        lat: point.shape_pt_lat,
        lng: point.shape_pt_lon
    }));
    return shapePoints
}