import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './CustomerReviews.css';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from '@mui/material';
import ReviewModal from './reviewModal'; // Import the modal component

interface Review {
  _id: string;
  name: string;
  review: string;
  image?: string;
  rating: number; // Add rating to the Review interface
}

const CustomerReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'right' ? 300 : -300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const refreshReviews = () => {
    fetchReviews(); // Refresh reviews after submitting
  };

  const renderStars = (rating: number) => {
    return (
      <Box>
        {[...Array(5)].map((_, index) => (
          <span key={index}>
            {index < rating ? '★' : '☆'}
          </span>
        ))}
      </Box>
    );
  };

  if (loading) {
    return <Typography variant="h6" sx={{ textAlign: 'center' }}>Loading reviews...</Typography>;
  }

  return (
    <Box className="reviews-section" sx={{ padding: 4, display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: 'black',
          marginBottom: 3,
          fontSize: "3rem"
        }}
      >
        Customer Reviews
      </Typography>
      <Box className="reviews-slider" sx={{ flex: 1 }}>
        <Button onClick={() => scroll('left')} className="arrow-button left">
          &#10094; {/* Left Arrow */}
        </Button>
        <Box className="reviews-container" ref={scrollRef}>
          {reviews.map((review) => (
            <Card key={review._id} className="review-card">
              <CardMedia
                component="img"
                image={review.image || "https://picsum.photos/200/300"}
                alt={review.name}
                className="review-avatar"
                sx={{
                  width: '80%',
                  height: 'auto',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {review.name}
                </Typography>
                <Typography variant="body2">
                  {review.review}
                </Typography>
                <Box sx={{ marginTop: 1 }}>{renderStars(review.rating)}</Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Button onClick={() => scroll('right')} className="arrow-button right">
          &#10095; {/* Right Arrow */}
        </Button>
      </Box>





      <Button
  variant="contained"
  sx={{
    backgroundColor: 'black',
    color: 'white',
    margin: 'auto', 
    marginTop: '20px',
    padding: '10px 20px',
    width: '200px', 
    '&:hover': {
      backgroundColor: '#333', 
    },
    borderRadius: '10px',
  }}
  onClick={() => setModalOpen(true)}
>
  Add Review
</Button>


      <ReviewModal open={modalOpen} handleClose={() => setModalOpen(false)} refreshReviews={refreshReviews} />
    </Box>
  );
};

export default CustomerReviews;
