import React from 'react';
import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import ReadyToMasterSection from './ReadyToMasterSection';
import StayUpdatedSection from './StayUpdatedSection';
import NeedMoreHelpSection from './NeedMoreHelpSection';

interface BoutiqueProps {
  onNavigate: (view: string) => void;
}

const Boutique: React.FC<BoutiqueProps> = ({ onNavigate }) => {
  return (
    // The individual sections will apply their own padding and background if needed.
    // This top-level section primarily serves as a container.
    <section>
      <HeroSection />
      <ProductSection onNavigate={onNavigate} />
      <ReadyToMasterSection />
      <StayUpdatedSection />
      <NeedMoreHelpSection />
    </section>
  );
};

export default Boutique; 