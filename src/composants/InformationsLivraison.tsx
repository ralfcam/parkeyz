import React, { useState } from 'react';
import { Truck, Box } from 'lucide-react';

interface InformationsLivraisonProps {
  onNavigate: (view: string) => void;
}

const InformationsLivraison: React.FC<InformationsLivraisonProps> = ({ onNavigate }) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-12">
          Informations de Livraison
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de Gauche - Formulaire */}
          <div className="lg:col-span-2 space-y-8">
            {/* Méthode de Livraison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                className={`p-6 rounded-xl border-2 flex items-center gap-4 transition-colors ${
                  deliveryMethod === 'delivery'
                    ? 'border-[#1A73E8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDeliveryMethod('delivery')}
              >
                <Truck className={`w-6 h-6 ${deliveryMethod === 'delivery' ? 'text-[#1A73E8]' : 'text-gray-400'}`} />
                <span className={deliveryMethod === 'delivery' ? 'text-[#1A73E8]' : 'text-gray-600'}>Livraison</span>
              </button>
              <button
                className={`p-6 rounded-xl border-2 flex items-center gap-4 transition-colors ${
                  deliveryMethod === 'pickup'
                    ? 'border-[#1A73E8] bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setDeliveryMethod('pickup')}
              >
                <Box className={`w-6 h-6 ${deliveryMethod === 'pickup' ? 'text-[#1A73E8]' : 'text-gray-400'}`} />
                <span className={deliveryMethod === 'pickup' ? 'text-[#1A73E8]' : 'text-gray-600'}>Retrait</span>
              </button>
            </div>

            {/* Informations de Contact */}
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  placeholder="jean@dupont.fr"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse Complète
                </label>
                <textarea
                  id="address"
                  rows={4}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent resize-none"
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
              <label htmlFor="terms" className="text-sm text-gray-600">
                J&apos;ai lu et j&apos;accepte les conditions générales
              </label>
            </div>
          </div>

          {/* Colonne de Droite - Récapitulatif */}
          <div className="bg-white p-6 md:p-8 rounded-2xl h-fit">
            <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-8">
              Récapitulatif de Votre Commande
            </h2>

            {/* Articles de la Commande */}
            <div className="space-y-8 mb-8">
              <div className="flex items-center gap-4 md:gap-6">
                <img
                  src="/shippinginfobouncer1.svg"
                  alt="Bouncer"
                  className="w-24 h-24 md:w-32 md:h-32 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/128x128/e6f7ff/003366?text=Bouncer';
                  }}
                />
                <div>
                  <h3 className="font-medium text-[#1A1A1A] text-base md:text-lg">Bouncer</h3>
                  <p className="text-gray-500">1x</p>
                </div>
                <div className="ml-auto font-medium text-[#1A1A1A] text-base md:text-lg">
                  99,00€
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <img
                  src="/shippinginfobouncer2.svg"
                  alt="Bouncer Premium"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/144x144/e6f7ff/003366?text=Bouncer+Premium';
                  }}
                />
                <div>
                  <h3 className="font-medium text-[#1A1A1A] text-base md:text-lg">Bouncer Premium</h3>
                  <p className="text-gray-500">1x</p>
                </div>
                <div className="ml-auto font-medium text-[#1A1A1A] text-base md:text-lg">
                  99,00€
                </div>
              </div>
            </div>

            {/* Récapitulatif de la Commande */}
            <div className="space-y-4 py-6 border-y border-gray-100">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-Total</span>
                <span className="font-medium text-[#1A1A1A]">198,00€</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Livraison</span>
                <span className="font-medium text-[#1A1A1A]">10,00€</span>
              </div>
              <div className="flex justify-between text-lg font-medium">
                <span className="text-gray-900">Total</span>
                <span className="text-[#1A73E8]">208,00€</span>
              </div>
            </div>

            <button 
              className="w-full py-4 bg-[#00b8ff] text-white rounded-xl font-medium hover:bg-[#0099ff] transition-colors mt-8"
              onClick={() => onNavigate('payment')}
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