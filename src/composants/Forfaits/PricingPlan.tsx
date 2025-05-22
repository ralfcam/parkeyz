import React from 'react';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  buttonVariant?: 'accent' | 'secondary' | 'neutral-dark';
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, description, buttonVariant = 'accent' }) => {
  const buttonClasses = {
    accent: 'btn-primary bg-accent hover:bg-accent-dark',
    secondary: 'btn-secondary',
    'neutral-dark': 'btn-primary bg-neutral-dark hover:bg-neutral-darker',
  };

  return (
    <div className="card relative overflow-hidden">
      <div className="mb-layout-lg">
        <h3 className="text-neutral-dark mb-2">{name}</h3>
        <p className="text-gray-600 mb-layout-sm text-small">À partir de</p>
        <div className="flex items-baseline">
          <span className="text-display-2 text-secondary">{price}€</span>
          <span className="ml-2 text-gray-600 text-small">Par Mois / Utilisateur</span>
        </div>
      </div>
      <p className="text-gray-700 mb-layout-lg text-body">{description}</p>
      <button className={`w-full ${buttonClasses[buttonVariant]}`}>
        Commencer
      </button>
    </div>
  );
};

export default PricingPlan; 