import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import partner1 from '../assets/11.webp'; // Example partner logo image
import partner2 from '../assets/12.webp'; // Example partner logo image
import partner3 from '../assets/24.webp'; // Example partner logo image
import partner4 from '../assets/41.webp'; // Example partner logo image
import partner5 from '../assets/678.webp'; // Example partner logo image 

function PartnersSection() {
  const partners = [
    { id: 1, image: partner1, alt: 'Partner 1' },
    { id: 2, image: partner2, alt: 'Partner 2' },
    { id: 3, image: partner3, alt: 'Partner 3' },
    { id: 4, image: partner4, alt: 'Partner 4' },
    { id: 5, image: partner5, alt: 'Partner 5' },
  ];

  // Duplicate partners to create an infinite loop effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5, // Adjust the number of logos visible at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true, // Center the current slide
    centerPadding: '0', // Remove padding
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#les-partenaires');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      className="relative bg-white py-10 pt-32"
      id="les-partenaires"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-emerald-600">Nos Partenaires</h1>
        <Slider {...settings} className="slider-items">
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center px-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={partner.image} alt={partner.alt} className="w-auto h-16 md:h-30 lg:h-40 object-contain"/>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
}

export default PartnersSection;
