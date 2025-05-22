import React, { useState } from 'react';
import { Truck, Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InformationsLivraisonProps {
  onNavigate?: (view: string) => void; // Make it optional for backward compatibility
}

const InformationsLivraison: React.FC<InformationsLivraisonProps> = ({ onNavigate }) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();

  // Handle navigation with compatibility for both old and new patterns
  const handleNavigate = (path: string) => {
    if (onNavigate) {
      // Support old navigation pattern if prop is provided
      onNavigate(path);
    } else {
      // Use React Router navigation with new checkout flow
      if (path === 'payment') {
        navigate('/checkout/payment');
      } else {
        navigate(`/${path}`);
      }
    }
  };

  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <h1 className="text-center mb-layout-xl">
          Informations de Livraison
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-layout-lg">
          {/* Colonne de Gauche - Formulaire */}
          <div className="lg:col-span-2 space-y-layout-lg">
            {/* Méthode de Livraison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-layout-md">
              <button
                className={`p-layout-md rounded-input border-2 flex items-center gap-layout-sm transition-colors ${
                  deliveryMethod === 'delivery'
                    ? 'border-secondary bg-secondary-light'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDeliveryMethod('delivery')}
              >
                <Truck className={`w-6 h-6 ${deliveryMethod === 'delivery' ? 'text-secondary' : 'text-gray-400'}`} />
                <span className={`${deliveryMethod === 'delivery' ? 'text-secondary' : 'text-gray-600'} font-medium text-body`}>Livraison</span>
              </button>
              <button
                className={`p-layout-md rounded-input border-2 flex items-center gap-layout-sm transition-colors ${
                  deliveryMethod === 'pickup'
                    ? 'border-secondary bg-secondary-light'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDeliveryMethod('pickup')}
              >
                <Box className={`w-6 h-6 ${deliveryMethod === 'pickup' ? 'text-secondary' : 'text-gray-400'}`} />
                <span className={`${deliveryMethod === 'pickup' ? 'text-secondary' : 'text-gray-600'} font-medium text-body`}>Retrait</span>
              </button>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-layout-md">
              <div>
                <label htmlFor="fullName" className="block text-small font-medium text-gray-700 mb-1">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="input"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-small font-medium text-gray-700 mb-1">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="jean@dupont.fr"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-small font-medium text-gray-700 mb-1">
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-small font-medium text-gray-700 mb-1">
                  Adresse Complète
                </label>
                <textarea
                  id="address"
                  rows={4}
                  className="input resize-none"
                  placeholder="Entrez votre adresse complète"
                />
              </div>
            </div>

            {/* Acceptation des Conditions */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="text-small text-gray-600">
                J&apos;ai lu et j&apos;accepte les conditions générales
              </label>
            </div>
          </div>

          {/* Colonne de Droite - Récapitulatif */}
          <div className="card p-layout-lg h-fit">
            <h2 className="mb-layout-lg">
              Récapitulatif de Votre Commande
            </h2>

            {/* Articles de la Commande */}
            <div className="space-y-layout-lg mb-layout-lg">
              <div className="flex items-center gap-layout-md">
                <img
                  src="/shippinginfobouncer1.webp"
                  alt="Bouncer"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/128x128/primary-light/neutral-dark?text=Bouncer';
                  }}
                />
                <div>
                  <h3 className="font-medium text-body-large">Bouncer</h3>
                  <p className="text-gray-500 text-small">1x</p>
                </div>
                <div className="ml-auto font-medium text-body-large">
                  99,00€
                </div>
              </div>
              <div className="flex items-center gap-layout-md">
                <img
                  src="/shippinginfobouncer2.webp"
                  alt="Bouncer Premium"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/144x144/primary-light/neutral-dark?text=Bouncer+Premium';
                  }}
                />
                <div>
                  <h3 className="font-medium text-body-large">Bouncer Premium</h3>
                  <p className="text-gray-500 text-small">1x</p>
                </div>
                <div className="ml-auto font-medium text-body-large">
                  99,00€
                </div>
              </div>
            </div>

            {/* Récapitulatif de la Commande */}
            <div className="space-y-layout-sm py-layout-md border-y border-gray-100">
              <div className="flex justify-between text-body">
                <span className="text-gray-600">Sous-Total</span>
                <span className="font-medium">198,00€</span>
              </div>
              <div className="flex justify-between text-body">
                <span className="text-gray-600">Livraison</span>
                <span className="font-medium">10,00€</span>
              </div>
              <div className="flex justify-between text-heading-3 font-medium">
                <span >Total</span>
                <span className="text-secondary">208,00€</span>
              </div>
            </div>

            <button 
              className="btn-primary btn-lg w-full mt-layout-lg"
              onClick={() => handleNavigate('payment')}
              disabled={!agreedToTerms}
            >
              Payer Maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationsLivraison; 