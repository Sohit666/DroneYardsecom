"use client";
import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import Box from '@mui/material/Box'; // Import Box from MUI for layout
import Button from '@mui/material/Button'; // Import Button from MUI
import CountUp from 'react-countup'; // Import CountUp from react-countup
import Grid from '@mui/material/Grid'; // Import Grid from MUI
import Avatar from '@mui/material/Avatar'; // Import Avatar from MUI
import Link from 'next/link'; // Import Link from next/link
// import Model from "../../Components/model3d/about"

const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Training Program",
    location: "California, USA",
    link: "/pages/Services/train", // Add a link for the button
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "DGCA Approved License",
    location: "Arizona, USA",
    link: "/pages/Services/license", // Add a link for the button
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Customizable Drones",
    location: "New York, USA",
    link: "/pages/Services/customizeable", // Add a link for the button
  },
];

const cardsData = [
  {
    title: 'FPV & DJI Training Program',
    location: 'Master the skills of piloting drones with our expert-led training programs.',
    imageUrl: '/about/1.png',
  },
  {
    title: 'Precision Aerial Services',
    location: 'Enhance your operations with drones for inspections, agriculture, and more.',
    imageUrl: '/about/2.png',
  },
  {
    title: 'Aerial Photography & Shoots',
    location: 'Capture stunning visuals for real estate, events, and creative projects.',
    imageUrl: '/about/3.png',
  },
  {
    title: 'Customizable FPV Drones',
    location: 'Experience tailored FPV drones for racing, freestyle, or professional needs.',
    imageUrl: '/about/4.png',
  },
];


const statsData = [
  { value: 3500, label: 'Happy Customers' },
  { value: 45, label: 'Team Members' },
  { value: 4, label: 'Years of Work' },
  { value: 4500, label: 'Shipments Delivered' },
];

const foundersData = [
  {
    name: 'Founder Name',
    message: 'Our mission is to provide the best services to our customers.',
    imageUrl: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
  {
    name: 'Co-Founder Name',
    message: 'Together, we strive to innovate and lead the industry.',
    imageUrl: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
];

const About = () => {
  return (
    <>
      {/* Video Section */}
      <video
        src="https://www.w3schools.com/tags/movie.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />

      {/* Other content below the video */}
      <div>
        <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>Your Content Below</h1>
        <p style={{ color: 'black', fontSize: '1.25rem', textAlign: 'center',marginTop:"10px" }}>This is where your other component content goes.</p>
      </div>


      


      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          paddingY: { xs: '10px', sm: '20px' },
          gap: { xs: 0.5, sm: 2 },
          width: { xs: '100%', sm: '60%' }, // Use a wider width on mobile for better fit
          borderRadius: { xs: '30px', sm: '50px' },
          marginTop: { xs: '20px', sm: '30px' },
          marginBottom: { xs: '10px', sm: '20px' },
          margin: '0 auto', // Center horizontally
          overflowX: 'auto',
          paddingX: { xs: '5px', sm: '20px' },
        }}
      >
        {statsData.map((stat, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              minWidth: '80px', // Further reduce width for tight fit
              maxWidth: '150px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: '1.5rem'
              }}
            >
              <CountUp start={1} end={stat.value} duration={2.5} />
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '0.5rem'
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>




      <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>What We Do</h1>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap',
          margin: '0 auto',
          width: '100%',
          marginTop: '40px',
        }}
      >
        {videos.map((video, index) => (
          <Card key={index} sx={{ minHeight: '280px', width: 320 }}>
            <CardCover>
              <video
                src={video.src}
                autoPlay
                loop
                muted
                controls={false}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
              }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
              <Typography level="title-lg" textColor="#fff">
                {video.title}
              </Typography>
              <Typography
                startDecorator={<AcUnitTwoToneIcon />}
                textColor="neutral.300"
              >
                {video.location}
              </Typography>
              {/* Updated Link component */}
              <Link href={video.link} passHref>
                <Button
                  variant="contained"
                  sx={{ marginTop: 2, backgroundColor: '#1976d2', margin: '10px' }}
                >
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>





      <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    gap: { xs: 2, sm: 4 }, // Add responsive gap between cards
    flexDirection: { xs: 'column', sm: 'row' }, // Stack cards on smaller screens
    padding: { xs: 2, sm: 3 }, // Increase padding for larger screens
    marginTop: '20px',
    width: '100%',
    alignItems: 'center',
  }}
>
  {/* Video Card */}
  <Card
    sx={{
      flex: 1,
      marginRight: { sm: 2 }, // Keep spacing between cards only on larger screens
      marginBottom: { xs: 2, sm: 0 }, // Margin at the bottom for mobile view
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px', // Smooth corners for the card
      boxShadow: 3, // Add subtle shadow for better depth
    }}
  >
    <video
      autoPlay
      loop
      muted
      controls={false}
      style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px', // Make the video corners match the card
      }}
    >
      <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Card>

  {/* Text Card */}
  <Card
    sx={{
      flex: 1,
      backgroundColor: '#ffffff',
      borderRadius: '8px', // Matching border radius with video card
      boxShadow: 3, // Add subtle shadow for better depth
      padding: 3, // Consistent padding inside the card
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <CardContent>
      <Typography
        component="div"
        gutterBottom
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Responsive title size
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Card Title
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '1rem', sm: '1.125rem' }, // Adjust text size for readability
          color: 'text.secondary',
        }}
      >
        This is some descriptive text that provides more information about the topic related to the video in the adjacent card. You can add more details or context here.
      </Typography>
    </CardContent>
  </Card>
</Box>

      <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>Our Segments</h1>
      <Grid container spacing={4} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Card sx={{ minHeight: '300px', width: '100%', marginTop: '20px' }}>
              <CardCover>
                <img
                  src={card.imageUrl}
                  loading="lazy"
                  alt={card.title}
                />
              </CardCover>
              <CardCover
                sx={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
              />
              <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                  {card.title}
                </Typography>
                <Typography
                  
                  textColor="neutral.300"
                >
                  {card.location}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>








      {/* Founders Section */}

      <div style={{ marginBottom: "30px" }}>


        <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>Founders</h1>
        <Grid container spacing={4} justifyContent="center">
          {foundersData.map((founder, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', p: 2 }}>
                <Avatar src={founder.imageUrl} sx={{ width: 80, height: 80, marginRight: 2 }} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography level="title-md" textColor="#000" sx={{ fontWeight: 'bold' }}>
                    {founder.name}
                  </Typography>
                  <Typography textColor="neutral.500">
                    {founder.message}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

    </>
  );
};

export default About;
