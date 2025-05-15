import React from 'react';

interface StepProps {
  image: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="mb-8 w-64 h-48 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h3 className="text-2xl font-bold text-[#003366] mb-4">{title}</h3>
    <p className="text-lg text-[#003366]/80 max-w-sm leading-relaxed">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const steps: StepProps[] = [
    {
      image: "/howitworks1.svg",
      title: "Installez Votre Bouncer Key",
      description: "Processus d'installation rapide de 15 minutes. Configuration facile pour votre place de stationnement."
    },
    {
      image: "/howitworks2.svg",
      title: "Connectez & Contrôlez",
      description: "Gérez l'accès en toute simplicité via l'application mobile Bouncer Key."
    },
    {
      image: "/howitworks3.svg",
      title: "Profitez de la Tranquillité d'Esprit",
      description: "Surveillez votre espace en toute sécurité depuis n'importe où, à tout moment."
    }
  ];

  return (
    <section className="py-24 px-8 bg-[#f5f8ff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-6 text-[#1A73E8] bg-white rounded-full text-sm font-medium">
            Comment Ça Marche
          </span>
          <h2 className="text-5xl font-bold text-[#003366] mb-6">
            <span className="text-[#1A73E8]">S</span>imple. <span className="text-[#1A73E8]">S</span>écurisé. <span className="text-[#1A73E8]">S</span>ûr.
          </h2>
          <p className="text-2xl text-[#003366]/80 max-w-3xl mx-auto">
            Stationnement Simplifié grâce à la Technologie de Pointe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        <div className="flex justify-center gap-8">
          <button className="px-8 py-4 bg-[#1A73E8] text-white text-lg font-medium rounded-full hover:bg-[#1557b0] transition-colors flex items-center gap-2">
            Voir Comment Ça Marche
          </button>
          <button className="px-8 py-4 text-[#1A73E8] text-lg font-medium rounded-full border-2 border-[#1A73E8] hover:bg-white transition-colors">
            Explorer les Forfaits
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;