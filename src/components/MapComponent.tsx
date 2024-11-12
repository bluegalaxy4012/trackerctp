import { GoogleMap, Marker, Polyline, OverlayViewF, OverlayView } from "@react-google-maps/api";
import BusIcon from '@mui/icons-material/DirectionsBus';
import StopIcon from '@mui/icons-material/RadioButtonChecked';
import { BusElementData, calculateRoadDistance, getBussesPositions, getRouteShapePositions, getStopPositions, MapElementData } from "helpers/drawingUtil";
import { hiddenElementsMapStyle, mapDarkMode, routeDictionary } from "helpers/constants";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";
import React from "react";
import DirectionsOffIcon from '@mui/icons-material/DirectionsOff';
import DirectionsIcon from '@mui/icons-material/Directions';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import BusComponent from "./BusComponent";
import { GetPixelPositionOffset } from "helpers/utils";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import StartIcon from '@mui/icons-material/Flag';

function dataToKey(data: MapElementData) {
    return (data.id).toString() + data.color
}

const defaultMapContainerStyle = {
    width: '100%',
    height: '75vh',
    borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = { //cluj napoca!
    lat: 46.7712,
    lng: 23.5966
}

const defaultMapZoom = 14

const defaultMapOptions = {
    mapTypeId: 'roadmap',
    streetViewControl: false,
    mapTypeControl: false,
    gestureHandling: 'greedy'
};

const polylineOptions0 = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.5,
    strokeWeight: 6
};
const polylineOptions1 = {
    strokeColor: '#00FF00',
    strokeOpacity: 0.5,
    strokeWeight: 4
};

interface MapComponentProps {
    route: string;
    stopLocations: any;
    tripStops: any;
    shapes: any;
    busLocations: any;
    userLocation: any;
}

export default function MapComponent({ route = "", stopLocations, tripStops, shapes, busLocations, userLocation }: MapComponentProps) {
    const { stopPositions, firstGreen } = getStopPositions(routeDictionary[route], stopLocations, tripStops)
    const [shapePoints0, setShapePoints0] = useState<any[]>([]);
    const [shapePoints1, setShapePoints1] = useState<any[]>([]);
    const busPositions = getBussesPositions(routeDictionary[route], busLocations, tripStops, stopLocations)

    useEffect(() => {
        setShapePoints0([]);
        setShapePoints1([]);

        setShapePoints0(getRouteShapePositions(routeDictionary[route] + '_0', shapes));
        setShapePoints1(getRouteShapePositions(routeDictionary[route] + '_1', shapes));
    }, [route]);

    const [clickedBus, setClickedBus] = useState<BusElementData | null>(null);
    const handleBusClick = (data: BusElementData) => {
        // Toggle clickedBus state; close if clicking the same bus again
        setClickedBus(clickedBus?.id === data.id ? null : data);
    };

    const [showElements, setShowElements] = useState(false);
    const toggleMapElements = () => {
        setShowElements(prevShow => !prevShow);
    };

    const [mapCenter, setMapCenter] = useState(defaultMapCenter);
    const centerMapOnUserLocation = () => {
        if(!userLocation) return;
        setMapCenter(userLocation);
    };

    const [isPredicting, setIsPredicting] = useState<boolean>(false);
    const handleEstimateTimeButtonClick = () => {
        setIsPredicting(true);
    }

    const doPrediction = async (latLng) => {
        const lat = latLng.lat();
        const lng = latLng.lng();
        setIsPredicting(false);

        const startTime = performance.now();
        const d1 = Math.round(calculateRoadDistance(clickedBus.position.lat, clickedBus.position.lng, clickedBus.tripId, shapes) * 1000) / 1000;
        const d2 = Math.round(calculateRoadDistance(lat, lng, clickedBus.tripId, shapes) * 1000) / 1000;
        console.log("started ", d1, d2)
        
        const response = await fetch('https://trackerctp.onrender.com/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                trip_id: clickedBus.tripId,
                d1: d1,
                d2: d2
            })
        });
        const result = await response.json();
        console.log("responded")
        const responseTime = (performance.now() - startTime) / 1000;
        const predictedTime = parseFloat(result.predicted_time) - responseTime;
        const minutes = Math.floor(predictedTime / 60);
        const seconds = Math.floor(predictedTime % 60);
        alert(`Predicted time from selected vehicle to clicked point is ${minutes} minutes and ${seconds} seconds.`);
    }

    const handlePolylineClick0 = (event: google.maps.MapMouseEvent) => {
        if(!isPredicting || clickedBus.color != "red" || !event.latLng) return;

        doPrediction(event.latLng)
    };
    const handlePolylineClick1 = (event: google.maps.MapMouseEvent) => {
        if(!isPredicting || clickedBus.color != "green" || !event.latLng) return;

        doPrediction(event.latLng)
    };


    return (
        <div className="w-full" style={{ position: 'relative' }}>
            <Stack style={{position: 'absolute',
                        top: '8px',
                        left: '8px',
                        zIndex: 10}}>
                <IconButton aria-label="Center on my location" onClick={centerMapOnUserLocation}>
                    <Tooltip id="button-center" title="Center on my location">
                        <MyLocationIcon/>
                    </Tooltip>
                </IconButton>

                <IconButton aria-label="Hide/Show Map Elements" onClick={toggleMapElements}>
                    <Tooltip id="hide-show-map-elements" title={showElements ? 'Hide Map Elements' : 'Show Map Elements'}>
                        {showElements ? <DirectionsOffIcon/> : <DirectionsIcon/>}
                    </Tooltip>
                </IconButton>
            </Stack>

            <GoogleMap  
                mapContainerStyle={defaultMapContainerStyle}
                center={mapCenter}
                zoom={defaultMapZoom}
                options={{
                    ...defaultMapOptions,
                    styles: showElements ? mapDarkMode : hiddenElementsMapStyle,
                }}
            >
                {stopPositions.map((data, index) => (
                    <OverlayViewF key={dataToKey(data)} mapPaneName={OverlayView.OVERLAY_LAYER} position={data.position} getPixelPositionOffset={GetPixelPositionOffset} 
                        zIndex={index === 0 ? 1 : 0}>
                        {index === 0 || index === firstGreen ? <StartIcon style={{ color: data.color, minWidth: 40, minHeight: 40 }}/> : <StopIcon style={{ color: data.color}} /> }
                    </OverlayViewF>
                ))}
                
                
                {busPositions.map((data) => (
                    <BusComponent key={dataToKey(data)} data={data} clicked={clickedBus?.id === data.id} 
                        handleBusClick={handleBusClick} handleEstimateTimeButtonClick={handleEstimateTimeButtonClick} />
                ))}

                {userLocation && (<Marker position={userLocation} />) }

                <Polyline onClick={handlePolylineClick0} path={shapePoints0} options={polylineOptions0}/>
                <Polyline onClick={handlePolylineClick1} path={shapePoints1} options={polylineOptions1}/>
            </GoogleMap>
        </div>
    )
};
