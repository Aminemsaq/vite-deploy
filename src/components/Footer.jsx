/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer');
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.footer 
      className="footer bg-emerald-600 text-white py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Left section */}
          <motion.div 
            className="footer-section mb-8 md:mb-0 md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold">Parapharmacie.</h3>
            <p className="text-sm leading-relaxed pr-10 pt-3">
              Nous vous accompagnons avec des produits de santé et de bien-être de haute qualité, adaptés à vos besoins. 
              Découvrez nos gammes de soins de la peau, suppléments, et bien plus encore.
            </p>
          </motion.div>

          {/* Middle section */}
          <motion.div 
            className="footer-section mb-8 md:mb-0 md:w-1/3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <ScrollLink to="home" smooth={true} duration={500} className="text-sm hover:text-gray-400 cursor-pointer">
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="product-list" smooth={true} duration={500} className="text-sm hover:text-gray-400 cursor-pointer">
                  Nos Produits
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="les-partenaires" smooth={true} duration={500} className="text-sm hover:text-gray-400 cursor-pointer">
                  Les Partenaires
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="specialoffer" smooth={true} duration={500} className="text-sm hover:text-gray-400 cursor-pointer">
                  Offres Spéciales
                </ScrollLink>
              </li>
            </ul>
          </motion.div>

          {/* Right section */}
          <motion.div 
            className="footer-section md:w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-4">Address</h2>
            <ul className="space-y-2">
              <li className="text-sm"><span className="font-bold">Address:</span> Av. du Parc, Mohammédia 28830</li>
              <li className="text-sm"><span className="font-bold">Email:</span> Contact@Moroccanmedia.Ma</li>
              <li className="text-sm"><span className="font-bold">Phone:</span> 0722221355</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-6 h-6 hover:text-gray-400"/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 hover:text-gray-400"/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-6 h-6 hover:text-gray-400"/>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 hover:text-gray-400"/>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="w-6 h-6 hover:text-gray-400"/>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div 
          className="mt-8 text-center text-sm font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Droit d'auteur ©2024. Tous droits réservés.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
