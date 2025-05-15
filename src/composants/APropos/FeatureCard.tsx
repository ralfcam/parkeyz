import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
    <div className="flex justify-center mb-6">
      <div className="text-[#1A73E8] w-16 h-16">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-[#1A1A1A]">{title}</h3>
  </div>
);

export default FeatureCard; 