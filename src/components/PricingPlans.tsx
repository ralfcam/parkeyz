import React from 'react';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  buttonVariant?: 'light' | 'primary' | 'dark';
}

const PricingPlan: React.FC<PlanProps> = ({ name, price, description, buttonVariant = 'light' }) => {
  const buttonStyles = {
    light: 'bg-[#00D2FF] hover:bg-[#00bfe6] text-white',
    primary: 'bg-[#1A73E8] hover:bg-[#1557b0] text-white',
    dark: 'bg-[#003366] hover:bg-[#002347] text-white'
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#003366] mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">À partir de</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-[#1A73E8]">{price}€</span>
          <span className="ml-2 text-gray-600">Par Mois / Utilisateur</span>
        </div>
      </div>
      <p className="text-gray-700 mb-8">{description}</p>
      <button className={`w-full py-3 rounded-lg font-medium transition-colors ${buttonStyles[buttonVariant]}`}>
        Commencer
      </button>
    </div>
  );
};

const FeatureRow: React.FC<{
  feature: string;
  values: (string | boolean)[];
  isEven: boolean;
}> = ({ feature, values, isEven }) => (
  <tr className={`${isEven ? 'bg-[#f5f8ff]' : 'bg-white'} transition-colors hover:bg-[#e8f0ff]`}>
    <td className="py-4 px-2 md:px-6 text-xs md:text-sm text-[#003366]">{feature}</td>
    {values.map((value, index) => (
      <td key={index} className="py-4 px-1 md:px-6 text-center">
        {typeof value === 'boolean' ? (
          value ? <Check className="w-4 h-4 md:w-5 md:h-5 text-[#1A73E8] mx-auto" /> : null
        ) : (
          <span className="text-xs md:text-sm text-[#003366]/80">{value}</span>
        )}
      </td>
    ))}
  </tr>
);

const PricingPlans: React.FC = () => {
  const features = [
    { name: 'Verrouillage Illimité', values: [true, true, true, true] },
    { name: 'Partage', values: ['1 Personne', '2 Personnes', '3 Personnes', '5 Personnes'] },
    { name: 'Historique des Rapports', values: ['1 Semaine', '2 Semaines', '3 Semaines', '4 Semaines'] },
    { name: 'Information Batterie', values: [true, true, true, true] },
    { name: 'Verrouillage Automatique', values: [true, true, true, true] },
    { name: 'Information Personnel', values: [true, true, true, true] },
    { name: 'Alarme', values: [true, true, true, true] },
    { name: 'Renommer le Casier', values: [true, true, true, true] },
    { name: 'Utilisation Web App', values: [false, true, true, true] },
    { name: 'Bouncer Key', values: ['', '4G', '4G', '4G'] },
    { name: 'Logo Personnalisé', values: [false, false, true, true] },
    { name: 'Location de Place', values: [false, false, true, true] },
    { name: 'Tableau de Bord VIP', values: [false, false, true, true] },
    { name: 'Gestion de Calendrier', values: [false, false, true, true] },
    { name: 'Gérer les Réservations', values: [false, false, true, true] },
    { name: 'Portefeuille', values: [false, false, true, true] },
    { name: 'Licence Pour', values: [false, false, true, true] },
    { name: 'Intégration API', values: [false, false, false, true] },
    { name: 'Intégration Design', values: [false, false, false, true] }
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 mb-6 text-[#1A73E8] bg-[#f5f8ff] rounded-full">
            Explorez Nos Forfaits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-4">
            Des Forfaits Flexibles Conçus pour<br className="hidden md:block" />Chaque Besoin.
          </h2>
        </div>

        {/* Feature Comparison Table - Moved up */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="p-8 flex items-center justify-center gap-4 border-b border-gray-100">
            <img src="/featurecomparisontable.svg" alt="Tableau de Comparaison des Fonctionnalités" className="w-10 h-10" />
            <h3 className="text-2xl font-bold text-[#003366]">Tableau de Comparaison des Fonctionnalités</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-[#003366] text-white">Fonctionnalité</th>
                  <th className="py-4 px-6 text-center bg-[#003366] text-white">Keeyz Basique</th>
                  <th className="py-4 px-6 text-center bg-[#003366] text-white">Keeyz Standard</th>
                  <th className="py-4 px-6 text-center bg-[#003366] text-white">Keeyz Or</th>
                  <th className="py-4 px-6 text-center bg-[#1A73E8] text-white">Entreprise</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <FeatureRow
                    key={index}
                    feature={feature.name}
                    values={feature.values}
                    isEven={index % 2 === 0}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            name="Keeyz Basique"
            price="33"
            description="Accès sécurisé pour 1 place de stationnement."
            buttonVariant="light"
          />
          <PricingPlan
            name="Keeyz Standard"
            price="55"
            description="Contrôle multi-espaces, notifications en temps réel."
            buttonVariant="primary"
          />
          <PricingPlan
            name="Keeyz Or"
            price="99"
            description="Suite complète: Gestion d'accès illimitée + support premium."
            buttonVariant="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;