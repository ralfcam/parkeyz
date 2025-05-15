import React from 'react';

const NeedMoreHelpSection: React.FC = () => (
  <div className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-[#1A1A1A] mb-16">
          Besoin d'Assistance ?
        </h2>
        <div className="flex justify-center gap-6">
          <button className="px-12 py-4 bg-[#1A73E8] text-white rounded-lg text-xl font-medium hover:bg-[#1557b0] transition-colors">
            Centre d'Aide
          </button>
          <button className="px-12 py-4 text-[#1A73E8] border-2 border-[#1A73E8] rounded-lg text-xl font-medium hover:bg-[#f5f8ff] transition-colors">
            Nous Contacter
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default NeedMoreHelpSection; 