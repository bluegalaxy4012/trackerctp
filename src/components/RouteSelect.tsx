import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { routeDictionary } from 'helpers/routedata';

interface RouteSelectProps {
  routeValue: string;
  onRouteChange: (newRoute: string) => void;
}

export default function RouteSelect({ routeValue = "", onRouteChange }: RouteSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onRouteChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 75, maxWidth: 90 }}>
      <FormControl fullWidth>
        <InputLabel id="route-select-label">Route</InputLabel>
        <Select
          labelId="route-simple-select-label"
          id="route-simple-select"
          value={routeValue}
          label="Route"
          onChange={handleChange}
        >

          {Object.keys(routeDictionary).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}