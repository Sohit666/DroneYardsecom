
"use client"
import React from 'react'
import Carousel from './Homeitems/Carousel'
import Partitems from './Homeitems/partcards'
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material'
import CustomerReviews from './Homeitems/Customereviews'
import dimg from '../Assets/Parts/droneimg.png'
import CountUp from 'react-countup';
import Three from './three'




const productData = [
  {
    name: "Product 1",
    description: "This is the description for Product 1.",
    image: dimg, // Replace with actual image path
  },
  {
    name: "Product 2",
    description: "This is the description for Product 2.",
    image: dimg, // Replace with actual image path
  },
  {
    name: "Product 3",
    description: "This is the description for Product 3.",
    image: dimg, // Replace with actual image path
  },
];



const statsData = [
  { value: 3500, label: 'Happy Customers' },
  { value: 45, label: 'Team Members' },
  { value: 4, label: 'Years of Work' },
  { value: 4500, label: 'Shipments Delivered' },
];

const Homepage = () => {
  return (
    <div>
      <Carousel />
      <div className='container'>
      <Three/>
      </div>
      
      <Partitems />




      <Box
        className="drone-ad-container"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        flexWrap="wrap" // For better responsiveness in smaller screens
      >
        {/* Text Section */}
        <Box className="drone-ad-content" textAlign="center" flex="1">
          <Typography variant="h4" sx={{ color: 'black' }}>Buy Drones</Typography>
          <Typography variant="h6" sx={{ color: 'black' }}>Starting ₹ 35999*</Typography>
          <Typography sx={{ color: 'black' }}>
            Grab up to ₹ 1000 Cart Discount<br />FOR FIRST 100 BUYERS
          </Typography>
          <Typography sx={{ color: 'black' }} className="flight-time">
            - Flight Time up to 20 mins* -
          </Typography>
          <Box mt={2}>
            <Button variant="outlined" sx={{ mr: 2 }}>Learn More</Button>
            <Button variant="contained" color="primary">Order Now</Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box className="drone-ad-image" flex="1" textAlign="right"> {/* Right-aligned image */}
          <img
            src={dimg.src}
            alt="BIR V2 Drone"
            style={{
              width: '100%',  // Increase the width as needed
              height: 'auto'
            }}
          />
        </Box>
      </Box>



      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black' , fontSize:"3rem" }}>
        <Typography variant="h4" sx={{ 
          textAlign: 'center', 
          fontSize: '3rem',    
          color: 'black',
        }} gutterBottom>
          Our Feature Products
        </Typography>

        {/* Grid to hold 3 cards in a row */}
        <Grid container spacing={3} justifyContent="center">
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={typeof product.image === 'string' ? product.image : product.image.src}
                  alt={product.name}
                />

                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" sx={{margin:"auto"}}>
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>





      <Box sx={{ flexGrow: 1, mt: 4, marginTop: '90px' }}>
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: 3,
                marginLeft: '9px'
              }}
            >
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video source
                autoPlay
                loop
                muted
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures the video covers the entire box
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Two Vertically Aligned Cards */}
          <Grid item xs={12} md={6}>
            <Grid container direction="column" spacing={3} sx={{ height: '100%' }}>
              {/* First Card */}
              <Grid item xs={6}>
                <Card sx={{ height: '100%', marginRight: '9px' }}>
                  <CardMedia
                    component="img"
                    height="200" // Adjust the height as per your design
                    image="/path/to/image1.jpg" // Replace with your image source
                    alt="Image 1"
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Image Card 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description for Image Card 1
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Card */}
              <Grid item xs={6}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200" // Adjust the height as per your design
                    image="/path/to/image2.jpg" // Replace with your image source
                    alt="Image 2"
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Image Card 2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description for Image Card 2
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>




      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black' }}>
        <Typography variant="h4" sx={{fontSize:"3rem"}} gutterBottom>
          Our Segments
        </Typography>

        {/* Grid to hold 3 cards in a row */}
        <Grid container spacing={3} justifyContent="center">
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={typeof product.image === 'string' ? product.image : product.image.src}
                  alt={product.name}
                />

                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" sx={{margin:"auto"}}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>



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
    marginTop: '40px',
    marginBottom :'40px'
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



      <section className="about-us">
  <Typography
    variant="h4"
    sx={{
      textAlign: 'center', // Centers the heading
      color: 'black',      // Sets the text color to black
      marginBottom: 2, 
      fontSize:"3rem"
           // Adds some margin below the heading
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
         // Centers the text block horizontally
    }}
  >
 At Drone Yard, we are passionate about advancing drone technology through expert training, customization, and repair services. Our team of experienced professionals is dedicated to providing top-notch education and hands-on training to drone enthusiasts and professionals alike. Whether you’re a beginner looking to understand the basics of drone operation or a seasoned pilot seeking advanced techniques, we offer tailored training programs designed to meet your needs. 

In addition to training, we specialize in customizing drones to suit various applications, from aerial photography to agricultural monitoring. Our repair services ensure that your drone is always in optimal condition, minimizing downtime and maximizing your operational capabilities. 

Join us in exploring the skies with the latest drone technology, and let Drone Yard be your trusted partner in this exciting journey. We believe that with the right knowledge and tools, the possibilities with drones are endless, and we are here to help you soar to new heights!
  </Typography>
</section>


      <CustomerReviews/>

    </div>
  )
}

export default Homepage
    