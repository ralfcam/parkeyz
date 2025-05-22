import React from 'react';

const RevolutionSection: React.FC = () => (
  <div className="section bg-white">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-section-sm">
        <div className="md:w-1/2">
          <h2 className="text-display-2 text-neutral mb-layout-lg">
            Rejoignez la Révolution de l'Accès Intelligent
          </h2>
          <p className="text-body-large md:text-xl text-neutral-dark opacity-90 leading-relaxed">
            Chez Parkeeyz, nous sommes plus qu'un produit—nous sommes une promesse de commodité, d'innovation et de 
            sécurité. Que vous soyez propriétaire, chef d'entreprise ou gestionnaire de stationnement urbain, nous 
            vous invitons à découvrir l'avenir de l'accès intelligent.
          </p>
        </div>
        <div className="md:w-1/2 mt-layout-lg md:mt-0">
          <img 
            src="/aboutsmartparkimgrevo.webp" 
            alt="Révolution du Stationnement Intelligent" 
            className="w-full h-auto rounded-card shadow-card"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/primary-light/neutral-dark?text=Smart+Parking+Revolution';
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default RevolutionSection; 