// components/DroneyardTraining.tsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia } from '@mui/material';
import Link from 'next/link';
import { keyframes } from '@mui/system';

interface DroneyardTrainingProps {
    images?: string[];
}

// Keyframes for smooth fade-in animation
const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const DroneyardTraining: React.FC<DroneyardTrainingProps> = ({ images = [] }) => {
    return (
        <Box
            sx={{
                p: 4,
                textAlign: 'center',
                
                color: 'white',
                animation: `${fadeIn} 1s ease-in-out`,
            }}
        >
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: '20px',
                    letterSpacing: '1px',
                    color: 'black',
                }}
                gutterBottom
            >
                Droneyard FPV Drone Training Program
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: 'black',
                    lineHeight: 1.6,
                    maxWidth: '800px',
                    margin: '0 auto 30px',
                    fontSize: '1.1rem',
                    animation: `${fadeIn} 1s ease-in-out 0.3s`,
                }}
                paragraph
            >
                Are you an aspiring student eager to explore the thrilling world of FPV (First-Person View) drone flying? Our expert-led, comprehensive training program is specifically designed to provide you with the essential skills and knowledge to become proficient in FPV drone flight. Through structured lessons and hands-on experience, we will guide you through every step of the learning process, from basic controls to advanced maneuvers. Whether you&apos;re a beginner or looking to refine your skills, our program ensures that you will gain the confidence to soar through the skies with precision and ease. Join us today and unlock your potential as an FPV drone pilot!
            </Typography>

            {/* Responsive Image Gallery with Hover Animation */}
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
                {images.map((image, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index} sx={{ padding: '10px' }}>
                        <Card
                            sx={{
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.15)',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 0.3s ease',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200" // Increased size for better visibility
                                image={image}
                                alt={`FPV Drone Training ${index + 1}`}
                                sx={{
                                    transition: 'transform 0.5s ease',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Call-to-action Button with Hover Effect */}
            <Link href="/pages/Services/train" passHref>
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        bgcolor: 'black',
                        color: 'white',
                        padding: '12px 24px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            bgcolor: '#333',
                            transform: 'scale(1.05)',
                            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                >
                    Learn More
                </Button>
            </Link>
        </Box>
    );
};

export default DroneyardTraining;
