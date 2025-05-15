import React from 'react';
import HeroSection from './HeroSection';
import ProductSection from './ProductSection';
import ReadyToMasterSection from './ReadyToMasterSection';
import StayUpdatedSection from './StayUpdatedSection';
import NeedMoreHelpSection from './NeedMoreHelpSection';

interface ShopProps {
  onNavigate: (view: string) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <ProductSection onNavigate={onNavigate} />
      <ReadyToMasterSection />
      <StayUpdatedSection />
      <NeedMoreHelpSection />
    </section>
  );
};

export default Shop;