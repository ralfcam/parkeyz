import React from 'react';
import { SmilePlus, Clock, Shield, Car, AlertTriangle, Recycle } from 'lucide-react';

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description,
  bgColorClass = 'bg-primary-light'
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  bgColorClass?: string;
}) => (
  <div className="flex items-start gap-layout-sm">
    <div className={`${bgColorClass} p-3 rounded-input flex-shrink-0`}>
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-body-large font-semibold text-neutral mb-1">{title}</h3>
      <p className="text-neutral-dark opacity-80 leading-relaxed text-body">{description}</p>
    </div>
  </div>
);

const PourquoiParkeeyz: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-section-sm">
          <span className="inline-block px-6 py-2 bg-primary-light text-primary rounded-btn text-sm font-medium mb-layout-sm">
            Pourquoi Choisir Parkeeyz ?
          </span>
          <h2 className="text-neutral">
            Des solutions de stationnement fiables et prêtes pour l'avenir
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-sm items-center">
          <div className="space-y-layout-lg">
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
                target.src = 'https://placehold.co/800x600/primary-light/neutral-dark?text=Smart+Parking+Illustration';
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg mt-section-sm">
          <div className="card-featured p-layout-lg">
            <FeatureItem
              icon={AlertTriangle}
              title="Alertes Instantanées"
              description="Soyez immédiatement notifié en cas d'utilisation non autorisée, où que vous soyez."
              bgColorClass="bg-primary-light"
            />
          </div>
          <div className="card-featured p-layout-lg">
            <FeatureItem
              icon={Recycle}
              title="Solution Écologique"
              description="Une solution hautement durable qui réduit la consommation d'énergie inutile et favorise un environnement plus vert."
              bgColorClass="bg-primary-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiParkeeyz; 