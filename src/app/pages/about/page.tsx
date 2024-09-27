"use client"
import React from 'react';

import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Box from '@mui/material/Box'; // Import Box from MUI for layout
import Button from '@mui/material/Button'; // Import Button from MUI
import CountUp from 'react-countup'; // Import CountUp from react-countup
import Grid from '@mui/material/Grid'; // Import Grid from MUI

import Avatar from '@mui/material/Avatar'; // Import Avatar from MUI

const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Yosemite National Park",
    location: "California, USA",
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Grand Canyon",
    location: "Arizona, USA",
  },
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Niagara Falls",
    location: "New York, USA",
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
  <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop:'20px',textAlign:'center' }}>Your Content Below</h1>
  <p style={{ color: 'black', fontSize: '1.25rem',  textAlign:'center'  }}>This is where your other component content goes.</p>
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
    marginTop: '20px'
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
          color: 'white', // Ensure the color is set to white
          fontSize: '1.5rem' // Adjust the size as needed
        }}
      >
        <CountUp start={1} end={stat.value} duration={2.5} />
      </Typography>
      <Typography
        sx={{
          color: 'white', // Ensure the color is set to white
          fontSize: '1rem' // Adjust the size as needed
        }}
      >
        {stat.label}
      </Typography>
    </Box>
  ))}
</Box>


    

<h1 style={{ color: 'black', fontSize: '2.5rem', marginTop:'20px',textAlign:'center' }}>What We Do</h1>
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
              startDecorator={<LocationOnRoundedIcon />}
              textColor="neutral.300"
            >
              {video.location}
            </Typography>
            {/* Add "Learn More" button */}
            <Button
              variant="contained"
              sx={{ marginTop: 2, backgroundColor: '#1976d2',margin:'10px' }}
              onClick={() => console.log(`Learn more about ${video.title}`)}
            >
              Learn More
            </Button>
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
          <Typography  component="div" gutterBottom>
            Card Title
          </Typography>
          <Typography >
            This is some descriptive text that provides more information about
            the topic related to the video in the adjacent card. You can add
            more details or context here.
          </Typography>
        </CardContent>
      </Card>
    </Box>




    <h1 style={{ color: 'black', fontSize: '2.5rem', marginTop:'20px',textAlign:'center' }}>Our Segments</h1>
    <Grid container spacing={4} justifyContent="center">
      {cardsData.map((card, index) => (
        <Grid item key={index} xs={12} sm={4}>
          <Card sx={{ minHeight: '280px', width: '100%' , marginTop:'20px'}}>
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




    <Grid container spacing={2} justifyContent="center">
      {foundersData.map((founder, index) => (
        <Grid item key={index} xs={12} sm={6}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '280px', marginTop:'20px', marginRight:'10px', marginLeft:'10px', marginBottom:'10px' }}>
            <Avatar
              alt={founder.name}
              src={founder.imageUrl}
              sx={{ width: 100, height: 100, marginTop: 2 }}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography  gutterBottom>
                {founder.name}
              </Typography>
              <Typography>
                {founder.message}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>




    <section className="about-us">
  <Typography
    
    sx={{
      textAlign: 'center', // Centers the heading
      color: 'black',      // Sets the text color to black
      marginBottom: 2, 
      marginTop:'70px',
      fontSize:'40px'     // Adds some margin below the heading
    }}
  >
    About DroneYards
  </Typography>
  <Typography
    sx={{
      textAlign: 'center', // Centers the paragraph text
      color: 'black',      // Sets the text color to black
      maxWidth: '800px',   // Optional: Adds a max-width for better readability
      margin: '0 auto',
      marginBottom:'20px'
         // Centers the text block horizontally
    }}
  >
 At Drone Yard, we are passionate about advancing drone technology through expert training, customization, and repair services. Our team of experienced professionals is dedicated to providing top-notch education and hands-on training to drone enthusiasts and professionals alike. Whether you’re a beginner looking to understand the basics of drone operation or a seasoned pilot seeking advanced techniques, we offer tailored training programs designed to meet your needs. 

In addition to training, we specialize in customizing drones to suit various applications, from aerial photography to agricultural monitoring. Our repair services ensure that your drone is always in optimal condition, minimizing downtime and maximizing your operational capabilities. 

Join us in exploring the skies with the latest drone technology, and let Drone Yard be your trusted partner in this exciting journey. We believe that with the right knowledge and tools, the possibilities with drones are endless, and we are here to help you soar to new heights!
  </Typography>
</section>

    </>
  );
};

export default About;