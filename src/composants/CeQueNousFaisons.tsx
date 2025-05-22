import React from 'react';
import { ShieldCheck, Zap, Users, Settings, Clock, Lock } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  isHighlighted?: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
  title, 
  description, 
  price, 
  image, 
  features,
  isHighlighted = false 
}) => (
  <div className={`rounded-card p-layout-lg transition-shadow flex flex-col h-full ${
    isHighlighted 
      ? 'bg-secondary text-white'
      : 'card'
  }`}>
    <div className="flex justify-center mb-layout-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-48 h-48 object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://placehold.co/192x192/primary-light/neutral-dark?text=Solution+Parkeeyz';
        }}
      />
    </div>
    <h3 className={`text-heading-3 font-bold mb-layout-sm ${isHighlighted ? 'text-white' : 'text-neutral'}`}>
      {title}
    </h3>
    <p className={`mb-layout-md flex-grow ${isHighlighted ? 'text-white opacity-90' : 'text-neutral-dark opacity-80'} text-body`}>
      {description}
    </p>
    <div className="flex items-baseline mb-layout-md">
      <span className={`text-display-2 font-bold ${isHighlighted ? 'text-white' : 'text-secondary'}`}>
        {price}
      </span>
      <span className={`ml-2 ${isHighlighted ? 'text-white opacity-80' : 'text-neutral-dark opacity-80'} text-small`}>
        /mois
      </span>
    </div>
    <ul className="space-y-layout-xs mb-layout-lg flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <ShieldCheck className={`w-5 h-5 ${isHighlighted ? 'text-white' : 'text-secondary'}`} />
          <span className={`${isHighlighted ? 'text-white opacity-90' : 'text-neutral-dark opacity-80'} text-body`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <button className={`w-full btn btn-lg mt-auto ${
      isHighlighted 
        ? 'bg-white text-secondary hover:bg-gray-100'
        : 'btn-secondary'
    }`}>
      Découvrir
    </button>
  </div>
);

const CeQueNousFaisons: React.FC = () => {
  const solutions = [
    {
      title: "Parkeeyz Basic",
      description: "Solution idéale pour les particuliers et petits espaces",
      price: "29,99€",
      image: "/whatwedo1.svg",
      features: [
        "Contrôle d'accès Bluetooth",
        "Application mobile intuitive",
        "Installation rapide",
        "Support technique"
      ]
    },
    {
      title: "Parkeeyz Pro",
      description: "Pour les entreprises et les espaces partagés",
      price: "49,99€",
      image: "/whatwedo2.svg",
      features: [
        "Toutes les fonctionnalités Basic",
        "Gestion multi-utilisateurs",
        "Rapports détaillés",
        "Support prioritaire"
      ],
      isHighlighted: true
    },
    {
      title: "Parkeeyz Enterprise",
      description: "Solution complète pour les grands parcs",
      price: "99,99€",
      image: "/whatwedo3.svg",
      features: [
        "Toutes les fonctionnalités Pro",
        "API personnalisée",
        "Support dédié 24/7",
        "Formation sur site"
      ]
    }
  ];

  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="text-center mb-section-sm">
          <span className="inline-block px-6 py-2 bg-primary-light text-primary rounded-btn text-sm font-medium mb-layout-sm">
            Nos Solutions
          </span>
          <h2 className="text-neutral mb-layout-md">
            Ce que nous faisons
          </h2>
          <p className="text-xl text-neutral-dark opacity-80 max-w-3xl mx-auto text-body-large">
            Parkeeyz propose des solutions d'accès intelligent de pointe qui combinent la technologie Bluetooth et la 4G 
            pour garantir une gestion de stationnement sécurisée, fiable et conviviale. Des allées privées 
            aux installations de stationnement urbaines, nos produits répondent à une large gamme de besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-lg mb-section-sm">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="card p-layout-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-sm items-center">
            <div>
              <span className="text-primary text-xl font-semibold mb-layout-sm block">
                Notre Technologie
              </span>
              <h3 className="text-neutral mb-layout-md">
                Une Solution Complète et Innovante
              </h3>
              <p className="text-neutral-dark opacity-90 mb-layout-lg leading-relaxed text-body-large">
                Notre technologie de pointe combine sécurité avancée et facilité d'utilisation 
                pour offrir une expérience de stationnement sans précédent. Adaptée aussi bien 
                aux particuliers qu'aux professionnels.
              </p>
              <ul className="space-y-layout-sm mb-layout-lg">
                <li className="flex items-center gap-3 text-neutral-dark opacity-90 text-body">
                  <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </div>
                  Sécurité maximale garantie
                </li>
                <li className="flex items-center gap-3 text-neutral-dark opacity-90 text-body">
                  <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  Installation rapide et simple
                </li>
                <li className="flex items-center gap-3 text-neutral-dark opacity-90 text-body">
                  <div className="w-6 h-6 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  Gestion multi-utilisateurs flexible
                </li>
              </ul>
              <button className="btn-primary bg-neutral-dark hover:bg-neutral-darker btn-lg">
                En Savoir Plus
              </button>
            </div>
            <div>
              <img 
                src="/whatwedo1.svg" 
                alt="Solution Parkeeyz"
                className="w-full h-auto rounded-card shadow-card"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeQueNousFaisons; 