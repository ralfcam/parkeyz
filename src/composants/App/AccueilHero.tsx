import React, { useState, useEffect } from 'react';

const AccueilHero: React.FC = () => { // Renamed from HomeHero
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['connecté', 'sécurisé', 'confort'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="max-w-xl mb-8 lg:mb-0">
          <span className="inline-block px-6 py-2 mb-8 text-[#00b8ff] bg-[#003366] rounded-full">
            Solution de Stationnement Intelligent
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Votre stationnement en{' '}
            <span className="relative inline-block min-w-[180px]">
              <span 
                className={`absolute left-0 transition-all duration-500 ${
                  currentWord === 0 ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
                }`}
              >
                connecté
              </span>
              <span 
                className={`absolute left-0 transition-all duration-500 ${
                  currentWord === 1 ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
                }`}
              >
                sécurisé
              </span>
              <span 
                className={`absolute left-0 transition-all duration-500 ${
                  currentWord === 2 ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
                }`}
              >
                confort
              </span>
              <span className="invisible">connecté</span>
            </span>
            <br />
            en toute simplicité
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed">
            Découvrez une nouvelle façon de gérer votre stationnement avec Parkeeyz, 
            propulsé par une technologie intelligente et innovante.
          </p>
          <button className="px-8 py-4 text-white bg-[#0066ff] rounded-full hover:bg-[#0052cc] transition-colors text-lg font-medium">
            Découvrir Nos Solutions
          </button>
        </div>
        <div className="w-full lg:w-[600px]">
          <img 
            src="/hero.webp" 
            alt="Illustration de Stationnement Intelligent"
            className="w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/003366/e6f7ff?text=Stationnement+Intelligent';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccueilHero; // Renamed export 