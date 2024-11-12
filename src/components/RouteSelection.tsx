import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import RouteButtons from './RouteButtons';
import RouteSelect from './RouteSelect';
import FavouriteButton from './FavouriteButton';

interface RouteSelectProps {
    route: string;
    favourites: string[];
    onRouteChange: (route: string) => void;
    addFavourite: () => void;
}
  
export default function RouteSelection({ route, favourites, onRouteChange, addFavourite }: RouteSelectProps) { 
    return (
    <Stack spacing={2}>
        <RouteButtons favouriteRoutes={favourites} onButtonPress={onRouteChange} />
        <Stack spacing={1} direction="row">
            <RouteSelect routeValue={route} onRouteChange={onRouteChange}/>
            <FavouriteButton isRouteFavourite={favourites.includes(route)} addFavourite={addFavourite}/>
        </Stack>
    </Stack>
    );
}