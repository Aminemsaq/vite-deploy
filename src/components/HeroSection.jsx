/* eslint-disable react/no-unescaped-entities */
import image1 from '../assets/image-hero.jpg'; // Replace with your image path

function HeroSection() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      className="relative text-white flex justify-center items-center mt-16"
      id="home"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh)', // Adjust to maintain full screen height
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
        <div className="text-center lg:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white">
            Bienvenue chez Parapharmacie,
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 lg:px-36 text-white">
            Découvrez Votre Chemin vers la Santé et la Beauté avec Parapharmacie Basma,
            Votre Source de Confiance pour des Produits de Santé et de Bien-être de Qualité.
          </p>
          <div className="flex justify-center">
            {/* Button for Smooth Scrolling */}
            <button
              onClick={scrollToNextSection}
              className="bg-emerald-600 text-white hover:bg-emerald-500 hover:text-white py-3 px-8 rounded-full shadow-md font-semibold transition duration-300">
              Appeler pour plus d'informations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
