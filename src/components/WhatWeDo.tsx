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
  <div className={`rounded-2xl p-8 transition-shadow ${
    isHighlighted 
      ? 'bg-[#1A73E8] text-white' 
      : 'bg-white text-gray-800'
  }`}>
    <div className="flex justify-center mb-8">
      <img 
        src={image} 
        alt={title} 
        className="w-48 h-48 object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = 'https://placehold.co/192x192/e6f7ff/003366?text=Solution';
        }}
      />
    </div>
    <h3 className={`text-2xl font-bold mb-4 ${isHighlighted ? 'text-white' : 'text-[#1A1A1A]'}`}>
      {title}
    </h3>
    <p className={`mb-6 ${isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
      {description}
    </p>
    <div className="flex items-baseline mb-6">
      <span className={`text-3xl font-bold ${isHighlighted ? 'text-white' : 'text-[#1A73E8]'}`}>
        {price}
      </span>
      <span className={`ml-2 ${isHighlighted ? 'text-white/80' : 'text-gray-600'}`}>
        /mois
      </span>
    </div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <ShieldCheck className={`w-5 h-5 ${isHighlighted ? 'text-white' : 'text-[#1A73E8]'}`} />
          <span className={isHighlighted ? 'text-white/90' : 'text-gray-600'}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
      isHighlighted 
        ? 'bg-white text-[#1A73E8] hover:bg-gray-100' 
        : 'bg-[#1A73E8] text-white hover:bg-[#1557b0]'
    }`}>
      Découvrir
    </button>
  </div>
);

const WhatWeDo: React.FC = () => {
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-[#e6f7ff] text-[#00b8ff] rounded-full text-sm font-medium mb-4">
            Nos Solutions
          </span>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            Ce que nous faisons
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parkeeyz propose des solutions d'accès intelligent de pointe qui combinent la technologie Bluetooth et la 4G 
            pour garantir une gestion de stationnement sécurisée, fiable et conviviale. Des allées privées 
            aux installations de stationnement urbaines, nos produits répondent à une large gamme de besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <SolutionCard key={index} {...solution} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#00b8ff] text-xl font-semibold mb-4 block">
                Notre Technologie
              </span>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                Une Solution Complète et Innovante
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre technologie de pointe combine sécurité avancée et facilité d'utilisation 
                pour offrir une expérience de stationnement sans précédent. Adaptée aussi bien 
                aux particuliers qu'aux professionnels.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-[#e6f7ff] rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-[#00b8ff]" />
                  </div>
                  Sécurité maximale garantie
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-[#e6f7ff] rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#00b8ff]" />
                  </div>
                  Installation rapide et simple
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <div className="w-6 h-6 bg-[#e6f7ff] rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#00b8ff]" />
                  </div>
                  Gestion multi-utilisateurs flexible
                </li>
              </ul>
              <button className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full text-lg font-medium hover:bg-[#333] transition-colors">
                En Savoir Plus
              </button>
            </div>
            <div>
              <img 
                src="/whatwedo1.svg" 
                alt="Solution Parkeeyz"
                className="w-full h-auto rounded-xl"
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

export default WhatWeDo;