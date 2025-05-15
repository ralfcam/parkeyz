import React from 'react';
import { SmilePlus, Clock, Shield, Car, AlertTriangle, Recycle } from 'lucide-react';

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description,
  bgColor = 'bg-[#e6f7ff]'
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  bgColor?: string;
}) => (
  <div className="flex items-start gap-4">
    <div className={`${bgColor} p-3 rounded-xl flex-shrink-0`}>
      <Icon className="w-6 h-6 text-[#00b8ff]" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const WhyBouncerSpot = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-[#e6f7ff] text-[#00b8ff] rounded-full text-sm font-medium mb-4">
            Pourquoi Choisir Parkeeyz ?
          </span>
          <h2 className="text-4xl font-bold text-gray-900">
            Des solutions de stationnement fiables et prêtes pour l'avenir
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <FeatureItem
              icon={SmilePlus}
              title="Tranquillité d'Esprit"
              description="Assurez-vous que seuls les utilisateurs autorisés peuvent accéder à votre place de stationnement."
            />
            <FeatureItem
              icon={Clock}
              title="Gain de Temps"
              description="Déverrouillez facilement votre place de stationnement avec votre smartphone et gérez l'accès en quelques secondes."
            />
            <FeatureItem
              icon={Shield}
              title="Sécurité Renforcée"
              description="La technologie connectée avancée empêche tout accès non autorisé."
            />
            <FeatureItem
              icon={Car}
              title="Intégration Facile"
              description="Compatible avec les installations de stationnement privées et partagées."
            />
          </div>

          <div className="relative">
            <img 
              src="/whybouncerspot.svg" 
              alt="Système de Stationnement"
              className="w-full h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/800x600/e6f7ff/003366?text=Smart+Parking+Illustration';
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 bg-[#f8fafc] rounded-2xl">
            <FeatureItem
              icon={AlertTriangle}
              title="Alertes Instantanées"
              description="Soyez immédiatement notifié en cas d'utilisation non autorisée, où que vous soyez."
              bgColor="bg-[#f8fafc]"
            />
          </div>
          <div className="p-8 bg-[#f8fafc] rounded-2xl">
            <FeatureItem
              icon={Recycle}
              title="Solution Écologique"
              description="Une solution hautement durable qui réduit la consommation d'énergie inutile et favorise un environnement plus vert."
              bgColor="bg-[#f8fafc]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBouncerSpot;