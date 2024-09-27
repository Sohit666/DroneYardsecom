'use client';
import React from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';

const LicensePage: React.FC = () => {
    const handleEnroll = () => {
        // Handle enrollment logic here
        alert('Enrollment button clicked!');
    };
    
    return (
        <Container sx={{marginTop:"20px"}}>
            <Typography variant="body1" sx={{fontSize:'80px',fontStyle:"revert-layer"}}gutterBottom>
                DGCA Approved License Program
            </Typography>
            <Typography sx={{ fontSize: "20px", fontWeight: "normal" }}>
  At Drone Yard, we offer an intensive 1-week DGCA-approved Drone Pilot License program designed to give aspiring drone pilots the skills and certification needed to fly professionally. This comprehensive course covers key aspects of drone operation, including safety protocols, airspace regulations, flight planning, and hands-on flying experience. Led by expert instructors, participants receive personalized guidance to ensure they are fully prepared for the DGCA exam and to earn their official drone pilot license. Whether you&apos;re starting a new career or enhancing your skill set, this program is your ideal path to becoming a certified drone operator.
</Typography>

        <Button 
            variant="contained" 
            sx={{ 
            bgcolor: "black", 
            color: "white", 
            marginTop: "15px", 
            padding: "15px", 
            display: "block", 
            marginLeft: "auto", 
            marginRight: "auto" 
            }} 
            onClick={handleEnroll}
        >
            Enroll Now
        </Button>
            <Grid container spacing={4} style={{ marginTop: '20px' , marginBottom:"25px" }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Program Image 1"
                            height="140"
                            image="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                            title="Program Image 1"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Program Image 1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description of the program image 1.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Program Image 2"
                            height="140"
                            image="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                            title="Program Image 2"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Program Image 2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description of the program image 2.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt="Program Image 3"
                            height="140"
                            image="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
                            title="Program Image 3"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                Program Image 3
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Description of the program image 3.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LicensePage;