import React from 'react';

const HeroSection: React.FC = () => (
  <div className="relative overflow-hidden bg-gradient-to-b from-[#00264d] to-[#003366]">
    {/* Éléments d'arrière-plan */}
    <div className="absolute inset-0">
      <div className="absolute left-0 top-20 w-72 h-72 bg-[#00b8ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-40 w-96 h-96 bg-[#1A73E8]/10 rounded-full blur-3xl"></div>
    </div>

    <div className="max-w-7xl mx-auto px-8 pt-32 pb-24 relative">
      <div className="text-center">
        <span className="inline-block px-6 py-2 mb-8 text-[#00b8ff] bg-[#003366]/50 rounded-full backdrop-blur-sm border border-[#00b8ff]/20">
          À Propos de Parkeeyz
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Déverrouiller l'Avenir du<br />Stationnement Intelligent
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Nous révolutionnons le stationnement urbain grâce à une technologie innovante et des solutions intelligentes 
          qui facilitent la vie des gestionnaires de propriétés et des conducteurs.
        </p>
        
        {/* Illustration Principale */}
        <div className="relative max-w-6xl mx-auto mt-16">
          <img 
            src="/abouthero.svg" 
            alt="Innovation de Stationnement Intelligent"
            className="w-full h-auto max-w-4xl mx-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/1200x600/003366/e6f7ff?text=Innovation+Parkeeyz';
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection; 