import './CustomerReviews.css'; // Import the CSS for styling
import Typography from '@mui/material/Typography'; // Import Typography from Material-UI

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      review: "Amazing service! Highly recommend.",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "The experience was great and the staff was very helpful.",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 3,
      name: "Michael Johnson",
      review: "A wonderful experience from start to finish.",
      avatar: "https://picsum.photos/200/300",
    },
    {
      id: 4,
      name: "Emily Williams",
      review: "Definitely coming back! The best I've seen.",
      avatar: "https://picsum.photos/200/300",
    },
  ];

  return (
    <div className="reviews-section">
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
      <div className="reviews-slider">
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <img src={review.avatar} alt={review.name}  className="review-avatar" style={{margin :"auto"}} />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
          {/* Duplicating the reviews for continuous scroll */}
          {reviews.map((review) => (
            <div key={`${review.id}-duplicate`} className="review-card">
              <img src={review.avatar} alt={review.name} className="review-avatar" style={{margin :"auto"}} />
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
