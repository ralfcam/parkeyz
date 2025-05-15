import React from 'react';
import { Lightbulb, Shield, Settings, Search, ThumbsUp } from 'lucide-react';
import FeatureCard from './FeatureCard';

const WhyChooseUsSection: React.FC = () => (
  <div className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">Pourquoi Nous Choisir?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Lightbulb className="w-full h-full stroke-[1.5]" />}
          title="L'Innovation d'Abord"
        />
        <FeatureCard
          icon={<Shield className="w-full h-full stroke-[1.5]" />}
          title="Sécurité de Confiance"
        />
        <FeatureCard
          icon={<Settings className="w-full h-full stroke-[1.5]" />}
          title="Solutions Évolutives"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
        <FeatureCard
          icon={<Search className="w-full h-full stroke-[1.5]" />}
          title="Approche Centrée sur l'Utilisateur"
        />
        <FeatureCard
          icon={<ThumbsUp className="w-full h-full stroke-[1.5]" />}
          title="Support Fiable"
        />
      </div>
    </div>
  </div>
);

export default WhyChooseUsSection; 