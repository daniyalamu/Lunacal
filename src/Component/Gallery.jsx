import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';

export default function Gallery() {
    const boxShadowStyle = {
        boxShadow:
            'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
    };

    return (
        <Box sx={{ p: 2 }}>
            {/* Top Section with Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                {/* Left-aligned "Gallery" Button */}
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'black', // Black background
                        color: 'white',
                        ...boxShadowStyle,
                    }}
                >
                    Gallery
                </Button>

                {/* Right-aligned Buttons */}
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#363C43', // Component color
                            color: 'white',
                            mr: 1,
                            ...boxShadowStyle,
                        }}
                    >
                        Add Image
                    </Button>
                    <IconButton
                        sx={{
                            backgroundColor: '#363C43', // Component color
                            color: 'white',
                            mr: 1,
                            ...boxShadowStyle,
                        }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton
                        sx={{
                            backgroundColor: '#363C43', // Component color
                            color: 'white',
                            ...boxShadowStyle,
                        }}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
            </Box>

            {/* Image Section */}
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                    <Box
                        component="img"
                        src="../Image/Angle.png"
                        alt="Image 1"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        component="img"
                        src="../Image/Angle.png"
                        alt="Image 2"
                        sx={{ width: '100%' }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Box
                        component="img"
                        src="../Image/Angle.png"
                        alt="Image 3"
                        sx={{ width: '100%' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
