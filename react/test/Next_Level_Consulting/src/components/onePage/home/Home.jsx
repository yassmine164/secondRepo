import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Home.css';


const Home = () => {
  const slides = [
    {
      id: 1,
      image: '/images/slide1.jpeg', // Image in the public folder
    },
    {
      id: 2,
      image: '/images/slide2.jpeg', // Image in the public folder
    },
    {
      id: 3,
      image: '/images/slide3.jpeg', // Image in the public folder
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1350&q=80', // Online image
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1350&q=80', // Online image
    },
  ];


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds between slides
    fade: true,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear', // Makes transition smoother
  };

  return (
    <div className="home">
      <div className="slideshow-background">
        <Slider {...settings} className="slideshow">
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-img" />
            </div>
          ))}
        </Slider>
        <div className="dots-overlay"></div>
      </div>
      <div className="content">
        <h1>NexTLevel Consulting</h1>
        <p>
          We specialize in photography, videography, UI/UX design, digital marketing,
          and app/web development. Let us help you take your brand to the next level!
        </p> 
      </div>
    </div>
  );
};

<div className="content">
  <h1>NexTLevel Consulting</h1>
  <p>
    We specialize in photography, videography, UI/UX design, digital marketing,
    and app/web development. Let us help you take your brand to the next level!
  </p>
  <button onClick={() => chatWithNlBot()} className="chatbot-button">
    Chat with NLBOT
  </button>
</div>

const chatWithNlBot = () => {
  // Logic to call the chatbot
  alert('Chatbot functionality is not implemented yet.');
};

export default Home;