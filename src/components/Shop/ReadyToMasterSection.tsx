import React from 'react';

const ReadyToMasterSection: React.FC = () => (
  <div className="bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
          Prêt à Maîtriser Votre Solution d'Accès ?
        </h2>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          Conçu pour offrir une sécurité et une gestion optimales,<br />
          Parkeeyz redéfinit les standards du stationnement.<br />
          Faites le choix de l'excellence avec la référence<br />
          du marché.
        </p>
        <div className="flex items-center justify-center">
          <button className="px-8 py-4 text-[#1A73E8] border-2 border-[#1A73E8] rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
            Découvrir Nos Forfaits
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToMasterSection;