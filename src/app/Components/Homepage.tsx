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
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`); 
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

      
      <Carousel />
     

      <div className='container'>
        <div style={{ width: '100%', height: '400px', position: 'relative', marginTop: "50px" }}>
          <Three />
        </div>
      </div>
      <div style={{marginTop: "-200px" }}>

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

      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black' }}>
  <ScrollReveal>
    <Typography
      variant="h4"
      sx={{
        fontSize: '3rem',
        marginTop: "50px",
        marginBottom: "30px",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}
      gutterBottom
    >
      Our Featured Products
    </Typography>
  </ScrollReveal>

  <ScrollReveal>
    <Grid container spacing={4} justifyContent="center">
      {productData.map((product, index) => (
        <Grid item xs={12} sm={6} md={3} key={product._id}> {/* Changed md={4} to md={3} */}
          <Card
            sx={{
              maxWidth: 300, // Reduced max width from 345 to 300
              margin: 'auto',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={featuredImages[index % featuredImages.length]}
              alt={product.name}
              sx={{
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ padding: '20px' }}>
              <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: '600' }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                {product.desc}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                Rs. {product.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
              <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    '&:hover': {
                      bgcolor: '#333',
                    },
                    borderRadius: '20px',
                    padding: '10px 20px',
                  }}
                >
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




  
      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black', marginTop: "50px" }}>
  <ScrollReveal>
    <Typography
      variant="h4"
      sx={{
        fontSize: "3rem",
        marginBottom: "30px",
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
      }}
      gutterBottom
    >
      Our Segments
    </Typography>
  </ScrollReveal>

  <ScrollReveal>
    <Grid container spacing={4} justifyContent="center">
      {segmentData.map((segment, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}> {/* Changed md={4} to md={3} */}
          <Card
            sx={{
              maxWidth: 300, // Reduced max width for smaller cards
              margin: 'auto',
              borderRadius: '15px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={segment.image}
              alt={segment.name}
              sx={{
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                objectFit: 'cover',
              }}
            />
            <CardContent sx={{ padding: '20px' }}>
              <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: '600' }}>
                {segment.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px' }}>
                {segment.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
              <Link href={segment.link} style={{ textDecoration: 'none' }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    '&:hover': {
                      bgcolor: '#333',
                    },
                    borderRadius: '20px',
                    padding: '10px 20px',
                  }}
                >
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
