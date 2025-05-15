import React from 'react';
import PricingPlan from './PricingPlan';
import ComparisonTable from './ComparisonTable';
import { plans } from './pricingData';

const PricingPlans: React.FC = () => {
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

        {/* Feature Comparison Table */}
        <ComparisonTable />

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;