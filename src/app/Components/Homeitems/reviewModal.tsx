import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ReviewModalProps {
  open: boolean;
  handleClose: () => void;
  refreshReviews: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ open, handleClose, refreshReviews }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('review', review);
    formData.append('rating', rating.toString());
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post('http://localhost:3000/api/reviews', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      refreshReviews(); // Call the function to refresh reviews
      handleClose(); // Close the modal
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          Submit Your Review
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="Review"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
          <TextField
            label="Rating (1-5)"
            type="number"
            fullWidth
            margin="normal"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            inputProps={{ min: 1, max: 5 }}
            required
          />
          <input type="file" onChange={handleImageChange} />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit Review
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReviewModal;
