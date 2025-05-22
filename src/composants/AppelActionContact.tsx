import React from 'react';

const AppelActionContact: React.FC = () => {
  return (
    <section className="section bg-neutral-light relative overflow-hidden">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Illustration Gauche - Cachée sur mobile */}
          <div className="w-1/4 -ml-layout-lg hidden md:flex items-center">
            <img 
              src="/contact&faq1.svg" 
              alt="Illustration de Panneaux de Stationnement"
              className="w-full h-[300px] object-contain"
            />
          </div>

          {/* Contenu Central */}
          <div className="text-center max-w-2xl mx-auto px-layout-sm md:px-layout-lg">
            <span className="inline-block px-6 py-2 mb-layout-md text-secondary bg-secondary-light rounded-btn text-sm font-medium">
              Contact & FAQ
            </span>
            <h2 className="text-neutral-dark mb-layout-lg">
              Des Questions? Nous Sommes Là Pour Vous Aider
            </h2>
            <button className="btn-secondary btn-lg">
              Contactez-Nous
            </button>
          </div>

          {/* Illustration Droite - Cachée sur mobile */}
          <div className="w-1/4 -mr-layout-lg hidden md:flex items-center translate-y-6">
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

export default AppelActionContact; 