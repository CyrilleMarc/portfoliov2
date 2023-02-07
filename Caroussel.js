import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "dist/images/tindev.PNG", alt: "tindev 1" },
    { src: "dist/images/sarahUrbin.PNG", alt: "Image 2" },
    { src: "dist/images/Epibet.PNG", alt: "Image 3" },
    { src: "dist/images/ttt.PNG", alt: "Image 3" },
  ];

  const handlePrevious = () => {
    const previousIndex = currentIndex - 1;
    setCurrentIndex(previousIndex < 0 ? images.length - 1 : previousIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex >= images.length ? 0 : nextIndex);
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
export default Carousel;
