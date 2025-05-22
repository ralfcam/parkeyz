import React from 'react';

const ReadyToMasterSection: React.FC = () => (
  <div className="section bg-neutral-light">
    <div className="container">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-display-2 text-neutral mb-layout-lg">
          Prêt à Maîtriser Votre Solution d'Accès ?
        </h2>
        <p className="text-xl text-neutral-dark opacity-90 mb-layout-xl leading-relaxed text-body-large">
          Conçu pour offrir une sécurité et une gestion optimales,<br />
          Parkeeyz redéfinit les standards du stationnement.<br />
          Faites le choix de l'excellence avec la référence<br />
          du marché.
        </p>
        <div className="flex items-center justify-center">
          <button className="btn-outline btn-lg border-secondary text-secondary hover:bg-secondary-light">
            Découvrir Nos Forfaits
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToMasterSection; 