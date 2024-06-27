/* eslint-disable react/no-unescaped-entities */
import{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function SpecialOffersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('#specialoffer');
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
      className="bg-gray-100 py-16"
      id="specialoffer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-emerald-600">
          Recevez nos offres spéciales
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center text-gray-700 max-w-2xl mx-auto">
          Soyez le premier à recevoir nos offres exclusives et nos dernières nouvelles via WhatsApp.
        </p>
        <div className="flex justify-center">
          <input
            type="tel"
            placeholder="Votre numéro de téléphone"
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-emerald-600 text-white rounded-r-md hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            S'inscrire
          </button>
        </div>
        <p className="text-sm mt-4 text-center text-gray-600 max-w-lg mx-auto">
          Vous pouvez vous désinscrire à tout moment. Consultez nos informations de contact dans les conditions d'utilisation du site.
        </p>
      </div>
    </motion.section>
  );
}

export default SpecialOffersSection;
