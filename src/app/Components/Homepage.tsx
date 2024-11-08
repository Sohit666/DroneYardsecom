"use client";
import React, { useEffect, useState } from 'react';
import Carousel from './Homeitems/Carousel';
import Partitems from './Homeitems/partcards';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import Link from 'next/link';
import CustomerReviews from './Homeitems/Customereviews';
import dimg from '../Assets/Parts/droneimg.png';
import CountUp from 'react-countup';
import ScrollReveal from './scrollrevel';
import ServiceCard from "./Homeitems/horizontal"
import FPVProgram from './Homeitems/Fpvrender';

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
    image: '/homepage/moutains.jpg',
    link: "/segments/aerial-photography",
  },
  {
    name: "Drone Racing",
    description: "Experience the thrill of racing drones.",
    image: '/homepage/moutains.jpg',
    link: "/segments/drone-racing",
  },
  {
    name: "Agricultural Monitoring",
    description: "Use drones for precision agriculture.",
    image: '/homepage/moutains.jpg',
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
      <div >

        <ScrollReveal >
          <Partitems />
        </ScrollReveal>
      </div>






      <ScrollReveal>

      <FPVProgram />

      </ScrollReveal>


      


      <ScrollReveal>


        <Box
          className="drone-ad-container"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          flexWrap="wrap"
          sx={{
            padding: 4,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Text Section */}
          <Box className="drone-ad-content" textAlign="center" flex="1">
            <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold', fontSize: '2rem' }}>
              Buy Drones
            </Typography>
            <Typography variant="h6" sx={{ color: 'black', fontSize: '1.25rem', marginTop: 1 }}>
              Starting ₹ 35999*
            </Typography>
            <Typography sx={{ color: 'black', fontSize: '1rem', marginY: 1 }}>
              Grab up to ₹ 1000 Cart Discount<br />FOR FIRST 100 BUYERS
            </Typography>
            <Typography sx={{ color: 'black', fontStyle: 'italic', marginY: 1 }}>
              - Flight Time up to 20 mins* -
            </Typography>
            <Box mt={3}>
              <Button
                variant="outlined"
                sx={{
                  mr: 2,
                  bgcolor: "black",
                  color: "white",
                  boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
                  '&:hover': { bgcolor: '#333' }
                }}
              >
                Learn More
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "gray",
                  color: "white",
                  boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.3)',
                  '&:hover': { bgcolor: '#666' }
                }}
              >
                Order Now
              </Button>
            </Box>
          </Box>

          {/* Image Section */}
          <Box className="drone-ad-image" flex="1" textAlign="right">
            <img
              src="/homepage/Drone.png"
              alt="BIR V2 Drone"
              style={{
                width: '90%',
                height: '80%',
                filter: 'drop-shadow(10px 10px 6px #5d5c59)'

              }}
            />
          </Box>
        </Box>

      </ScrollReveal>

      <Box sx={{ flexGrow: 1, mt: 4, textAlign: 'center', color: 'black', px: 2 }}>
        <ScrollReveal>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mt: { xs: 3, md: 5 },
              mb: { xs: 2, md: 4 },
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'black',
            }}
            gutterBottom
          >
            Our Featured Products
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {productData.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
                <Card
                  sx={{
                    maxWidth: 330,

                    mx: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.35s, box-shadow 0.35s',
                    '&:hover': {
                      transform: 'scale(1.08)',
                      boxShadow: '0 10px 35px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={featuredImages[index % featuredImages.length]}
                    alt={product.name}
                    sx={{
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      objectFit: 'cover',
                      filter: 'brightness(90%)',
                      transition: 'filter 0.3s',
                      '&:hover': { filter: 'brightness(100%)' },
                    }}
                  />
                  <CardContent sx={{ padding: '24px' }}>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: '700',
                        mb: 1,
                        color: 'text.primary',
                        fontSize: { xs: '1.2rem', md: '1.5rem' },
                        textAlign: 'center',
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        textAlign: 'center',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                      }}
                    >
                      {product.desc}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.primary"
                      sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                      }}
                    >
                      Rs. {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                      <Button
                        size="medium"
                        variant="contained"
                        sx={{
                          bgcolor: 'black',
                          color: 'white',
                          '&:hover': {
                            bgcolor: '#333',
                          },
                          borderRadius: '25px',
                          px: 3,
                          py: 1,
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
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    maxWidth: 300,
                    margin: 'auto',
                    borderRadius: '20px', // More rounded border
                    overflow: 'hidden',
                    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', // Gradient background
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.07) rotate(1deg)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={segment.image}
                    alt={segment.name}
                    sx={{
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px',
                      objectFit: 'cover',
                      opacity: 0.9,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  />
                  <CardContent sx={{ padding: '25px', textAlign: 'center' }}>
                    <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: '700', color: '#333' }}>
                      {segment.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '10px', color: '#555' }}>
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
                          borderRadius: '25px',
                          padding: '12px 25px',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                          fontWeight: '600',
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
              paddingX: { xs: 2, sm: 4 }, 
              lineHeight: 1.6, 
              fontSize: { xs: '14px', sm: '16px', md: '18px' }, 
              fontWeight: 340, 
              letterSpacing: 0.5, 
              '@media (max-width: 600px)': {
                fontSize: '14px', 
              },
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

        <div>
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              margin: '20px 0',
              fontSize: { xs: '1rem', sm: '1rem', md: '3rem' },
              fontWeight: 'bold',
              color: 'black',
              textTransform: 'uppercase',
            }}
          >
            Customer Reviews
          </Typography>
        </div>




        <div style={{ marginBottom: "50px" }}>
          <CustomerReviews />
        </div>



      </ScrollReveal>

    </div>
  );
};

export default Homepage;
