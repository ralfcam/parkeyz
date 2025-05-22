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
    // The individual sections will apply their own padding and background if needed.
    // This top-level section primarily serves as a container.
    <section>
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