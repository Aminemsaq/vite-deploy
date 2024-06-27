import icon from '../assets/2062095_application_chat_communication_logo_whatsapp_icon.svg.webp';

function CtaSection() {
  const openWhatsApp = () => {
    // Replace with your WhatsApp number or link
    const whatsappNumber = 'YOUR_WHATSAPP_NUMBER_OR_LINK';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex items-center justify-center flex-col">
          <h2 className="text-3xl font-bold text-emerald-600 mb-4">Besoin de conseils personnalisés ?</h2>
          <p className="text-lg text-gray-800 mb-8">
            Nos experts sont là pour vous guider dans le choix des meilleurs produits cosmétiques et paramédicaux adaptés à vos besoins.
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-8 rounded-full shadow-md font-semibold transition duration-300 flex items-center"
          >
            <img src={icon} alt="WhatsApp" className="w-6 h-6 mr-2" />
            Discutez avec nous sur WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
