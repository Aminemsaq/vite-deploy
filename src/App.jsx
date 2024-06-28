import  { useState, useEffect } from 'react';
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import PartnersSection from "./components/PartnersSection";
import ProductList from "./components/ProductList";
import SpecialOffersSection from "./components/SpecialOffersSection";
import Footer from "./components/Footer";
import icon from "./assets/2062095_application_chat_communication_logo_whatsapp_icon.svg.webp";
import CTA from './components/CTA';
import VisitUsBanner from './components/VisitUsBanner';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        } else {
          return prevProgress + 30; // Increase progress by 10 every interval
        }
      });
    }, 200); // Interval time for simulating progress

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-white flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-emerald-600 mb-4">Bienvenue</h2>
            <p className="text-lg text-gray-800">Nous préparons votre expérience unique...</p>
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden mt-4">
              <div
                className="bg-emerald-600 text-center py-1 text-white"
                style={{ width: `${progress}%`, transition: 'width 0.2s ease-in-out' }}
              >
                {progress}%
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <NavBar />
          <HeroSection />
          <ProductList />
          <VisitUsBanner />
          <CTA />
          <PartnersSection />
          {/* WhatsApp Icon */}
          <div className="fixed bottom-5 right-5 z-50">
            <img src={icon} alt="WhatsApp" className="w-14 h-14 cursor-pointer" />
          </div>
          <SpecialOffersSection />
          <Footer />
        </div>
      )}
    </>
  );
}
