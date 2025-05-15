import React from 'react';

const OurStorySection: React.FC = () => (
  <div className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <span className="inline-block px-6 py-2 mb-6 text-[#1A73E8] bg-blue-50 rounded-full text-sm font-medium">
            Notre Histoire
          </span>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            L'Innovation au Service du Stationnement
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Tout a commencé en 2023 à Paris, lorsqu'une équipe passionnée s'est réunie autour d'une 
              vision commune : révolutionner l'expérience du stationnement urbain. Face aux défis 
              croissants de la mobilité en ville, nous avons imaginé une solution qui allierait 
              technologie de pointe et simplicité d'utilisation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre expertise en IoT et en développement logiciel nous a permis de créer Parkeeyz, 
              une solution innovante qui répond aux besoins réels des utilisateurs. De la conception 
              initiale aux dernières innovations, chaque aspect de nos produits est pensé pour offrir 
              une expérience exceptionnelle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Aujourd'hui, Parkeeyz s'est imposé comme un acteur majeur dans le domaine du stationnement 
              intelligent, accompagnant des milliers d'utilisateurs à travers la France. Notre engagement 
              envers l'innovation et la satisfaction client reste au cœur de notre mission, guidant 
              chacune de nos décisions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre ambition ? Continuer à repousser les limites de l'innovation pour créer un avenir 
              où le stationnement n'est plus une contrainte mais une expérience fluide et agréable 
              pour tous.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="/ourstory.svg" 
            alt="L'Histoire de Parkeeyz"
            className="w-full h-auto rounded-2xl shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="mt-8 bg-[#f8fafc] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
              Notre Mission
            </h3>
            <p className="text-gray-600">
              Transformer le stationnement urbain grâce à des solutions intelligentes et accessibles, 
              pour un quotidien plus simple et plus fluide.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurStorySection; 