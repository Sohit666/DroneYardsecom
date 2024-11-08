"use client";
import React, { useEffect, useState } from 'react';
import { Avatar, Card, CardContent, Typography, Box, Rating, IconButton, Button } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import MUI arrow icons
import ReviewModal from './reviewModal'; // Import the ReviewModal

const ReviewCard = ({ name, review, image, rating }) => (
  <Card
    sx={{
      width: { xs: 120, sm: 150, md: 200 },
      height: { xs: 150, sm: 180, md: 200 },
      padding: 1,
      boxShadow: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 10px',
    }}
  >
    <Avatar alt={name} src={image} sx={{ width: 50, height: 50, marginBottom: 1 }} />
    <Typography variant="h6" component="div" align="center" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
      {name}
    </Typography>
    <Rating value={rating} readOnly precision={0.5} size="small" />
    <CardContent sx={{ padding: 0, textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
        {review}
      </Typography>
    </CardContent>
  </Card>
);

const CustomArrow = ({ onClick, className }) => (
  <IconButton
    onClick={onClick}
    className={className}
    sx={{
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)', // Vertically center the arrow
      zIndex: 9999, // Ensure the arrow is on top
      color: 'black',
      padding: 1.5,
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slight transparent background
      borderRadius: '50%', // Circular button shape
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slight shadow for visibility
      transition: 'all 0.3s ease', // Smooth transition for hover effects
      width: 50, // Set a specific width and height for the arrow button
      height: 50,

      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 1)', // Slightly more solid on hover
        transform: 'scale(1.1) translateY(-50%)', // Scaling effect on hover
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
        color: '#1976d2', // Change icon color on hover (blue in this case)
      },

      // For the next arrow
      '&.slick-next': {
        right: 0, // Align to the right
      },

      // For the previous arrow
      '&.slick-prev': {
        left: 0, // Align to the left
      },
    }}
  >
    {className?.includes("slick-next") ? (
      <ArrowForward sx={{ fontSize: '2rem' }} />
    ) : (
      <ArrowBack sx={{ fontSize: '2rem' }} />
    )}
  </IconButton>
);

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    setIsClient(true); // Indicates that the component is now rendered on the client
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("https://droneyards-940091678377.us-central1.run.app/api/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1200, // Large screens, show 4 cards
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // Medium screens, show 3 cards
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens, show 3 small cards
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480, // Extra small screens, show 3 small cards
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Render the slider only on the client side
  if (!isClient) return null;

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto' }}>
      {/* Add Review Button */}


      <Slider {...settings}>
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            name={review.name}
            review={review.review}
            image={review.image}
            rating={review.rating}
          />
        ))}
      </Slider>
      <Button
        variant="contained"
        sx={{
          margin: 'auto',
          marginBottom: 2,
          marginTop: "50px",
          bgcolor: '#333',
          color: '#fff',
          '&:hover': { bgcolor: '#222' },
          display: 'block', 
          mx: 'auto', 
        }}
        onClick={() => setModalOpen(true)} 
      >
        Add Review
      </Button>


      {/* Review Modal */}
      <ReviewModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)} // Close modal when the user clicks on the close button
        refreshReviews={() => {
          // Fetch new reviews after submitting a review
          const fetchReviews = async () => {
            try {
              const response = await fetch("https://droneyards-940091678377.us-central1.run.app/api/reviews");
              const data = await response.json();
              setReviews(data);
            } catch (error) {
              console.error("Error fetching reviews:", error);
            }
          };
          fetchReviews();
        }}
      />
    </Box>
  );
};

export default ReviewSlider;
