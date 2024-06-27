import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Import your images
import image1 from '../assets/young-woman-cleansing-face-after-makeup.png';
import image2 from '../assets/collection-beauty-products-with-copy-space.png';
import image3 from '../assets/moisturizer-beautiful-female-model.png';
import image4 from '../assets/woman-with-curly-hair-flower-it-from.png';
import image5 from '../assets/postnatal-period-with-mother-child.png';
import image6 from '../assets/handsome-shirtless-man-wiping-his-face-using-towel-while-standing-against-white-background.png';
import image7 from '../assets/close-up-woman-is-washing-soap-foam-from-her-hands-running-water.png';
import image8 from '../assets/beautiful-young-woman-with-clean-fresh-skin-look-away-girl-beauty-face-care-facial-treatment-cosmeto.png';
import image9 from '../assets/medical-workers-covid-pandemic-coronavirus-concept-professional-female-doctor-physician-face-mask.png';
import image10 from '../assets/redresse-dos-tonus-e1091-.webp';
import image11 from '../assets/argan-maroc-produits-cosmetique-bio-agadir.png';

// Example data for product categories (replace with your actual data)
const productCategories = [
  { id: 1, name: 'VISAGE', imageUrl: image1 },
  { id: 2, name: 'MAQUILLAGE', imageUrl: image2 },
  { id: 3, name: 'CORPS', imageUrl: image3 },
  { id: 4, name: 'CHEVEUX', imageUrl: image4 },
  { id: 5, name: 'BÉBÉ & MAMAN', imageUrl: image5 },
  { id: 6, name: 'HOMME', imageUrl: image6 },
  { id: 7, name: 'HYGIÈNE', imageUrl: image7 },
  { id: 8, name: 'SOLAIRE', imageUrl: image8 },
  { id: 9, name: 'SANTÉ', imageUrl: image9 },
  { id: 10, name: 'PARA-MÉDICAL', imageUrl: image10 },
  { id: 11, name: 'BIO', imageUrl: image11 },
  // Add more categories as needed
];

function ProductList() {
  const [isVisible, setIsVisible] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const updatedVisibility = productCategories.map(category => {
        const card = document.querySelector(`#product-${category.id}`);
        if (!card) return false;

        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = cardTop + card.clientHeight;

        // Check if the bottom of the card is within the viewport
        return cardBottom > containerTop && cardTop < windowHeight * 0.75;
      });

      setIsVisible(updatedVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white pt-10 pb-32" ref={containerRef} id='product-list'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-emerald-600">Nos Produits</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Découvrez notre gamme de produits de qualité</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map through product categories */}
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={`product-${category.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible[index] ? 1 : 0, y: isVisible[index] ? 0 : 50 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              {/* Category Image */}
              <div className="relative overflow-hidden">
                <img className="w-full h-64 object-cover transform scale-100 transition duration-500 ease-in-out hover:scale-110" src={category.imageUrl} alt={category.name} />
                <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white py-2 px-4">
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
