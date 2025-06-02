import React from 'react';
import { Check, Star } from 'lucide-react';

interface PricingPlanProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
  buttonText?: string;
  popular?: boolean;
  features?: string[];
}

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  name, 
  price, 
  period = "/mois",
  description, 
  buttonVariant = 'primary',
  buttonText = "Choisir ce plan",
  popular = false,
  features = []
}) => {
  const buttonClasses = {
    primary: 'btn-primary bg-primary hover:bg-primary-dark text-white',
    secondary: 'btn-secondary bg-secondary hover:bg-secondary-dark text-white',
    outline: 'btn-outline border-primary text-primary hover:bg-primary hover:text-white',
  };

  return (
    <div className={`card relative overflow-hidden ${popular ? 'ring-2 ring-primary shadow-xl' : ''}`}>
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white text-center py-2">
          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Le plus populaire</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
        </div>
      )}
      
      <div className={`${popular ? 'pt-layout-lg' : ''} mb-layout-lg`}>
        <h3 className="text-heading-3 text-neutral-dark mb-layout-sm">{name}</h3>
        <div className="flex items-baseline mb-layout-sm">
          <span className="text-display-2 text-primary font-bold">{price}</span>
          {period && <span className="ml-1 text-neutral-dark opacity-70 text-body">{period}</span>}
        </div>
        <p className="text-neutral-dark opacity-80 text-body leading-relaxed">{description}</p>
      </div>

      {features.length > 0 && (
        <div className="mb-layout-lg">
          <h4 className="text-body font-semibold text-neutral-dark mb-layout-sm">Inclus :</h4>
          <ul className="space-y-layout-xs">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-layout-xs">
                <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-body text-neutral-dark">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button className={`w-full btn-lg ${buttonClasses[buttonVariant]} ${popular ? 'shadow-lg' : ''}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default PricingPlan; 