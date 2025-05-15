import React from 'react';
import ProductCard from './ProductCard';

const WhatWeDoSection: React.FC = () => (
  <div className="bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <span className="inline-block px-8 py-3 mb-8 text-[#1A73E8] bg-blue-100 rounded-full text-lg font-medium">
          Nos Solutions
        </span>
        <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">Ce Que Nous Faisons</h2>
        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Parkeeyz propose des solutions d'accès intelligentes de pointe qui combinent la technologie Bluetooth et 4G 
          pour assurer une gestion de stationnement sécurisée, fiable et conviviale. Des allées privées 
          aux installations de stationnement urbain, nos produits répondent à un large éventail de besoins.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ProductCard
          title="Bouncer"
          description="Sécurisez Votre Stationnement, Sans Effort"
          price="99,99€"
          image="/whatwedo1.svg"
          isActive
        />
        <ProductCard
          title="Entreprise"
          description="Gestion multi-utilisateurs pour installations partagées."
          price="99,99€"
          image="/whatwedo2.svg"
        />
        <ProductCard
          title="Terminal"
          description="Solutions de stationnement premium pour les grandes entreprises."
          price="99,99€"
          image="/whatwedo3.svg"
        />
      </div>

      <p className="text-center text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
        Chaque produit est conçu pour fournir un contrôle en temps réel, une gestion sans effort 
        et une sécurité inégalée, directement depuis votre smartphone.
      </p>
    </div>
  </div>
);

export default WhatWeDoSection;