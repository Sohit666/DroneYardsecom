"use client";
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { keyframes } from '@mui/system';

const customizableDrones = [
    {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '120 km/h',
        batteryLife: '30 mins',
        cameraQuality: '4K',
    },
    {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    },
    {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    },
    {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    },
    {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    },
    {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    },
];

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const CustomizablePage: React.FC = () => {
    return (
        <Container
            sx={{
                marginTop: '30px',
                textAlign: 'center',
                fontSize: '0px',
               
                color: 'black',
                paddingBottom: '40px',
                animation: `${fadeIn} 1s ease-in-out`,
            }}
        >
            <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold', marginBottom: '20px' }} gutterBottom>
                Customize Your FPV Drone with DroneYards
            </Typography>
            <Typography variant="body1" sx={{ color: 'black', marginBottom: '30px' }} paragraph>
                At DroneYards, we offer you the facility to make your own customizable FPV drone according to your needs.
                Check out some of our customizable drones below:
            </Typography>
            <Grid container spacing={4}>
                {customizableDrones.map((drone, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                color: 'black',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={drone.image}
                                alt={`Customizable Drone ${index + 1}`}
                                sx={{
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                    color: 'black',
                                    transition: 'transform 0.5s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
                                    Customizable Drone {index + 1}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <SpeedIcon /> Avg Speed: {drone.speed}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <BatteryChargingFullIcon /> Battery Life: {drone.batteryLife}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black', display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <CameraAltIcon /> Camera Quality: {drone.cameraQuality}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button
                href='/pages/contactus'
                variant="contained"
                color="primary"
                sx={{
                    marginTop: '30px',
                    padding: '12px 24px',
                    fontSize: '1.2rem',
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: '#333',
                    },
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    marginBottom: '25px',
                    animation: `${fadeIn} 1s ease-in-out 0.3s`,
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                    '&:active': {
                        transform: 'scale(0.98)',
                    },
                }}
            >
                Contact Us for Customizable Drone
            </Button>
        </Container>
    );
};

export default CustomizablePage;
