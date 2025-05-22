import React from 'react';

const HeroSection: React.FC = () => (
  <div className="relative bg-neutral-darker overflow-hidden">
    <div className="container pt-section-md pb-section-sm relative">
      {/* Contenu Principal */}
      <div className="text-center max-w-4xl mx-auto mb-section-sm">
        <h1 className="text-display-1 text-white mb-layout-lg">
          Sécurisez, Contrôlez et Simplifiez l'Accès au Stationnement
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-body-large">
          Découvrez Parkeeyz, le leader sur le marché<br />
          des solutions de sécurisation pour le stationnement.<br />
          Une solution unique qui allie technologie de pointe,<br />
          design élégant et simplicité d'utilisation.
        </p>
      </div>

      {/* Image Principale */}
      <div className="mt-section-sm">
        <img 
          src="/tutorialsandvideoshero.webp" 
          alt="Solutions de Stationnement Intelligentes"
          className="w-full max-w-4xl mx-auto h-auto"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1200x600/neutral-dark/primary-light?text=Solutions+de+Stationnement';
          }}
        />
      </div>
    </div>
  </div>
);

export default HeroSection; 