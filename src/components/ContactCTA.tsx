import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Left Illustration - Hidden on mobile */}
          <div className="w-1/4 -ml-8 hidden md:flex items-center">
            <img 
              src="/contact&faq1.svg" 
              alt="Illustration de Panneaux de Stationnement"
              className="w-full h-[300px] object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="text-center max-w-2xl mx-auto px-4 md:px-8">
            <span className="inline-block px-6 py-2 mb-6 text-[#1A73E8] bg-[#e6f7ff] rounded-full text-sm font-medium">
              Contact & FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-8">
              Des Questions? Nous Sommes Là Pour Vous Aider
            </h2>
            <button className="px-8 py-4 bg-[#1A73E8] text-white rounded-full text-lg font-medium hover:bg-[#1557b0] transition-colors">
              Contactez-Nous
            </button>
          </div>

          {/* Right Illustration - Hidden on mobile */}
          <div className="w-1/4 -mr-8 hidden md:flex items-center translate-y-6">
            <img 
              src="/contact&faq2.svg" 
              alt="Illustration d'Espace de Stationnement"
              className="w-full h-[300px] object-contain transform -scale-x-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;