import React from 'react';
import { Battery, Bluetooth, Droplets, Smartphone, Shield, Zap, Clock, Euro } from 'lucide-react';

const SpecificationItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
}) => (
  <div className="flex items-start gap-layout-sm">
    <div className="bg-primary-light p-3 rounded-lg">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 className="text-body font-semibold text-neutral-dark mb-1">{title}</h3>
      <p className="text-body text-neutral-dark opacity-80">{description}</p>
    </div>
  </div>
);

const LockeeyzProduct: React.FC = () => {
  const specifications = [
    {
      icon: Battery,
      title: "Autonomie 5 mois",
      description: "Batterie longue durée avec recharge USB-C ou solaire optionnelle"
    },
    {
      icon: Bluetooth,
      title: "Bluetooth & 4G",
      description: "Connectivité double pour un contrôle fiable à distance"
    },
    {
      icon: Droplets,
      title: "Étanchéité IP65",
      description: "Résistant à toutes les intempéries et conditions extérieures"
    },
    {
      icon: Smartphone,
      title: "Gestion multipropriétaire",
      description: "Partagez l'accès avec plusieurs utilisateurs facilement"
    },
    {
      icon: Shield,
      title: "Ultra-résistant",
      description: "Supporte jusqu'à 2500KG de résistance"
    },
    {
      icon: Zap,
      title: "Installation 15 minutes",
      description: "Mise en place simple sans outils spécialisés"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-darker">
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-neutral-darker to-neutral-dark text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-sm items-center">
            <div>
              <span className="inline-block px-6 py-2 mb-layout-lg text-primary bg-primary-light rounded-btn text-sm font-medium">
                Lockeeyz - La Barrière Connectée
              </span>
              <h1 className="text-display-1 mb-layout-lg">
                Prenez le contrôle de votre place avec Lockeeyz
              </h1>
              <p className="text-heading-3 opacity-90 mb-layout-xl leading-relaxed">
                La barrière connectée installée en 15 minutes, autonome 5 mois et pilotable depuis votre smartphone.
              </p>

              <div className="flex flex-col sm:flex-row gap-layout-md mb-layout-xl">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-layout-lg rounded-2xl flex-1">
                  <div className="flex items-center gap-layout-sm mb-layout-sm">
                    <Euro className="w-8 h-8 text-primary" />
                    <div>
                      <p className="text-display-2 font-bold">350€</p>
                      <p className="text-body opacity-80">TTC Livraison incluse</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-layout-lg rounded-2xl flex-1">
                  <div className="flex items-center gap-layout-sm mb-layout-sm">
                    <Clock className="w-8 h-8 text-secondary" />
                    <div>
                      <p className="text-display-2 font-bold">15 min</p>
                      <p className="text-body opacity-80">Installation</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn-primary btn-xl mb-layout-md">
                Commander maintenant
              </button>
              <p className="text-body opacity-70">
                Installation en 15 minutes • Garantie 2 ans • Support inclus
              </p>
            </div>

            <div className="relative">
              <img 
                src="/lockeeyz-product.webp" 
                alt="Lockeeyz - Barrière connectée pour place de parking"
                className="w-full h-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x500/1e293b/e2e8f0?text=Lockeeyz+Barrière+Connectée';
                }}
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-white p-layout-lg rounded-2xl shadow-xl">
                <p className="text-lg font-bold">Unique en Europe</p>
                <p className="text-sm opacity-90">Technologie brevetée</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-section-md">
            <h2 className="text-display-2 text-neutral-dark mb-layout-lg">
              Lockeeyz - La Barrière Connectée qui Révolutionne votre Stationnement
            </h2>
            <div className="text-body-large text-neutral-dark opacity-80 leading-relaxed space-y-layout-md">
              <p>
                Découvrez Lockeeyz, la première barrière de parking connectée qui allie sécurité, simplicité et rentabilité. 
                Conçue pour les particuliers et les professionnels, cette solution innovante vous permet de contrôler l'accès 
                à votre place de stationnement depuis votre smartphone et de la rentabiliser quand vous ne l'utilisez pas.
              </p>
              <p>
                Unique en Europe, Lockeeyz transforme une simple place de parking en espace intelligent et potentiellement rentable. 
                Fini les véhicules ventouses, les accès non autorisés et les places inutilisées. Prenez le contrôle de votre espace 
                de stationnement, en toute simplicité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="section bg-neutral-light">
        <div className="container">
          <div className="text-center mb-section-sm">
            <h2 className="text-display-2 text-neutral-dark mb-layout-lg">
              Spécifications techniques
            </h2>
            <p className="text-heading-3 text-neutral-dark opacity-80 max-w-3xl mx-auto mb-layout-xl">
              Autonomie 5 mois · Bluetooth & 4G · Étanchéité IP65 · Recharge USB‑C ou solaire optionnelle · 
              Gestion multipropriétaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-layout-lg">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-white p-layout-lg rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <SpecificationItem {...spec} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center">
          <h2 className="text-display-2 mb-layout-lg">
            Prêt à révolutionner votre stationnement ?
          </h2>
          <p className="text-heading-3 opacity-90 mb-layout-xl max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui ont déjà choisi Lockeeyz pour sécuriser et rentabiliser leur place de parking.
          </p>
          <div className="flex flex-col sm:flex-row gap-layout-md justify-center">
            <button className="btn-secondary btn-xl">
              Commander - 350 € TTC
            </button>
            <button className="btn-outline btn-xl border-white text-white hover:bg-white hover:text-primary">
              Voir la démo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LockeeyzProduct; 