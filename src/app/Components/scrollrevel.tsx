// components/ScrollReveal.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number; // Optional threshold for triggering the reveal
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, threshold = 0.5 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
  >
    
    <motion.div className="card" variants={cardVariants}>
      {children}
    </motion.div>
  </motion.div>
  );
};

export default ScrollReveal;
