import React from 'react';
import HeroSection from './HeroSection';
import OurStorySection from './OurStorySection';
import CeQueNousFaisons from '../CeQueNousFaisons';
import ValuesSection from './ValuesSection';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';
import OurVisionSection from './OurVisionSection';
import RevolutionSection from './RevolutionSection';
import ReadyToUnlockSection from './ReadyToUnlockSection';

const APropos: React.FC = () => {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <CeQueNousFaisons />
      <MissionSection />
      <ValuesSection />
      <OurVisionSection />
      <RevolutionSection />
      <TeamSection />
      <ReadyToUnlockSection />
    </section>
  );
};

export default APropos; 