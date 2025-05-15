import React from 'react';
import BouncerSpot from '../BouncerSpot';
import WhyBouncerSpot from '../WhyBouncerSpot';
import HowItWorks from '../HowItWorks';
import ContactCTA from '../ContactCTA';
import FAQ from '../FAQ';
import PricingPlans from '../PricingPlans';
import Contact from '../Contact';
import TutorialsAndVideos from '../TutorialsAndVideos';
import Shop from '../Shop';
import TermsAndConditions from '../TermsAndConditions';
import PrivacyPolicy from '../PrivacyPolicy';
import ProductDetail from '../ProductDetail';
import ShippingInfo from '../ShippingInfo';
import PaymentOptions from '../PaymentOptions';
import HomeHero from './HomeHero';
import About from '../About';

interface MainContentProps {
  currentView: string;
  handleNavigate: (view: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ currentView, handleNavigate }) => {
  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'tutorials':
        return <TutorialsAndVideos />;
      case 'shop':
        return <Shop onNavigate={handleNavigate} />;
      case 'terms':
        return <TermsAndConditions />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'product-detail':
        return <ProductDetail onNavigate={handleNavigate} />;
      case 'shipping':
        return <ShippingInfo onNavigate={handleNavigate} />;
      case 'payment':
        return <PaymentOptions total="$208.00" onPaymentComplete={() => handleNavigate('confirmation')} />;
      case 'pricing':
        return <PricingPlans />;
      default:
        return (
          <>
            <HomeHero />
            <BouncerSpot />
            <HowItWorks />
            <WhyBouncerSpot />
            <FAQ />
            <ContactCTA />
          </>
        );
    }
  };

  return (
    <main>
      {renderView()}
    </main>
  );
};

export default MainContent;