import React from 'react';
import { Building2, Clock, Users, BarChart3, Settings, Calendar } from 'lucide-react';

const AvantageItem = ({ 
  icon: Icon, 
  title 
}: { 
  icon: React.ElementType; 
  title: string; 
}) => (
  <div className="flex items-center gap-layout-sm">
    <div className="bg-primary-light p-2 rounded-lg">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <span className="text-body text-neutral-dark">{title}</span>
  </div>
);

const SolutionsProfessionnelles: React.FC = () => {
  const avantages = [
    {
      icon: Calendar,
      title: "Réservation de chambre + place de parking en un clic"
    },
    {
      icon: Users,
      title: "Gestion simplifiée des accès pour le personnel"
    },
    {
      icon: BarChart3,
      title: "Optimisation de l'utilisation de votre parc de stationnement"
    },
    {
      icon: Clock,
      title: "Données d'occupation en temps réel"
    },
    {
      icon: Settings,
      title: "Personnalisation selon vos besoins spécifiques"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-primary-light to-secondary-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-section-sm items-center">
          <div>
            <span className="inline-block px-6 py-2 bg-white text-primary rounded-btn text-sm font-medium mb-layout-sm">
              Solutions Professionnelles
            </span>
            <h2 className="text-display-2 text-neutral-dark mb-layout-lg">
              Solutions pour Hôtels et Entreprises
            </h2>
            <p className="text-body-large text-neutral-dark opacity-80 mb-layout-xl leading-relaxed">
              Intégrez Lockeeyz à votre infrastructure existante grâce à notre API. 
              Offrez à vos clients ou employés une expérience de stationnement fluide et automatisée.
            </p>

            <div className="space-y-layout-md mb-layout-xl">
              {avantages.map((avantage, index) => (
                <AvantageItem key={index} {...avantage} />
              ))}
            </div>

            <button className="btn-primary btn-lg flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              Demander une démo professionnelle
            </button>
          </div>

          <div className="relative">
            <div className="bg-white p-layout-xl rounded-2xl shadow-xl">
              <img 
                src="/professional-solutions.webp" 
                alt="Solutions professionnelles Lockeeyz pour hôtels et entreprises"
                className="w-full h-auto mb-layout-lg rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/500x300/f8fafc/64748b?text=Solutions+Professionnelles';
                }}
              />
              <div className="text-center">
                <h3 className="text-heading-3 text-neutral-dark mb-layout-sm">
                  API & Intégration
                </h3>
                <p className="text-body text-neutral-dark opacity-80">
                  Connectez Lockeeyz à vos systèmes existants en quelques lignes de code
                </p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white p-layout-md rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">API</p>
                <p className="text-sm opacity-80">REST & WebHooks</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-primary text-white p-layout-md rounded-2xl shadow-lg">
              <div className="text-center">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm opacity-80">Support dédié</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsProfessionnelles; 