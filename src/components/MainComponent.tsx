'use client';

import * as React from 'react';
import { MapProvider } from 'providers/MapProvider';
import { useEffect, useRef, useState } from 'react';
import { numericSort } from 'helpers/utils';
import Stack from '@mui/material/Stack';
import RouteSelection from 'components/RouteSelection';
import { Button } from '@mui/material';
import { routeDictionary } from 'helpers/routedata';
import MapComponent from 'components/MapComponent';

interface MainComponentProps {
    shapesPromise: Promise<any>;
    stopLocationsPromise: Promise<any>;
    tripStopsPromise: Promise<any>;
}

export default function MainComponent({ stopLocationsPromise, tripStopsPromise, shapesPromise }: MainComponentProps) {
    const [favourites, setFavourites] = useState<string[]>([]);
    const [route, setRoute] = React.useState<string>('');
    
    const [stopLocations, setStopLocations] = useState<any>();
    const [tripStops, setTripStops] = useState<any>();
    const [shapes, setShapes] = useState<any>();

    useEffect(() => {
        shapesPromise.then((data) => setShapes(data.flat()))
        stopLocationsPromise.then((data) => setStopLocations(data))
        tripStopsPromise.then((data) => setTripStops(data))
    }, [stopLocationsPromise, tripStopsPromise]);

    const filterByRoute = (routeId: number) => {
        console.log(`Filtering by route ${routeId}`);
    };

    const toggleBusinesses = () => {
        console.log('Toggling other map elements');
    };

    const centerMapOnUser = () => {
        console.log('Centering map on user');
    };

    const initiatePrediction = () => {
        console.log('Initiating prediction');
    };

    function addFavourite() {
        if(route == '') return;
        if(favourites.includes(route)) 
            setFavourites((prevFavourites) => prevFavourites.filter(item => item !== route).toSorted(numericSort)); 
        else 
            setFavourites((prevFavourites) => [...prevFavourites, route].toSorted(numericSort)); 
    }

    async function onRouteChange(newRoute: string) {
        setRoute(newRoute)
    }

    return (
        <>
        <RouteSelection route={route} favourites={favourites} onRouteChange={onRouteChange} addFavourite={addFavourite}/>
        <Stack spacing={2} direction="row">
            <Button variant="outlined" onClick={toggleBusinesses}>
                Show/Hide other map elements
            </Button>
            <Button variant="outlined" onClick={centerMapOnUser}>
                Center on you
            </Button>
            <Button variant="outlined" onClick={initiatePrediction}>
                Select vehicle/destination for time arrival prediction
            </Button>
        </Stack>
        <MapProvider>
            <MapComponent route={route} stopLocations={stopLocations} tripStops={tripStops} shapes={shapes}/>
        </MapProvider>
        </>
    );
}