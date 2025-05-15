import React from 'react';
import { Heart, Shield, Lightbulb, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 bg-[#e6f7ff] rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#00b8ff]" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 text-center">{title}</h3>
    <p className="text-gray-600 text-center leading-relaxed">{description}</p>
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
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-[#e6f7ff] text-[#00b8ff] rounded-full text-sm font-medium mb-4">
            Nos Valeurs
          </span>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            Les Principes Qui Nous Guident
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos valeurs fondamentales définissent qui nous sommes et guident chacune de nos actions
            pour créer un impact positif dans le monde du stationnement intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 