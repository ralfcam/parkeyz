import React from 'react';
import { Key, Settings, Shield, Car } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
}

interface ProductDetailProps {
  onNavigate: (view: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title }) => (
  <div className="bg-white rounded-xl p-6 text-center">
    <div className="flex justify-center mb-4">
      <Icon className="w-8 h-8 text-[#1A73E8]" />
    </div>
    <h3 className="text-[#1A1A1A] font-medium">{title}</h3>
  </div>
);

const ProductDetail: React.FC<ProductDetailProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen bg-gray-50">
      {/* Product Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-16">
          <span className="text-[#00b8ff] text-xl">Bouncer Key</span>
          <h1 className="text-4xl font-bold text-[#1A1A1A] mt-2 mb-6">
            Sécurisez Votre Stationnement, Sans Effort
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Prenez le contrôle de votre espace de stationnement avec Bouncer Key, un dispositif de contrôle 
            d'accès compact conçu pour les solutions de stationnement individuelles et à 
            petite échelle. Dites adieu aux accès non autorisés et profitez d'une tranquillité d'esprit totale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="/shopbouncer.svg" 
              alt="Dispositif de Stationnement Bouncer Key"
              className="w-full h-auto max-w-xl mx-auto rounded-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x600/e6f7ff/003366?text=Bouncer+Key+Device';
              }}
            />
          </div>

          <div>
            <div className="text-4xl font-bold text-[#1A73E8] mb-8">
              99,99€
            </div>

            <button 
              className="w-full py-4 bg-[#1A73E8] text-white rounded-xl text-lg font-medium hover:bg-[#1557b0] transition-colors mb-6"
              onClick={() => onNavigate('shipping')}
            >
              Acheter Maintenant
            </button>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <FeatureCard 
                icon={Key} 
                title="Accès Bluetooth" 
              />
              <FeatureCard 
                icon={Settings} 
                title="Installation et Configuration Faciles" 
              />
              <FeatureCard 
                icon={Shield} 
                title="Historique d'Accès en Temps Réel" 
              />
              <FeatureCard 
                icon={Car} 
                title="Compact et Fiable" 
              />
            </div>

            {/* Specifications Table */}
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-4 font-medium text-[#1A1A1A] bg-[#f8fafc]">
                  Détails
                </div>
                <div className="p-4 font-medium text-[#1A1A1A] bg-[#f8fafc]">
                  Spécifications
                </div>
              </div>
              <div className="divide-y">
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-600">Poids</div>
                  <div className="p-4">4,95kg</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-600">Buzzer</div>
                  <div className="p-4">Conseils de stationnement</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-600">Batterie</div>
                  <div className="p-4">Pile sèche/primaire de taille D 1,5v × 4 alcaline de haute qualité</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-600">Capteur</div>
                  <div className="p-4">Capteur ultrasonique</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 text-gray-600">Matériau</div>
                  <div className="p-4">Coque en aluminium</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-12 text-center">
            Ce Que Disent Nos Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl">
                <div className="text-[#00b8ff] text-6xl mb-4">"</div>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet consectetur. Risus quam tincidunt 
                  pulvinar quam blandit eu erat mus ipsum. Gravida cursus a
                </p>
                <p className="font-medium text-[#1A1A1A]">– A. Dupont</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;