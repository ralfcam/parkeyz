import React from 'react';

const HeroSection: React.FC = () => (
  <div className="relative bg-[#00264d] overflow-hidden">
    <div className="max-w-7xl mx-auto px-8 pt-24 pb-16 relative">
      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-6xl font-bold text-white mb-8">
          Sécurisez, Contrôlez et Simplifiez l'Accès au Stationnement
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Découvrez Parkeeyz, le leader sur le marché<br />
          des solutions de sécurisation pour le stationnement.<br />
          Une solution unique qui allie technologie de pointe,<br />
          design élégant et simplicité d'utilisation.
        </p>
      </div>

      {/* Hero Image */}
      <div className="mt-16">
        <img 
          src="/tutorialsandvideoshero.svg" 
          alt="Solutions de Stationnement Intelligentes"
          className="w-full max-w-4xl mx-auto h-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/1200x600/003366/e6f7ff?text=Solutions+de+Stationnement';
          }}
        />
      </div>
    </div>
  </div>
);

export default HeroSection;