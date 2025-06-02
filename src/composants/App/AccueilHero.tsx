import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const AccueilHero: React.FC = () => { // Renamed from HomeHero
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['contrôle', 'sécurisé', 'rentable'];

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
          <p className="text-2xl lg:text-3xl text-white mb-4 font-semibold">
            Sécurisez, Rentabilisez, Simplifiez votre Place de Parking
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Découvrez une nouvelle façon de gérer votre stationnement avec Parkeeyz, 
            propulsé par une technologie intelligente et innovante.
          </p>
          <span className="inline-block px-6 py-2 mb-8 text-[#00b8ff] bg-[#003366] rounded-full">
            Solution de stationnement intelligent
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Votre place de parking, enfin sous{' '}
            <span className="relative inline-block min-w-[180px]">
              <span 
                className={`absolute left-0 transition-all duration-500 ${
                  currentWord === 0 ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'
                }`}
              >
                contrôle
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
                rentable
              </span>
              <span className="invisible">contrôle</span>
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-12 leading-relaxed">
            Installez Lockeeyz en 15 minutes, sécurisez votre emplacement et gagnez jusqu'à 300 € par mois. 
            La barrière connectée qui vous simplifie la vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link 
              to="/lockeeyz"
              className="px-8 py-4 text-white bg-[#0066ff] rounded-full hover:bg-[#0052cc] transition-colors text-lg font-medium text-center"
            >
              Découvrir Lockeeyz
            </Link>
            <Link 
              to="/boutique-forfaits"
              className="px-8 py-4 text-[#0066ff] bg-white border-2 border-[#0066ff] rounded-full hover:bg-gray-50 transition-colors text-lg font-medium text-center"
            >
              Commander – 350 € TTC
            </Link>
          </div>
          <button className="flex items-center gap-2 text-white hover:text-[#00b8ff] transition-colors">
            <Play className="w-5 h-5" />
            <span className="text-lg underline">Comment ça marche</span>
          </button>
        </div>
        <div className="w-full lg:w-[600px]">
          <img 
            src="/hero.webp" 
            alt="Lockeeyz - Barrière connectée pour place de parking"
            className="w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/600x400/003366/e6f7ff?text=Lockeeyz+Barrière+Connectée';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccueilHero; // Renamed export 