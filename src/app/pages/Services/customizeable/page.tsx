"use client";
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import CameraAltIcon from '@mui/icons-material/CameraAlt';



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
    }, {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    }, {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    }, {
        image: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
        speed: '100 km/h',
        batteryLife: '25 mins',
        cameraQuality: '1080p',
    },
    
];

    const CustomizablePage: React.FC = () => {
      
    
        return (
            <Container sx={{marginTop:"30px" , textAlign:"center", fontSize:"0px"}}>
            <Typography variant="h4"  sx={{color:"black"}} gutterBottom>
                Customize Your FPV Drone with DroneYards
            </Typography>
            <Typography variant="body1" paragraph>
                At DroneYards, we offer you the facility to make your own customizable FPV drone according to your needs. Check out some of our customizable drones below:
            </Typography>
            <Grid container spacing={4}>
                {customizableDrones.map((drone, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={drone.image}
                                alt={`Customizable Drone ${index + 1}`}
                            />
                            <CardContent>
                                <Typography variant="h6">Customizable Drone {index + 1}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <SpeedIcon /> Avg Speed: {drone.speed}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <BatteryChargingFullIcon /> Battery Life: {drone.batteryLife}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <CameraAltIcon /> Camera Quality: {drone.cameraQuality}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button href='/pages/contactus'
                variant="contained" 
                color="primary" 
                style={{ 
                    marginTop: "20px", 
                    display: "block", 
                    marginLeft: "auto", 
                    marginRight: "auto", 
                    backgroundColor: "black", 
                    fontSize: "1.2rem", 
                    padding: "10px 20px",
                    transition: "background-color 0.3s ease",
                    marginBottom:"25px"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "gray")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "black")}
              
            >
                Contact Us for Customizable Drone
            </Button>
        </Container>
    );
};

export default CustomizablePage;

