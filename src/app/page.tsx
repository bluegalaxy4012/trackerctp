import * as React from 'react';
import { routeDictionary } from 'helpers/routedata';
import MainComponent from 'components/MainComponent';

async function fetchTripStops() {
    const response = await fetch('https://api.tranzy.ai/v1/opendata/stops', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-API-KEY': process.env.NEXT_PUBLIC_TRANZY_API_KEY as string,
            'X-Agency-Id': '2'
        },
        next: { revalidate: 3600*24 } //24 de ore
    });
    return await response.json();
}

async function fetchStopLocations() {
    const response = await fetch('https://api.tranzy.ai/v1/opendata/stop_times', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-API-KEY': process.env.NEXT_PUBLIC_TRANZY_API_KEY as string,
            'X-Agency-Id': '2'
        },
        next: { revalidate: 3600*24 } //24 de ore
    });
    return await response.json();
}

async function fetchShapes(shape_id:string) {
    const response = await fetch('https://api.tranzy.ai/v1/opendata/shapes?shape_id=' + shape_id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-API-KEY': process.env.NEXT_PUBLIC_TRANZY_API_KEY as string,
            'X-Agency-Id': '2'
        },
        next: { revalidate: 3600*24 } //24 de ore
    });
    return await response.json();
}

async function fetchAllShapes() {
    const values = Object.values(routeDictionary)
        .flatMap(value => [`${value}_0`, `${value}_1`]);;
  
    // Use Promise.all to call fetchShapes for each value in parallel
    return await Promise.all(values.map(value => fetchShapes(value)));
}

export default async function Page() {
    async function fetchVehicles(routeName: string) {
        const routeId = routeDictionary[routeName]
        const response = await fetch('https://api.tranzy.ai/v1/opendata/vehicles', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-API-KEY': process.env.NEXT_PUBLIC_TRANZY_API_KEY as string,
                'X-Agency-Id': '2'
            }
        });
        const data = await response.json();
        const filteredVehicles = data.filter(vehicle => vehicle.route_id === routeId && vehicle.trip_id !== null && (vehicle.trip_id.endsWith('_0') || vehicle.trip_id.endsWith('_1')));
    }

    const stopLocations = fetchStopLocations()
    const tripStops = fetchTripStops()
    const shapes = fetchAllShapes()

    return (
        <div>
            <h1>Tracker Bus CTP Cluj-Napoca</h1>
            <MainComponent stopLocationsPromise={stopLocations} tripStopsPromise={tripStops} shapesPromise={shapes}/>
            <div id="bottom-routefetchtext" style={{ position: 'fixed', bottom: '10px', left: '0', right: '0', textAlign: 'center', fontSize: '12px', color: 'black' }}>
                Last time fetching a route:
            </div>
            <div id="bottom-warningtext" style={{ position: 'fixed', bottom: '30px', left: '0', right: '0', textAlign: 'center', fontSize: '12px', color: 'black' }}>
                Some warning messages will be displayed here.
            </div>
        </div>
    );
}
