"use client";
import React, { useEffect, useState } from 'react';
import Carousel from './Homeitems/Carousel';
import Partitems from './Homeitems/partcards';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import Link from 'next/link';
import CustomerReviews from './Homeitems/Customereviews';
import dimg from '../Assets/Parts/droneimg.png';
import CountUp from 'react-countup';
import Three from './model3d/homepage';
import ScrollReveal from './scrollrevel';
import ServiceCard from "./Homeitems/horizontal"

interface Product {
  _id: string; // Use _id from MongoDB as the unique identifier
  name: string;
  desc: string;
  price: number; 
  type: string; // Add type to the Product interface
}

const segmentData = [
  {
    name: "Aerial Photography",
    description: "Capture stunning aerial images with our drones.",
    image: dimg.src,
    link: "/segments/aerial-photography",
  },
  {
    name: "Drone Racing",
    description: "Experience the thrill of racing drones.",
    image: dimg.src, 
    link: "/segments/drone-racing",
  },
  {
    name: "Agricultural Monitoring",
    description: "Use drones for precision agriculture.",
    image: dimg.src, 
    link: "/segments/agricultural-monitoring",
  },
];

const featuredImages = [
  dimg.src, 
  dimg.src, 
  dimg.src,
];

const statsData = [
  { value: 3500, label: 'Happy Customers' },
  { value: 45, label: 'Team Members' },
  { value: 4, label: 'Years of Work' },
  { value: 4500, label: 'Shipments Delivered' },
];

const Homepage: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  // Fetch featured products 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/products'); 
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        
        const filteredData = data.filter(product => 
          product.type === "Featured_products" 
        );
        setProductData(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>

      <ScrollReveal >
      <Carousel />
      </ScrollReveal>

      <div className='container'>
        <div style={{ width: '100%', height: '400px', position: 'relative', marginTop: "-80px" }}>
          <Three />
        </div>
      </div>
      <div style={{ marginTop: "400px" }}>

        <ScrollReveal >
        <Partitems />
        </ScrollReveal>
      </div>


<ScrollReveal>


      <Box
        className="drone-ad-container"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        flexWrap="wrap"
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
            <Button variant="outlined" sx={{ mr: 2, bgcolor: "black", color: "white" }}>Learn More</Button>
            <Button variant="contained" sx={{ bgcolor: "gray", color: "white" }}>Order Now</Button>
          </Box>
        </Box>

        {/* Image Section */}
        <Box className="drone-ad-image" flex="1" textAlign="right">
          <img
            src={dimg.src}
            alt="BIR V2 Drone"
            style={{
              width: '90%',
              height: '80%'
            }}
          />
        </Box>
      </Box>
      </ScrollReveal>

      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black', fontSize: "3rem" }}>

        <ScrollReveal>

        <Typography variant="h4" sx={{
          textAlign: 'center',
          fontSize: '3rem',
          color: 'black',
          marginTop:"50px"
        }} gutterBottom>
          Our Featured Products
        </Typography>
        </ScrollReveal>

        {/* Grid to hold products */}
        <ScrollReveal>
        <Grid container spacing={3} justifyContent="center">
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={featuredImages[index % featuredImages.length]} 
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.desc}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rs. {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={`/products/${product._id}`} style={{ textDecoration: 'none', margin: 'auto' }}>
                    <Button size="small" variant="contained" sx={{ bgcolor: "black", color: "white", margin: "auto", padding: "auto" }}>
                      Buy Now
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            
          ))}
        </Grid>
        </ScrollReveal>
      </Box>

      <ScrollReveal>
      <ServiceCard />
      </ScrollReveal>




  
      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black', marginTop:"50px" }}>

<ScrollReveal>
        <Typography variant="h4" sx={{ fontSize: "3rem" }} gutterBottom>
          Our Segments
        </Typography>
</ScrollReveal>
        {/* Grid to hold segment cards */}


        <ScrollReveal>
        <Grid container spacing={3} justifyContent="center">
          {segmentData.map((segment, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={segment.image} // Use the same image for segments
                  alt={segment.name}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {segment.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {segment.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link href={segment.link} style={{ textDecoration: 'none', margin: 'auto' }}>
                    <Button size="small" variant="contained" sx={{ bgcolor: "black", color: "white", margin: "auto", padding: "10px" }}>
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>

          ))}
        </Grid>
        </ScrollReveal>
      </Box>

      {/* Our Achievements */}

      <ScrollReveal>
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
          marginTop: '70px',
          marginBottom: '40px'
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
      </ScrollReveal>

      {/* About Section */}


      <section className="about-us">

        <ScrollReveal>
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            color: 'black',
            marginBottom: 2,
            fontSize: "3rem"
          }}
        >
          About DroneYards
        </Typography>
        </ScrollReveal>


        <ScrollReveal>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'black',
            maxWidth: '800px',
            margin: 'auto',
          }}
        >
          At DroneYards, we are passionate about revolutionizing the way people use drones. Our mission is to provide top-notch training, customizable drones, and reliable repair services to enthusiasts and professionals alike. Whether you’re a beginner looking to understand the basics of drone operation or a seasoned pilot seeking advanced techniques, we offer tailored training programs designed to meet your needs.

          In addition to training, we specialize in customizing drones to suit various applications, from aerial photography to agricultural monitoring. Our repair services ensure that your drone is always in optimal condition, minimizing downtime and maximizing your operational capabilities.

          Join us in exploring the skies with the latest drone technology, and let Drone Yard be your trusted partner in this exciting journey. We believe that with the right knowledge and tools, the possibilities with drones are endless, and we are here to help you soar to new heights!
        </Typography>
        </ScrollReveal>
      </section>

      {/* Customer Reviews Section */}

      <ScrollReveal>
      <CustomerReviews />
      </ScrollReveal>
      
    </div>
  );
};

export default Homepage;
