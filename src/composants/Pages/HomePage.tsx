import React from 'react';
import AccueilHero from '../App/AccueilHero';
import BouncerSpot from '../BouncerSpot';
import CommentCaMarche from '../CommentCaMarche';
import PourquoiParkeeyz from '../PourquoiParkeeyz';
import Temoignages from '../Temoignages';
import SolutionsProfessionnelles from '../SolutionsProfessionnelles';
import FAQ from '../FAQ';
import AppelActionContact from '../AppelActionContact';

const HomePage: React.FC = () => {
  return (
    <>
      <AccueilHero />
      <PourquoiParkeeyz />
      <CommentCaMarche />
      <Temoignages />
      <SolutionsProfessionnelles />
      <div id="faq">
        <FAQ />
      </div>
      <AppelActionContact />
    </>
  );
};

export default HomePage; 