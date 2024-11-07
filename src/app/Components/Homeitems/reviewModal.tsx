import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  CircularProgress,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const headingStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  mb: 2,
  color:"black"
};

const fileUploadContainerStyle = {
  marginTop: '1rem',
  marginBottom: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
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
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('review', review);
    formData.append('rating', rating.toString());
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/reviews`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      refreshReviews();
      handleClose();
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setLoading(false); // End loading
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
        <Typography variant="h6" component="h2" sx={headingStyle}>
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
          <Box sx={fileUploadContainerStyle}>
            <Typography variant="subtitle1" color="textSecondary">
              Upload Your Image
            </Typography>
            <input type="file" onChange={handleImageChange} style={{ marginTop: '8px' }} />
          </Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: '#333', 
              color: '#fff', 
              '&:hover': {
                bgcolor: '#222', 
              },
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Review'}
          </Button>

        </form>
      </Box>
    </Modal>
  );
};

export default ReviewModal;
