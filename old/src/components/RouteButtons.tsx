import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface RouteButtonsProps {
    favouriteRoutes: string[];
    onButtonPress: (route: string) => void;
}
  
export default function RouteButtons({ favouriteRoutes, onButtonPress }: RouteButtonsProps) { 
    return (
        <Stack spacing={2} direction="row">
            {favouriteRoutes.map((route) => (
                <Button key={route} variant="contained" onClick={() => {onButtonPress(route)}}> {route} </Button>
            ))}
        </Stack>
    );
}