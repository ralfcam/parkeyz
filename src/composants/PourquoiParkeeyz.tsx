import React from 'react';
import { Shield, DollarSign, Zap, Palette, Clock, Check, Smartphone, Users } from 'lucide-react';

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
  <div className="p-layout-lg bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className={`${bgColorClass} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-layout-md`}>
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <h3 className="text-heading-3 text-neutral-dark mb-layout-sm">{title}</h3>
    <p className="text-body text-neutral-dark opacity-80 leading-relaxed">{description}</p>
  </div>
);

const AdvantageCard = ({ 
  icon: Icon, 
  title, 
  subtitle,
  description,
  bgColorClass = 'bg-primary-light'
}: { 
  icon: React.ElementType; 
  title: string; 
  subtitle: string;
  description: string;
  bgColorClass?: string;
}) => (
  <div className="p-layout-xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className={`${bgColorClass} p-4 rounded-full w-20 h-20 flex items-center justify-center mb-layout-lg`}>
      <Icon className="w-10 h-10 text-primary" />
    </div>
    <h3 className="text-heading-2 text-neutral-dark mb-layout-sm">{title}</h3>
    <h4 className="text-heading-3 text-primary mb-layout-md">{subtitle}</h4>
    <p className="text-body-large text-neutral-dark opacity-80 leading-relaxed">{description}</p>
  </div>
);

const PourquoiParkeeyz: React.FC = () => {
  const mainAdvantages = [
    {
      icon: Shield,
      title: "Sécurité Maximale",
      subtitle: "Protégez votre place, en toute simplicité",
      description: "Fini les véhicules non autorisés sur votre place. Contrôlez les accès depuis votre smartphone, où que vous soyez. Une tranquillité d'esprit totale, à portée de clic."
    },
    {
      icon: DollarSign,
      title: "Rentabilisation Facile",
      subtitle: "Transformez votre place en revenus",
      description: "Gagnez jusqu'à 300€/mois en louant votre place pendant vos absences. Lockeeyz gère tout automatiquement : réservations, accès et paiements. Votre place travaille pour vous."
    },
    {
      icon: Zap,
      title: "Technologie Simple",
      subtitle: "Installez, connectez, c'est prêt !",
      description: "15 minutes d'installation, 5 mois d'autonomie. Une technologie avancée qui se fait oublier. Pas de câblage, pas de maintenance complexe, juste une solution qui fonctionne."
    },
    {
      icon: Palette,
      title: "Design Élégant",
      subtitle: "Une solution discrète et moderne",
      description: "Une solution discrète et moderne qui s'intègre partout."
    }
  ];

  const whyFeatures = [
    {
      icon: Clock,
      title: "Autonomie record jusqu'à 5 mois",
      description: "Oubliez les recharges fréquentes et profitez d'une tranquillité durable"
    },
    {
      icon: DollarSign,
      title: "Potentiel de revenus jusqu'à 300€/mois",
      description: "Transformez une dépense en source de revenus passive"
    },
    {
      icon: Zap,
      title: "Installation sans travaux en 15 minutes",
      description: "Pas de câblage, pas de technicien, juste vous et votre Lockeeyz"
    },
    {
      icon: Smartphone,
      title: "Application intuitive et sécurisée",
      description: "Contrôlez tout depuis votre smartphone, en toute simplicité"
    },
    {
      icon: Shield,
      title: "Sécurité renforcée",
      description: "La technologie connectée avancée empêche tout accès non autorisé. Une Barrière ultra-résistante allant jusqu'à 2500KG. ultra étanche résistant à tout intempérie."
    },
    {
      icon: Users,
      title: "Support client réactif",
      description: "Une équipe jeune et passionnée, toujours prête à vous aider"
    }
  ];

  return (
    <>
      {/* Section Avantages Clés */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="text-center mb-section-md">
            <span className="inline-block px-6 py-2 bg-primary-light text-primary rounded-btn text-sm font-medium mb-layout-sm">
              Avantages Clés
            </span>
            <h2 className="text-display-2 text-neutral-dark mb-layout-lg">
              Découvrez les avantages de Lockeeyz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-layout-xl">
            {mainAdvantages.map((advantage, index) => (
              <AdvantageCard key={index} {...advantage} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Pourquoi Choisir Lockeeyz */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-section-sm">
            <span className="inline-block px-6 py-2 bg-primary-light text-primary rounded-btn text-sm font-medium mb-layout-sm">
              Pourquoi choisir Lockeeyz ?
            </span>
            <h2 className="text-display-2 text-neutral-dark mb-layout-lg">
              La solution complète pour votre stationnement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-layout-lg">
            {whyFeatures.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PourquoiParkeeyz; 