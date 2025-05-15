import React from 'react';

const HistorySection: React.FC = () => (
  <div className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">Notre Histoire</h2>
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Imagine un monde où le stationnement n'est plus un souci. Chez Parkeeyz, nous avons transformé 
            cette vision en réalité. Inspirés par l'idée d'un accès simple, sécurisé et élégant, nous avons 
            créé Bouncer Spot : une solution qui redéfinit la gestion des parkings.
          </p>
          <p>
            Notre mission est claire : vous offrir liberté et sérénité, en combinant innovation technologique 
            et design durable. Avec Parkeeyz, chaque stationnement devient une expérience fluide et sans effort.
          </p>
          <p className="font-medium text-[#003366]">
            Rejoignez-nous dans cette révolution du stationnement intelligent.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HistorySection; 