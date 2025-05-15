import React from 'react';

const ReadyToUnlockSection: React.FC = () => (
  <div className="bg-[#f8fafc] py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/4 md:block hidden">
          <img 
            src="/aboutparkingdevice.svg" 
            alt="Dispositif de Stationnement" 
            className="w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/300x300/e6f7ff/003366?text=Dispositif+de+Stationnement';
            }}
          />
        </div>
        
        <div className="text-center my-8 md:my-0">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
            Prêt à débloquer un stationnement plus intelligent ?
          </h2>
          <button className="px-8 py-4 bg-[#1A73E8] text-white rounded-full text-lg font-medium hover:bg-[#1557b0] transition-colors">
            Contactez-Nous
          </button>
        </div>

        <div className="w-1/4 md:block hidden">
          <img 
            src="/aboutparkingdeviceqr.svg" 
            alt="QR du Dispositif de Stationnement" 
            className="w-full h-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/300x300/e6f7ff/003366?text=QR+Code';
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ReadyToUnlockSection;