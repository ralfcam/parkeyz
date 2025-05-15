import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ShopProps {
  onNavigate: (view: string) => void;
}

const Shop: React.FC<ShopProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#00264d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 pt-24 pb-16 relative">
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-6xl font-bold text-white mb-8">
              Sécurisez, Contrôlez et Simplifiez l'Accès au Stationnement
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Découvrez Bouncer Key, le leader sur le marché<br />
              des solutions de sécurisation pour le stationnement.<br />
              Unique en son genre, il allie technologie avancée, design<br />
              élégant et simplicité d'utilisation.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mt-16">
            <img 
              src="/tutorialsandvideoshero.svg" 
              alt="Solutions de Stationnement"
              className="w-full max-w-4xl mx-auto h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/1200x600/003366/e6f7ff?text=Smart+Parking+Solutions';
              }}
            />
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-3xl p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
              {/* Product Image */}
              <div className="lg:w-1/2 bg-gray-100 rounded-2xl p-8">
                <img 
                  src="/shopbouncer.svg" 
                  alt="Dispositif de Stationnement Bouncer Key"
                  className="w-full h-auto max-w-lg mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/600x600/e6f7ff/003366?text=Bouncer+Key+Device';
                  }}
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2">
                <span className="text-[#00b8ff] text-2xl font-semibold mb-4 block">
                  Bouncer Key
                </span>
                <h2 className="text-5xl font-bold text-[#1A1A1A] mb-6">
                  Sécurisez Votre Stationnement, Sans Effort
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Prenez le contrôle de votre espace de stationnement avec Bouncer Key, un 
                  dispositif de contrôle d'accès compact conçu 
                  pour les solutions de stationnement individuelles et à petite échelle. Dites 
                  adieu aux accès non autorisés et profitez d'une tranquillité d'esprit totale.
                </p>
                <div className="text-4xl font-bold text-[#003366] mb-8">
                  99,99€
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    className="px-12 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
                    onClick={() => onNavigate('product-detail')}
                  >
                    Voir Détails
                  </button>
                  <button className="p-4 bg-[#00b8ff] text-white rounded-xl hover:bg-[#0099ff] transition-colors">
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Master Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
              Prêt à maîtriser votre solution d'accès?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Conçu pour offrir une sécurité et une gestion optimales,<br />
              Bouncer Key redéfinit les standards du stationnement.<br />
              Faites le choix de l'excellence avec la référence<br />
              incontournable du marché.
            </p>
            <div className="flex items-center justify-center">
              <button className="px-8 py-4 text-[#1A73E8] border-2 border-[#1A73E8] rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
                Choisir un Forfait
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
              Restez Informé
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous mettons régulièrement à jour cette page avec de nouveaux tutoriels, 
              conseils et aperçus de fonctionnalités pour vous aider à tirer le meilleur 
              parti de votre expérience All Keeyz.
            </p>
          </div>
        </div>
      </div>

      {/* Need More Help Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-16">
              Besoin d'aide supplémentaire?
            </h2>
            <div className="flex justify-center gap-6">
              <button className="px-12 py-4 bg-[#1A73E8] text-white rounded-lg text-xl font-medium hover:bg-[#1557b0] transition-colors">
                Centre d'Assistance
              </button>
              <button className="px-12 py-4 text-[#1A73E8] border-2 border-[#1A73E8] rounded-lg text-xl font-medium hover:bg-[#f5f8ff] transition-colors">
                Contactez-Nous
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;