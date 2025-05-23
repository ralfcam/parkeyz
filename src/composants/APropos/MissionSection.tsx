import React from 'react';

const MissionSection: React.FC = () => (
  <div className="section bg-secondary-light">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-xl">
        {[
          {
            image: "/missionsection1.webp",
            title: "Éliminer les tracas de stationnement grâce à la technologie.",
            description: "Simplifier l'expérience de stationnement avec des solutions intelligentes."
          },
          {
            image: "/missionsection2.webp",
            title: "Offrir une sécurité inégalée pour le stationnement privé et partagé.",
            description: "Assurer la tranquillité d'esprit avec des fonctionnalités de sécurité avancées."
          },
          {
            image: "/missionsection3.webp",
            title: "Révolutionner la façon dont les gens gèrent l'accès.",
            description: "Rendre la gestion du stationnement sans effort et efficace."
          }
        ].map((mission, index) => (
          <div key={index} className="text-center group">
            <div className="mb-layout-lg relative">
              <div className="w-48 h-48 mx-auto relative">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-heading-3 text-neutral-dark mb-layout-sm leading-tight">
              {mission.title}
            </h3>
            <p className="text-body text-neutral-dark opacity-80">
              {mission.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MissionSection; 