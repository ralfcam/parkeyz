import React from 'react';

const MissionSection: React.FC = () => (
  <div className="bg-[#f5f8ff] py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {[
          {
            image: "/missionsection1.svg",
            title: "Éliminer les tracas de stationnement grâce à la technologie.",
            description: "Simplifier l'expérience de stationnement avec des solutions intelligentes."
          },
          {
            image: "/missionsection2.svg",
            title: "Offrir une sécurité inégalée pour le stationnement privé et partagé.",
            description: "Assurer la tranquillité d'esprit avec des fonctionnalités de sécurité avancées."
          },
          {
            image: "/missionsection3.svg",
            title: "Révolutionner la façon dont les gens gèrent l'accès.",
            description: "Rendre la gestion du stationnement sans effort et efficace."
          }
        ].map((mission, index) => (
          <div key={index} className="text-center group">
            <div className="mb-8 relative">
              <div className="w-48 h-48 mx-auto relative">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4 leading-tight">
              {mission.title}
            </h3>
            <p className="text-lg text-[#003366]/70">
              {mission.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default MissionSection;