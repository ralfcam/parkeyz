import React from 'react';
import HeroSection from './HeroSection';
import OurStorySection from './OurStorySection';
import WhatWeDo from '../WhatWeDo';
import ValuesSection from './ValuesSection';
import TeamSection from './TeamSection';
import MissionSection from './MissionSection';
import OurVisionSection from './OurVisionSection';
import RevolutionSection from './RevolutionSection';
import ReadyToUnlockSection from './ReadyToUnlockSection';

const About: React.FC = () => {
  return (
    <section className="min-h-screen">
      <HeroSection />
      <OurStorySection />
      <WhatWeDo />
      <MissionSection />
      <ValuesSection />
      <OurVisionSection />
      <RevolutionSection />
      <TeamSection />
      <ReadyToUnlockSection />
    </section>
  );
};

export default About;