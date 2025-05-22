import React from 'react';

const OurStorySection: React.FC = () => (
  <div className="section bg-white">
    <div className="container">
      <div className="flex flex-col lg:flex-row items-center gap-section-sm">
        <div className="lg:w-1/2">
          <span className="inline-block px-6 py-2 mb-layout-md text-secondary bg-secondary-light rounded-btn text-sm font-medium">
            Notre Histoire
          </span>
          <h2 className="text-neutral mb-layout-md">
            L'Innovation au Service du Stationnement
          </h2>
          <div className="space-y-layout-md text-body text-neutral-dark opacity-90 leading-relaxed">
            <p>
              Tout a commencé en 2023 à Paris, lorsqu'une équipe passionnée s'est réunie autour d'une 
              vision commune : révolutionner l'expérience du stationnement urbain. Face aux défis 
              croissants de la mobilité en ville, nous avons imaginé une solution qui allierait 
              technologie de pointe et simplicité d'utilisation.
            </p>
            <p>
              Notre expertise en IoT et en développement logiciel nous a permis de créer Parkeeyz, 
              une solution innovante qui répond aux besoins réels des utilisateurs. De la conception 
              initiale aux dernières innovations, chaque aspect de nos produits est pensé pour offrir 
              une expérience exceptionnelle.
            </p>
            <p>
              Aujourd'hui, Parkeeyz s'est imposé comme un acteur majeur dans le domaine du stationnement 
              intelligent, accompagnant des milliers d'utilisateurs à travers la France. Notre engagement 
              envers l'innovation et la satisfaction client reste au cœur de notre mission, guidant 
              chacune de nos décisions.
            </p>
            <p>
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
            className="w-full h-auto rounded-card shadow-card"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="mt-layout-lg bg-neutral-light rounded-card p-layout-md">
            <h3 className="text-neutral mb-layout-sm">
              Notre Mission
            </h3>
            <p className="text-neutral-dark opacity-90 text-body">
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