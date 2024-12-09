import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import the carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import styles
import img3 from "../../../../public/Template/9.png";
import img2 from "../../../../public/Template/10.png";
import img1 from "../../../../public/Template/11.png";
import img4 from "../../../../public/Template/5.png";

const HomeCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={3000}>
      <div>
        <img src={img1.src} alt="image1" />
      </div>
      <div>
        <img src={img2.src} alt="image2" />
      </div>
      <div>
        <img src={img3.src} alt="image3" />
      </div>
      <div>
        <img src={img4.src} alt="image4" />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
