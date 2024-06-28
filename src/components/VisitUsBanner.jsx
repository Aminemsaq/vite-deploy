import { BiStore } from 'react-icons/bi'; // Importing an example icon from react-icons library
import visitUsBackground from '../assets/pharmacist-work.webp'; // Replace with your image path

function VisitUsBanner() {
  // Title and help text content
  const title = "Venez nous rendre visite !";
  const helpText = "Une experte sera là pour vous aider à choisir les meilleurs produits adaptés à vos besoins et préférences.";

  return (
    <div
      className="relative bg-cover bg-center bg-emerald-500 text-white py-4 lg:py-16 flex items-center justify-center"
      style={{ backgroundImage: `url(${visitUsBackground})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-800 to-transparent"></div>

      <div className="p-10 md:p-16 rounded-lg text-center relative z-10">
        <BiStore className="w-8 h-8 md:w-10 md:h-10 inline-block mb-4 text-white" /> {/* Icon */}
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h2> {/* Title */}
        <p className="text-base md:text-lg">{helpText}</p> {/* Help text */}
      </div>
    </div>
  );
}

export default VisitUsBanner;
