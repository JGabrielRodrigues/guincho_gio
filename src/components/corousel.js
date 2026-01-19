import React, { useState, useEffect } from 'react';
import './carousel.css';

export default function ImprovedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const images = [
    { src: "/images/imagem1.jpeg", alt: "Trabalho 1" },
    { src: "/images/imagem2.jpeg", alt: "Trabalho 2" },
    { src: "/images/imagem3.jpeg", alt: "Trabalho 3" },
    { src: "/images/imagem4.jpeg", alt: "Trabalho 4" },
    { src: "/images/imagem5.jpeg", alt: "Trabalho 5" },
    { src: "/images/imagem6.jpeg", alt: "Trabalho 6" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        {/* Header */}
        <div className="carousel-header">
          <h2 className="carousel-title">Nossos Trabalhos</h2>
          <p className="carousel-subtitle">
            Confira alguns dos nossos atendimentos recentes
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <div className="slide-content">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="slide-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

         
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrevious}
            aria-label="Imagem anterior"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Próxima imagem"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}