"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="embla__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`embla__dot ${selectedIndex === index ? 'is-selected' : ''}`}
            onClick={() => emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

const EmblaCarouselGroup = () => {
  const slides1 = ['https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320', 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320', 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320']; // Add your images
  const slides2 = ['https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320', 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320', 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320']; // Add your images
  const slides3 = ['https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320', 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320', 'https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320']; // Add your images

  return (
    <div className="embla-group">
      <EmblaCarousel slides={slides1} />
      <EmblaCarousel slides={slides2} />
      <EmblaCarousel slides={slides3} />
    </div>
  );
};

export default EmblaCarouselGroup;
