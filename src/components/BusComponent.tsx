import { GoogleMap, Marker, Polyline, OverlayViewF, OverlayView } from "@react-google-maps/api";
import BusIcon from '@mui/icons-material/DirectionsBus';
import StopIcon from '@mui/icons-material/RadioButtonChecked';
import { BusElementData, getBussesPositions, getRouteShapePositions, getStopPositions, MapElementData } from "helpers/drawingUtil";
import { hiddenElementsMapStyle, routeDictionary } from "helpers/constants";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import { GetPixelPositionOffset } from "helpers/utils";
import Box from "@mui/material/Box";
import { Grid2 } from "@mui/material";


interface BusComponentProps {
    data: BusElementData;
    clicked: boolean;
    handleBusClick: (data: BusElementData) => void;
    handleEstimateTimeButtonClick: () => void;
}

export default function BusComponent({ data, clicked, handleBusClick, handleEstimateTimeButtonClick }: BusComponentProps) {


    return (
        <OverlayViewF mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET} position={data.position} getPixelPositionOffset={GetPixelPositionOffset} zIndex={clicked ? 10 : 0}>
            <Stack sx={{justifyContent: "center", alignItems: "center"}}>
                {clicked && (
                    <Grid2 alignItems="center" justifyItems="center" 
                        sx={{ 
                            minWidth: 200,
                            position: 'absolute',
                            bottom: '100%', // Position above the icon
                        }}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5"> {`Nr. ${data.id}`} </Typography>
                                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 12}}>{`${data.speed} km/h`}</Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: 12}}> Previous stop: </Typography>
                                <Typography variant="body2"> {data.previousStopName} </Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: 12}}> Next stop: </Typography>
                                <Typography variant="body2"> {data.nextStopName} </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent: "center", alignItems: "center"}}>
                                <Button size="small" variant="contained" onClick={handleEstimateTimeButtonClick} >Estimate time</Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                )}
                <IconButton aria-label="bus" onClick={() => handleBusClick(data)}>
                    <BusIcon style={{ color: data.color }} />
                </IconButton>
            </Stack>
        </OverlayViewF>
    );
}