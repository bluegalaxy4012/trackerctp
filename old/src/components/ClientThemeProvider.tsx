'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { ReactNode } from 'react';

// Define the dark theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// Client-side ThemeProvider component
export default function ClientThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
