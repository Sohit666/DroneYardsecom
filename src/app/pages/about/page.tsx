"use client";
import React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import Box from '@mui/material/Box'; // Import Box from MUI for layout
import Button from '@mui/material/Button'; // Import Button from MUI
import CountUp from 'react-countup'; // Import CountUp from react-countup
import Grid from '@mui/material/Grid'; // Import Grid from MUI
import Avatar from '@mui/material/Avatar'; // Import Avatar from MUI
import Link from 'next/link'; // Import Link from next/link
import Model from "../../Components/model3d/about"

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
    title: 'Yosemite National Park',
    location: 'California, USA',
    imageUrl: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
  {
    title: 'Grand Canyon',
    location: 'Arizona, USA',
    imageUrl: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
  },
  {
    title: 'Zion National Park',
    location: 'Utah, USA',
    imageUrl: 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320',
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
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />

      {/* Other content below the video */}
      <div>
        <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>Your Content Below</h1>
        <p style={{ color: 'black', fontSize: '1.25rem', textAlign: 'center' }}>This is where your other component content goes.</p>
      </div>


      <div >
        <Model />
      </div>


      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: 'black',
          color: 'white',
          padding: '40px',
          gap: 4,
          width: '100%',
          borderRadius: '70px',
          marginTop: '-250px'
        }}
      >
        {statsData.map((stat, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              minWidth: '150px',
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
                fontSize: '1rem'
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

      <Box display="flex" justifyContent="space-between" p={2} marginTop={"20px"}>
        {/* Video Card */}
        <Card sx={{ flex: 1, marginRight: 2, position: 'relative', overflow: 'hidden' }}>
          <video
            autoPlay
            loop
            muted
            style={{ width: '100%', height: 'auto' }}
          >
            <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Card>

        {/* Text Card */}
        <Card sx={{ flex: 1, backgroundColor: '#ffffff' }}>
          <CardContent>
            <Typography component="div" gutterBottom>
              Card Title
            </Typography>
            <Typography>
              This is some descriptive text that provides more information about
              the topic related to the video in the adjacent card. You can add
              more details or context here.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop: '20px', textAlign: 'center' }}>Our Segments</h1>
      <Grid container spacing={4} justifyContent="center">
        {cardsData.map((card, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Card sx={{ minHeight: '280px', width: '100%', marginTop: '20px' }}>
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
                  startDecorator={<LocationOnRoundedIcon />}
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
