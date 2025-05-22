import React from 'react';
import PricingPlan from './PricingPlan';
import ComparisonTable from './ComparisonTable';
import { plans } from './pricingData';

const Forfaits: React.FC = () => {
  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="text-center mb-section-sm">
          <span className="inline-block px-6 py-2 mb-layout-md text-secondary bg-secondary-light rounded-btn text-sm font-medium">
            Explorez Nos Forfaits
          </span>
          <h2 className="text-neutral-dark mb-layout-sm">
            Des Forfaits Flexibles Conçus pour<br className="hidden md:block" />Chaque Besoin.
          </h2>
        </div>

        {/* Tableau de Comparaison des Fonctionnalités */}
        <ComparisonTable />

        {/* Forfaits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-lg mt-section-sm">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Forfaits; 