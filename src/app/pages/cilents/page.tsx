// src/app/clients.jsx
import React from 'react';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const clients = [
    {
        id: 1,
        name: 'Client A',
        description: 'Description for Client A',
        logoUrl: 'https://via.placeholder.com/150', 
    },
    {
        id: 2,
        name: 'Client B',
        description: 'Description for Client B',
        logoUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Client C',
        description: 'Description for Client C',
        logoUrl: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Client D',
        description: 'Description for Client D',
        logoUrl: 'https://via.placeholder.com/150',
    },
];

const ClientsPage = () => {
    return (
        <Container>
            {/* Video section */}
            <div style={{ position: 'relative', marginBottom: '20px', marginTop:'20px' }}>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '8px', // Optional: add border radius
                    }}
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> {/* Replace with your video URL */}
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <Typography variant="h1" align="center" color='black' gutterBottom>
                Our Clients
            </Typography>
            <Grid container spacing={4}>
                {clients.map((client) => (
                    <Grid item xs={12} sm={6} md={3} key={client.id}>
                        <Card>
                            <CardContent>
                                <img 
                                    src={client.logoUrl} 
                                    alt={`${client.name} logo`} 
                                    style={{ width: '100%', height: 'auto' }} 
                                />
                                <Typography variant="h5" component="div" gutterBottom>
                                    {client.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {client.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ClientsPage;
