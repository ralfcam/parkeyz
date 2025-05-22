import React from 'react';

interface EtapeProps {
  image: string;
  title: string;
  description: string;
}

const Etape: React.FC<EtapeProps> = ({ image, title, description }) => (
  <div className="flex flex-col items-center text-center group">
    <div className="mb-layout-lg w-64 h-48 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h3 className="text-heading-3 text-neutral-dark mb-layout-sm">{title}</h3>
    <p className="text-body text-neutral-dark opacity-80 max-w-sm leading-relaxed">{description}</p>
  </div>
);

const CommentCaMarche: React.FC = () => {
  const steps: EtapeProps[] = [
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
    <section className="section bg-secondary-light">
      <div className="container">
        <div className="text-center mb-section-sm">
          <span className="inline-block px-6 py-2 mb-layout-md text-secondary bg-white rounded-btn text-sm font-medium">
            Comment Ça Marche
          </span>
          <h2 className="text-display-2 text-neutral-dark mb-layout-md">
            <span className="text-secondary">S</span>imple. <span className="text-secondary">S</span>écurisé. <span className="text-secondary">S</span>ûr.
          </h2>
          <p className="text-heading-3 text-neutral-dark opacity-80 max-w-3xl mx-auto">
            Stationnement Simplifié grâce à la Technologie de Pointe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-xl mb-section-sm">
          {steps.map((step, index) => (
            <Etape key={index} {...step} />
          ))}
        </div>

        <div className="flex justify-center gap-layout-lg">
          <button className="btn-secondary btn-lg flex items-center gap-2">
            Voir Comment Ça Marche
          </button>
          <button className="btn-outline btn-lg border-secondary text-secondary hover:bg-white">
            Explorer les Forfaits
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentCaMarche; 