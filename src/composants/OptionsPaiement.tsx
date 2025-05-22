import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

interface OptionsPaiementProps {
  total: string;
  onPaymentComplete?: () => void;
}

const OptionsPaiement: React.FC<OptionsPaiementProps> = ({ total, onPaymentComplete }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('credit-card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <section className="section bg-neutral-light">
      <div className="container max-w-2xl">
        <h1 className="text-center mb-layout-lg">
          Sélectionnez une Option de Paiement
        </h1>
        <p className="text-center text-gray-600 mb-layout-xl">
          Toutes les transactions sont sécurisées et cryptées.
        </p>

        <div className="space-y-layout-md">
          {/* Option PayPal */}
          <label className="block">
            <div className={`border-2 rounded-input p-layout-md flex items-center justify-between cursor-pointer transition-colors ${
              selectedMethod === 'paypal' ? 'border-secondary bg-secondary-light' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={selectedMethod === 'paypal'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="text-secondary focus:ring-secondary"
                />
                <span className="font-medium text-body">Paypal</span>
              </div>
              <img 
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </label>

          {/* Option Carte de Crédit */}
          <label className="block">
            <div className={`border-2 rounded-input p-layout-md cursor-pointer transition-colors ${
              selectedMethod === 'credit-card' ? 'border-secondary bg-secondary-light' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center justify-between mb-layout-sm">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={selectedMethod === 'credit-card'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="text-secondary focus:ring-secondary"
                  />
                  <span className="font-medium text-body">Carte de Crédit</span>
                </div>
                <div className="flex gap-2">
                  <img src="https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.webp" alt="Mastercard" className="h-6" />
                  <img src="https://www.visa.com/images/visa-logo.png" alt="Visa" className="h-6" />
                  <img src="https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/logos/AMEX_Icon_Blue_Box.png" alt="Amex" className="h-6" />
                </div>
              </div>
              <p className="text-small text-gray-600 ml-8">
                Payez en toute sécurité avec votre carte Visa, Mastercard, Discover ou American Express.
              </p>
              {selectedMethod === 'credit-card' && (
                <div className="mt-layout-sm space-y-layout-sm ml-8">
                  <div>
                    <label className="block text-small font-medium text-gray-700 mb-1">
                      Numéro de Carte
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="1244 3759 3469 3469"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-layout-sm">
                    <div>
                      <label className="block text-small font-medium text-gray-700 mb-1">
                        Nom sur la Carte
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Nom sur la Carte"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-layout-sm">
                      <div>
                        <label className="block text-small font-medium text-gray-700 mb-1">
                          Date d&apos;Expiration
                        </label>
                        <input
                          type="text"
                          className="input"
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <label className="block text-small font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="input"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </label>

          {/* Option Google Pay */}
          <label className="block">
            <div className={`border-2 rounded-input p-layout-md flex items-center justify-between cursor-pointer transition-colors ${
              selectedMethod === 'google-pay' ? 'border-secondary bg-secondary-light' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="google-pay"
                  checked={selectedMethod === 'google-pay'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="text-secondary focus:ring-secondary"
                />
                <span className="font-medium text-body">Google Pay</span>
              </div>
              <img 
                src="https://developers.google.com/static/pay/api/images/brand-guidelines/google-pay-mark.png"
                alt="Google Pay"
                className="h-6"
              />
            </div>
          </label>

          {/* Option Paiement à la Livraison */}
          <label className="block">
            <div className={`border-2 rounded-input p-layout-md flex items-center justify-between cursor-pointer transition-colors ${
              selectedMethod === 'cash' ? 'border-secondary bg-secondary-light' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={selectedMethod === 'cash'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="text-secondary focus:ring-secondary"
                />
                <span className="font-medium text-body">Paiement à la Livraison</span>
              </div>
              <DollarSign className="w-6 h-6 text-gray-400" />
            </div>
          </label>
        </div>

        <div className="mt-layout-xl">
          <label className="flex items-start gap-2 mb-layout-xl">
            <input
              type="checkbox"
              className="mt-1"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <span className="text-small text-gray-600">
              J&apos;ai lu et j&apos;accepte les conditions générales
            </span>
          </label>

          <button
            className="btn-primary btn-lg w-full flex items-center justify-center gap-2"
            onClick={onPaymentComplete}
            disabled={!agreedToTerms}
          >
            Payer | {total}
            <img 
              src="/click-icon.webp" 
              alt="Cliquer"
              className="w-6 h-6"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/24x24/ffffff/ffffff?text=→';
              }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OptionsPaiement; 