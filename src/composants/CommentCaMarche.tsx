import React from 'react';
import { Link } from 'react-router-dom';

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
      image: "/howitworks1.webp",
      title: "Installez votre Lockeeyz",
      description: "Fixez votre barrière en quelques minutes, sans outils spéciaux ni compétences techniques. Un jeu d'enfant, même pour les moins bricoleurs d'entre nous."
    },
    {
      image: "/howitworks2.webp",
      title: "Connectez à l'application",
      description: "Téléchargez l'application, suivez le guide de configuration et prenez le contrôle de votre place. Une interface intuitive pour une gestion sans prise de tête."
    },
    {
      image: "/howitworks3.webp",
      title: "Gérez et rentabilisez",
      description: "Partagez l'accès avec vos proches ou mettez votre place en location quand vous ne l'utilisez pas. Vous décidez quand, comment et à qui vous ouvrez votre place."
    }
  ];

  return (
    <section className="section bg-secondary-light">
      <div className="container">
        <div className="text-center mb-section-sm">
          <span className="inline-block px-6 py-2 mb-layout-md text-secondary bg-white rounded-btn text-sm font-medium">
            Comment ça marche
          </span>
          <h2 className="text-display-2 text-neutral-dark mb-layout-md">
            <span className="text-secondary">S</span>imple. <span className="text-secondary">S</span>écurisé. <span className="text-secondary">S</span>ûr.
          </h2>
          <p className="text-heading-3 text-neutral-dark opacity-80 max-w-3xl mx-auto">
            Stationnement simplifié grâce à la technologie de pointe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-xl mb-section-sm">
          {steps.map((step, index) => (
            <Etape key={index} {...step} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-layout-md">
          <button className="btn-secondary btn-lg">
            Voir le fonctionnement
          </button>
          <Link 
            to="/boutique-forfaits"
            className="btn-outline btn-lg border-secondary text-secondary hover:bg-white inline-block text-center"
          >
            Explorer les forfaits
          </Link>
          <button className="btn-outline btn-lg border-secondary text-secondary hover:bg-white">
            Voir la démo en ligne
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommentCaMarche; 