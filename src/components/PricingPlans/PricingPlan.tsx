import React from 'react';

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  buttonVariant?: 'light' | 'primary' | 'dark';
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, description, buttonVariant = 'light' }) => {
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

export default PricingPlan;