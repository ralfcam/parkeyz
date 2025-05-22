import React from 'react';

const NeedMoreHelpSection: React.FC = () => (
  <div className="section bg-white">
    <div className="container">
      <div className="text-center">
        <h2 className="text-display-2 text-neutral mb-section-sm">
          Besoin d'Assistance ?
        </h2>
        <div className="flex justify-center gap-layout-md">
          <button className="btn-secondary btn-lg">
            Centre d'Aide
          </button>
          <button className="btn-outline btn-lg border-secondary text-secondary hover:bg-secondary-light">
            Nous Contacter
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default NeedMoreHelpSection; 