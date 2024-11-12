// components/DroneyardTraining.tsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia } from '@mui/material';
import Link from 'next/link';

interface DroneyardTrainingProps {
    images?: string[];
}

const DroneyardTraining: React.FC<DroneyardTrainingProps> = ({ images = [] }) => {
    return (
        <Box
            sx={{
                p: 4,
                textAlign: 'center',
                bgcolor: 'background.paper',
                color: 'text.primary',
            }}
        >
            <Typography variant="h4" component="h2" gutterBottom>
                Droneyard FPV Drone Training Program
            </Typography>
            <Typography variant="body1" gutterBottom>
                Are you an aspiring student eager to explore the thrilling world of FPV (First-Person View) drone flying? Our expert-led, comprehensive training program is specifically designed to provide you with the essential skills and knowledge to become proficient in FPV drone flight. Through structured lessons and hands-on experience, we will guide you through every step of the learning process, from basic controls to advanced maneuvers. Whether you&apos;re a beginner or looking to refine your skills, our program ensures that you will gain the confidence to soar through the skies with precision and ease. Join us today and unlock your potential as an FPV drone pilot!
            </Typography>

            {/* Responsive Image Gallery */}
            <Grid container spacing={0} justifyContent="center" sx={{ mt: 3 }}>
                {images.map((image, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index} sx={{ padding: '10px' }}>
                        <Card sx={{ borderRadius: 0 }}>
                            <CardMedia
                                component="img"
                                height="150"  // Medium size adjustment
                                image={image}
                                alt={`FPV Drone Training ${index + 1}`}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Call-to-action Button */}
            <Link href="/pages/Services/train" passHref>
                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        bgcolor: 'black',
                        color: 'white',
                        padding: '12px 24px',
                        '&:hover': {
                          bgcolor: 'grey.800',
                          color: 'white',
                          transform: 'scale(1.05)',
                          transition: 'all 0.3s ease-in-out',
                        }
                    }}
                >
                    Learn More
                </Button>
            </Link>
        </Box>
    );
};

export default DroneyardTraining;
