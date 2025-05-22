import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductSectionProps {
  onNavigate?: (view: string) => void; // Make it optional for backward compatibility
}

const ProductSection: React.FC<ProductSectionProps> = ({ onNavigate }) => {
  const navigate = useNavigate();

  // Handle navigation with compatibility for both old and new patterns
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      // Support old navigation pattern if prop is provided
      onNavigate(path);
    } else {
      // Use React Router navigation
      navigate(`/${path}`);
    }
  };

  return (
    <div className="section bg-neutral-light">
      <div className="container">
        <div className="card p-layout-xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-section-sm">
            {/* Image du Produit */}
            <div className="lg:w-1/2 bg-primary-light rounded-card p-layout-lg">
              <img 
                src="/shopbouncer.svg" 
                alt="Dispositif de Stationnement Parkeeyz"
                className="w-full h-auto max-w-lg mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x600/primary-light/neutral-dark?text=Dispositif+Parkeeyz';
                }}
              />
            </div>

            {/* Détails du Produit */}
            <div className="lg:w-1/2">
              <span className="text-primary text-2xl font-semibold mb-layout-sm block">
                Parkeeyz
              </span>
              <h2 className="text-display-2 text-neutral mb-layout-md">
                Sécurisez Votre Stationnement en Toute Simplicité
              </h2>
              <p className="text-xl text-neutral-dark opacity-90 mb-layout-lg leading-relaxed text-body-large">
                Prenez le contrôle de votre espace de stationnement avec Parkeeyz, un 
                dispositif de contrôle d'accès intelligent conçu 
                pour les solutions de stationnement individuelles et professionnelles. 
                Profitez d'une tranquillité d'esprit absolue grâce à notre technologie de pointe.
              </p>
              <div className="text-display-1 text-neutral-dark mb-layout-lg">
                99,99 €
              </div>
              <div className="flex items-center gap-layout-md">
                <button 
                  className="btn-outline btn-lg border-neutral text-neutral hover:bg-neutral-light"
                  onClick={() => handleNavigate('product-detail')}
                >
                  En Savoir Plus
                </button>
                <button className="btn-primary p-4 rounded-input">
                  <ShoppingCart className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection; 