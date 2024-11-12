'use client'
import { GoogleMap, Marker, Polyline, OverlayViewF, OverlayView } from "@react-google-maps/api";
import BusIcon from '@mui/icons-material/DirectionsBus';
import StopIcon from '@mui/icons-material/RadioButtonChecked';
import { getRouteShapePositions, getStopPositions, StopPosition } from "helpers/drawingUtil";
import { routeDictionary } from "helpers/routedata";

function dataToKey(data: StopPosition) {
    return (data.id).toString() + data.color
}

const GetPixelPositionOffset = (width: number, height: number) => {
    return {
      x: -(width / 2),
      y: -(height / 2)
    };
};

const defaultMapContainerStyle = {
    width: '100%',
    height: '80vh',
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

interface MapComponentProps {
    route: string;
    stopLocations: any;
    tripStops: any;
    shapes: any;
}


const polylineOptions0 = {
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4
};
const polylineOptions1 = {
    strokeColor: '#00FF00',
    strokeOpacity: 1.0,
    strokeWeight: 4
};

export default function MapComponent({ route = "", stopLocations, tripStops, shapes }: MapComponentProps) {
    const stopPositions = getStopPositions(routeDictionary[route], stopLocations, tripStops)
    const shapePoints0 = getRouteShapePositions(routeDictionary[route]+'_0', shapes)
    const shapePoints1 = getRouteShapePositions(routeDictionary[route]+'_1', shapes)

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                {stopPositions.map((data) => (

                    <OverlayViewF key={dataToKey(data)} mapPaneName={OverlayView.OVERLAY_LAYER} position={data.position} getPixelPositionOffset={GetPixelPositionOffset}>
                        <StopIcon style={{ color: data.color }} />
                    </OverlayViewF>
                    
                ))}

                <Polyline path={shapePoints0} options={polylineOptions0}/>
                <Polyline path={shapePoints1} options={polylineOptions1}/>
            </GoogleMap>
        </div>
    )
};
