import React from 'react';
import { Heart, Shield, Lightbulb, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => (
  <div className="card p-layout-lg">
    <div className="flex justify-center mb-layout-md">
      <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-primary" />
      </div>
    </div>
    <h3 className="text-neutral text-center mb-layout-sm">{title}</h3>
    <p className="text-neutral-dark opacity-80 text-center leading-relaxed text-body">{description}</p>
  </div>
);

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Engagement Client",
      description: "Nous plaçons la satisfaction de nos clients au cœur de toutes nos décisions et innovations."
    },
    {
      icon: Shield,
      title: "Sécurité Avant Tout",
      description: "La sécurité et la fiabilité de nos solutions sont notre priorité absolue."
    },
    {
      icon: Lightbulb,
      title: "Innovation Continue",
      description: "Nous repoussons constamment les limites pour créer des solutions toujours plus intelligentes."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et des partenariats durables."
    }
  ];

  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="text-center mb-section-sm">
          <span className="inline-block px-6 py-2 bg-primary-light text-primary rounded-btn text-sm font-medium mb-layout-sm">
            Nos Valeurs
          </span>
          <h2 className="text-neutral mb-layout-md">
            Les Principes Qui Nous Guident
          </h2>
          <p className="text-xl text-neutral-dark opacity-80 max-w-3xl mx-auto text-body-large">
            Nos valeurs fondamentales définissent qui nous sommes et guident chacune de nos actions
            pour créer un impact positif dans le monde du stationnement intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-layout-lg">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 