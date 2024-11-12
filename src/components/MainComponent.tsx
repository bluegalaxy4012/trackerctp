'use client';

import * as React from 'react';
import { MapProvider } from 'providers/MapProvider';
import { useEffect, useRef, useState } from 'react';
import { bussesSort } from 'helpers/utils';
import Stack from '@mui/material/Stack';
import RouteSelection from 'components/RouteSelection';
import { Button } from '@mui/material';
import { routeDictionary } from 'helpers/constants';
import MapComponent from 'components/MapComponent';
import { getBussesPositions } from 'helpers/drawingUtil';

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
    const [busLocations, setBusLocations] = useState<any>();
    const [userLocation, setUserLocation] = useState<any>();

    useEffect(() => {
        // Load favourites from localStorage on component mount
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    }, []);

    useEffect(() => {
        // Save favourites to localStorage whenever it changes
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        shapesPromise.then((data) => setShapes(data.flat()))
        stopLocationsPromise.then((data) => setStopLocations(data))
        tripStopsPromise.then((data) => setTripStops(data))
    }, [stopLocationsPromise, tripStopsPromise]);

    useEffect(() => {
        const fetchBusses = async () => {await fetch('https://api.tranzy.ai/v1/opendata/vehicles', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'X-API-KEY': process.env.NEXT_PUBLIC_TRANZY_API_KEY as string,
                    'X-Agency-Id': '2'
                },
                next: { revalidate: 45 } //45 de secunde
            })
            .then((data) => data.json())
            .then((data) => setBusLocations(data))
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const coords = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setUserLocation(coords);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Could not retrieve your location.");
                    setUserLocation(null);
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
            setUserLocation(null);
        }
        
        fetchBusses();
    }, [route])

    function addFavourite() {
        if(route == '') return;
        if(favourites.includes(route)) 
            setFavourites((prevFavourites) => prevFavourites.filter(item => item !== route).toSorted(bussesSort)); 
        else 
            setFavourites((prevFavourites) => [...prevFavourites, route].toSorted(bussesSort)); 
    }

    async function onRouteChange(newRoute: string) {
        setRoute(newRoute)
    }

    return (
        <Stack spacing={1}>
            <RouteSelection route={route} favourites={favourites} onRouteChange={onRouteChange} addFavourite={addFavourite}/>
            <MapProvider>
                <MapComponent route={route} stopLocations={stopLocations} tripStops={tripStops} shapes={shapes} busLocations={busLocations} userLocation={userLocation}/>
            </MapProvider>
        </Stack>
    );
}