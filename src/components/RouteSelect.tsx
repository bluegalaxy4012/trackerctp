import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { routeDictionary } from 'helpers/constants';
import { bussesSort } from 'helpers/utils';

interface RouteSelectProps {
  routeValue: string;
  onRouteChange: (newRoute: string) => void;
}

export default function RouteSelect({ routeValue = "", onRouteChange }: RouteSelectProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onRouteChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 90, maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="route-select-label">Route</InputLabel>
        <Select
          labelId="route-simple-select-label"
          id="route-simple-select"
          value={routeValue}
          label="Route"
          onChange={handleChange}
          sx={{ textAlign: 'center' }} 
        >

          {Object.keys(routeDictionary).toSorted(bussesSort).map((key) => (
            <MenuItem key={key} value={key} sx={{ textAlign: 'center' }} >
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}