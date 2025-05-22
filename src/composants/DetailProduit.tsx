import React from 'react';
import { Key, Settings, Shield, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
}

interface DetailProduitProps {
  onNavigate?: (view: string) => void; // Make it optional for backward compatibility
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title }) => (
  <div className="card p-layout-md text-center">
    <div className="flex justify-center mb-layout-sm">
      <Icon className="w-8 h-8 text-secondary" />
    </div>
    <h3 className="text-neutral font-medium text-body">{title}</h3>
  </div>
);

const DetailProduit: React.FC<DetailProduitProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  // Handle navigation with compatibility for both old and new patterns
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      // Support old navigation pattern if prop is provided
      onNavigate(path);
    } else {
      // Use React Router navigation
      navigate(`/${path}`);
    }
  };

  return (
    <section className="section bg-neutral-light">
      {/* Section Principale du Produit */}
      <div className="container">
        <div className="mb-section-sm">
          <span className="text-primary text-xl font-semibold">Bouncer Key</span>
          <h1 className="text-neutral mt-2 mb-layout-md">
            Sécurisez Votre Stationnement, Sans Effort
          </h1>
          <p className="text-xl text-neutral-dark opacity-80 max-w-2xl text-body-large">
            Prenez le contrôle de votre espace de stationnement avec Bouncer Key, un dispositif de contrôle 
            d'accès compact conçu pour les solutions de stationnement individuelles et à 
            petite échelle. Dites adieu aux accès non autorisés et profitez d'une tranquillité d'esprit totale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-sm items-center">
          <div>
            <img 
              src="/shopbouncer.svg" 
              alt="Dispositif de Stationnement Bouncer Key"
              className="w-full h-auto max-w-xl mx-auto rounded-card shadow-card"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x600/primary-light/neutral-dark?text=Bouncer+Key+Device';
              }}
            />
          </div>

          <div>
            <div className="text-display-1 text-secondary mb-layout-lg">
              99,99€
            </div>

            <button 
              className="btn-secondary btn-lg w-full mb-layout-md"
              onClick={() => handleNavigate('shipping')}
            >
              Acheter Maintenant
            </button>

            {/* Fonctionnalités Clés */}
            <div className="grid grid-cols-2 gap-layout-md mb-section-sm">
              <FeatureCard 
                icon={Key} 
                title="Accès Bluetooth" 
              />
              <FeatureCard 
                icon={Settings} 
                title="Installation et Configuration Faciles" 
              />
              <FeatureCard 
                icon={Shield} 
                title="Historique d'Accès en Temps Réel" 
              />
              <FeatureCard 
                icon={Car} 
                title="Compact et Fiable" 
              />
            </div>

            {/* Tableau des Spécifications */}
            <div className="card overflow-hidden p-0">
              <div className="grid grid-cols-2">
                <div className="p-layout-md font-medium text-neutral bg-neutral-light">
                  Détails
                </div>
                <div className="p-layout-md font-medium text-neutral bg-neutral-light">
                  Spécifications
                </div>
              </div>
              <div className="divide-y divide-gray-200 text-body">
                <div className="grid grid-cols-2">
                  <div className="p-layout-md text-neutral-dark opacity-80">Poids</div>
                  <div className="p-layout-md text-neutral">4,95kg</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-layout-md text-neutral-dark opacity-80">Buzzer</div>
                  <div className="p-layout-md text-neutral">Conseils de stationnement</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-layout-md text-neutral-dark opacity-80">Batterie</div>
                  <div className="p-layout-md text-neutral">Pile sèche/primaire de taille D 1,5v × 4 alcaline de haute qualité</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-layout-md text-neutral-dark opacity-80">Capteur</div>
                  <div className="p-layout-md text-neutral">Capteur ultrasonique</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-layout-md text-neutral-dark opacity-80">Matériau</div>
                  <div className="p-layout-md text-neutral">Coque en aluminium</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Témoignages */}
        <div className="mt-section-lg">
          <h2 className="text-neutral mb-section-sm text-center">
            Ce Que Disent Nos Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-lg">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-layout-lg">
                <div className="text-primary text-6xl mb-layout-sm">"</div>
                <p className="text-neutral-dark opacity-80 mb-layout-md text-body">
                  Lorem ipsum dolor sit amet consectetur. Risus quam tincidunt 
                  pulvinar quam blandit eu erat mus ipsum. Gravida cursus a
                </p>
                <p className="font-medium text-neutral text-body">– A. Dupont</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduit; 