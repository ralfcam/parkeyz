import React from 'react';
import { Clock, Shield, Smartphone, Car, Wifi } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  isHighlighted = false 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  isHighlighted?: boolean;
}) => (
  <div className={`p-layout-lg rounded-card text-center ${
    isHighlighted 
      ? 'bg-primary text-white' 
      : 'card' // Use the .card class for non-highlighted
  }`}>
    <div className="flex justify-center mb-layout-md">
      <Icon className={`w-12 h-12 ${isHighlighted ? 'text-white' : 'text-primary'}`} />
    </div>
    <h3 className={`text-xl font-semibold mb-layout-sm ${isHighlighted ? 'text-white' : 'text-neutral'}`}>{title}</h3>
    <p className={`${isHighlighted ? 'text-white opacity-90' : 'text-neutral-dark opacity-80'} text-body`}>
      {description}
    </p>
  </div>
);

const BouncerSpot = () => {
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-layout-lg">
          <FeatureCard
            icon={Clock}
            title="Gain de Temps"
            description="Accédez instantanément à votre place sans tracas ni délais."
          />
          <FeatureCard
            icon={Shield}
            title="Sécurité Renforcée"
            description="Protégez votre espace de stationnement avec un verrouillage fiable."
            isHighlighted
          />
          <FeatureCard
            icon={Smartphone}
            title="Confort Absolu"
            description="Gérez tout en toute simplicité via une application intuitive."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-lg mt-layout-lg">
          <FeatureCard
            icon={Car}
            title="Design Élégant"
            description="Une solution discrète et moderne qui s'intègre parfaitement à votre environnement."
          />
          <FeatureCard
            icon={Wifi}
            title="Technologie Ultra-Connectée"
            description="Une application spécialement conçue pour des performances impeccables."
          />
        </div>
      </div>
    </section>
  );
};

export default BouncerSpot; 