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
  <div className={`p-8 rounded-2xl text-center ${
    isHighlighted 
      ? 'bg-[#00b8ff] text-white' 
      : 'bg-white text-gray-800'
  }`}>
    <div className="flex justify-center mb-6">
      <Icon className={`w-12 h-12 ${isHighlighted ? 'text-white' : 'text-[#00b8ff]'}`} />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className={`${isHighlighted ? 'text-white/90' : 'text-gray-600'}`}>
      {description}
    </p>
  </div>
);

const BouncerSpot = () => {
  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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