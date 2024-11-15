// pages/index.tsx
import DroneyardTraining from './Fpvprogram';

export default function Home() {
  const images = [
    '/homepage/1.jpg',
    '/homepage/2.jpg',
    '/homepage/3.jpg',
    '/homepage/4.jpg',
    '/homepage/5.jpg',
    '/homepage/6.jpg',
    '/homepage/7.jpg',
  ];

  return <DroneyardTraining images={images} />;
}
