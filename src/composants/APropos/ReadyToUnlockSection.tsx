import React from 'react';

const ReadyToUnlockSection: React.FC = () => (
  <div className="section bg-neutral-light">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/4 md:block hidden">
          <img 
            src="/aboutparkingdevice.webp" 
            alt="Dispositif de Stationnement" 
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/300x300/primary-light/neutral-dark?text=Dispositif+de+Stationnement';
            }}
          />
        </div>
        
        <div className="text-center my-layout-lg md:my-0">
          <h2 className="text-display-2 text-neutral mb-layout-lg">
            Prêt à débloquer un stationnement plus intelligent ?
          </h2>
          <button className="btn-secondary btn-lg">
            Contactez-Nous
          </button>
        </div>

        <div className="w-1/4 md:block hidden">
          <img 
            src="/aboutparkingdeviceqr.webp" 
            alt="QR du Dispositif de Stationnement" 
            className="w-full h-auto"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/300x300/primary-light/neutral-dark?text=QR+Code';
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToUnlockSection; 