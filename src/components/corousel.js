import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export default function Carousel() {
  const images = [
    "/images/imagem1.jpeg",
    "/images/imagem2.jpeg",
    "/images/imagem3.jpeg",
    "/images/imagem4.jpeg",
    "/images/imagem5.jpeg",
    "/images/imagem6.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <div className="carousel-header">
          <h2 className="carousel-title">Nossos Trabalhos</h2>
          <p className="carousel-subtitle">Confira alguns dos nossos atendimentos recentes</p>
        </div>
        
        <div className="carousel-wrapper">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="slide-wrapper">
                <div className="slide-content">
                  <img
                    src={img}
                    alt={`Trabalho ${index + 1}`}
                    className="slide-image"
                    loading="lazy"
                  />
                  <div className="slide-overlay">
                    <span className="slide-label">Trabalho #{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}