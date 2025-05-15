import React from 'react';
import BouncerSpot from '../BouncerSpot';
import PourquoiParkeeyz from '../PourquoiParkeeyz';
import CommentCaMarche from '../CommentCaMarche';
import AppelActionContact from '../AppelActionContact';
import FAQ from '../FAQ';
import Forfaits from '../Forfaits';
import ContactFormulaire from '../ContactFormulaire';
import TutorielsVideos from '../TutorielsVideos';
import Boutique from '../Boutique';
import ConditionsGenerales from '../ConditionsGenerales';
import PolitiqueConfidentialite from '../PolitiqueConfidentialite';
import DetailProduit from '../DetailProduit';
import InformationsLivraison from '../InformationsLivraison';
import OptionsPaiement from '../OptionsPaiement';
import AccueilHero from './AccueilHero';
import APropos from '../APropos';

interface ContenuPrincipalProps {
  currentView: string;
  handleNavigate: (view: string) => void;
}

const ContenuPrincipal: React.FC<ContenuPrincipalProps> = ({ currentView, handleNavigate }) => {
  const renderView = () => {
    switch (currentView) {
      case 'a-propos':
        return <APropos />;
      case 'contact':
        return <ContactFormulaire />;
      case 'tutorials':
        return <TutorielsVideos />;
      case 'shop':
        return <Boutique onNavigate={handleNavigate} />;
      case 'terms':
        return <ConditionsGenerales />;
      case 'privacy':
        return <PolitiqueConfidentialite />;
      case 'product-detail':
        return <DetailProduit onNavigate={handleNavigate} />;
      case 'shipping':
        return <InformationsLivraison onNavigate={handleNavigate} />;
      case 'payment':
        return <OptionsPaiement total="208,00€" onPaymentComplete={() => handleNavigate('confirmation')} />;
      case 'pricing':
        return <Forfaits />;
      default:
        return (
          <>
            <AccueilHero />
            <BouncerSpot />
            <CommentCaMarche />
            <PourquoiParkeeyz />
            <FAQ />
            <AppelActionContact />
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

export default ContenuPrincipal; 