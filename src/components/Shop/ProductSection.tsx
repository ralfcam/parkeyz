import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductSectionProps {
  onNavigate: (view: string) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ onNavigate }) => (
  <div className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-8">
      <div className="bg-white rounded-3xl p-12 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
          {/* Product Image */}
          <div className="lg:w-1/2 bg-gray-100 rounded-2xl p-8">
            <img 
              src="/shopbouncer.svg" 
              alt="Dispositif de Stationnement Parkeeyz"
              className="w-full h-auto max-w-lg mx-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x600/e6f7ff/003366?text=Dispositif+Parkeeyz';
              }}
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <span className="text-[#00b8ff] text-2xl font-semibold mb-4 block">
              Parkeeyz
            </span>
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-6">
              Sécurisez Votre Stationnement en Toute Simplicité
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Prenez le contrôle de votre espace de stationnement avec Parkeeyz, un 
              dispositif de contrôle d'accès intelligent conçu 
              pour les solutions de stationnement individuelles et professionnelles. 
              Profitez d'une tranquillité d'esprit absolue grâce à notre technologie de pointe.
            </p>
            <div className="text-4xl font-bold text-[#003366] mb-8">
              99,99 €
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="px-12 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-full text-lg font-medium hover:bg-gray-50 transition-colors"
                onClick={() => onNavigate('product-detail')}
              >
                En Savoir Plus
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
);

export default ProductSection;