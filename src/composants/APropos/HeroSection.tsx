import React from 'react';

const HeroSection: React.FC = () => (
  <div className="relative overflow-hidden bg-gradient-to-b from-neutral-darker to-neutral-dark">
    {/* Éléments d'arrière-plan */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    </div>

    <div className="container pt-section-lg pb-section-md relative">
      <div className="text-center">
        <span className="inline-block px-6 py-2 mb-layout-lg text-primary bg-neutral-dark/50 rounded-btn backdrop-blur-sm border border-primary/20 text-sm font-medium">
          À Propos de Parkeeyz
        </span>
        <h1 className="text-display-1 md:text-display-2 text-white mb-layout-lg leading-tight">
          Déverrouiller l'Avenir du<br />Stationnement Intelligent
        </h1>
        <p className="text-body-large md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-section-sm">
          Nous révolutionnons le stationnement urbain grâce à une technologie innovante et des solutions intelligentes 
          qui facilitent la vie des gestionnaires de propriétés et des conducteurs.
        </p>
        
        {/* Illustration Principale */}
        <div className="relative max-w-6xl mx-auto mt-section-sm">
          <img 
            src="/abouthero.svg" 
            alt="Innovation de Stationnement Intelligent"
            className="w-full h-auto max-w-4xl mx-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/1200x600/neutral-dark/primary-light?text=Innovation+Parkeeyz';
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection; 