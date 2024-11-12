import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar, Typography, Box, Menu, MenuItem, Button, Tooltip, Avatar, Switch } from "@mui/material";
import pages from "next/dist/build/templates/pages";
import { useMemo, useState } from "react";
import { createTheme } from '@mui/material/styles';
  
export default function FavouriteButton() {

    return (
        <AppBar position="static">
            <Container maxWidth={false}>
            <Toolbar disableGutters>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                    }}
                    >
                    Tracker Bus CTP Cluj-Napoca
                </Typography>
            </Toolbar>
            </Container>
        </AppBar>
    );
}