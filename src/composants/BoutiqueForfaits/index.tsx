import React from 'react';
import HeroSection from '../Boutique/HeroSection';
import ProductSection from '../Boutique/ProductSection';
import ReadyToMasterSection from '../Boutique/ReadyToMasterSection';
import StayUpdatedSection from '../Boutique/StayUpdatedSection';
import NeedMoreHelpSection from '../Boutique/NeedMoreHelpSection';
import ComparisonTable from '../Forfaits/ComparisonTable';
import PricingPlan from '../Forfaits/PricingPlan';
import { plans } from '../Forfaits/pricingData';

interface BoutiqueForfaitsProps {
  onNavigate: (view: string) => void;
}

const BoutiqueForfaits: React.FC<BoutiqueForfaitsProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Boutique Sections */}
      <section>
        <HeroSection />
        <ProductSection onNavigate={onNavigate} />
      </section>

      {/* Forfaits Section */}
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

      {/* Additional Sections */}
      <ReadyToMasterSection />
      <StayUpdatedSection />
      <NeedMoreHelpSection />
    </div>
  );
};

export default BoutiqueForfaits; 