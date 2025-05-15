import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';

interface PaymentOptionsProps {
  total: string;
  onPaymentComplete?: () => void;
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ total, onPaymentComplete }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('credit-card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
          Sélectionnez une Option de Paiement
        </h1>
        <p className="text-gray-600 mb-8">
          Toutes les transactions sont sécurisées et cryptées.
        </p>

        <div className="space-y-4">
          {/* PayPal Option */}
          <label className="block">
            <div className={`border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors ${
              selectedMethod === 'paypal' ? 'border-[#1A73E8] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={selectedMethod === 'paypal'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="text-[#1A73E8] focus:ring-[#1A73E8]"
                />
                <span className="font-medium">Paypal</span>
              </div>
              <img 
                src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
                alt="PayPal"
                className="h-6"
              />
            </div>
          </label>

          {/* Credit Card Option */}
          <label className="block">
            <div className={`border-2 rounded-xl p-4 cursor-pointer transition-colors ${
              selectedMethod === 'credit-card' ? 'border-[#1A73E8] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={selectedMethod === 'credit-card'}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="text-[#1A73E8] focus:ring-[#1A73E8]"
                  />
                  <span className="font-medium">Carte de Crédit</span>
                </div>
                <div className="flex gap-2">
                  <img src="https://www.mastercard.com/content/dam/public/brandcenter/assets/images/logos/mclogo-for-footer.svg" alt="Mastercard" className="h-6" />
                  <img src="https://www.visa.com/images/visa-logo.png" alt="Visa" className="h-6" />
                  <img src="https://www.americanexpress.com/content/dam/amex/us/merchant/supplies-uplift/logos/AMEX_Icon_Blue_Box.png" alt="Amex" className="h-6" />
                </div>
              </div>
              <p className="text-sm text-gray-600 ml-8">
                Payez en toute sécurité avec votre carte Visa, Mastercard, Discover ou American Express.
              </p>
              {selectedMethod === 'credit-card' && (
                <div className="mt-4 space-y-4 ml-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Numéro de Carte
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                      placeholder="1244 3759 3469 3469"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nom sur la Carte
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                        placeholder="Nom sur la Carte"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date d'Expiration
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                          placeholder="CVV"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </label>

          {/* Google Pay Option */}
          <label className="block">
            <div className={`border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors ${
              selectedMethod === 'google-pay' ? 'border-[#1A73E8] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="google-pay"
                  checked={selectedMethod === 'google-pay'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="text-[#1A73E8] focus:ring-[#1A73E8]"
                />
                <span className="font-medium">Google Pay</span>
              </div>
              <img 
                src="https://developers.google.com/static/pay/api/images/brand-guidelines/google-pay-mark.png"
                alt="Google Pay"
                className="h-6"
              />
            </div>
          </label>

          {/* Cash on Delivery Option */}
          <label className="block">
            <div className={`border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors ${
              selectedMethod === 'cash' ? 'border-[#1A73E8] bg-blue-50' : 'border-gray-200 hover:border-gray-300'
            }`}>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={selectedMethod === 'cash'}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="text-[#1A73E8] focus:ring-[#1A73E8]"
                />
                <span className="font-medium">Paiement à la Livraison</span>
              </div>
              <DollarSign className="w-6 h-6 text-gray-400" />
            </div>
          </label>
        </div>

        <div className="mt-8">
          <label className="flex items-start gap-2 mb-8">
            <input
              type="checkbox"
              className="mt-1"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <span className="text-sm text-gray-600">
              J'ai lu et j'accepte les conditions générales
            </span>
          </label>

          <button
            className="w-full py-4 bg-[#00b8ff] text-white rounded-xl font-medium hover:bg-[#0099ff] transition-colors flex items-center justify-center gap-2"
            onClick={onPaymentComplete}
            disabled={!agreedToTerms}
          >
            Payer | {total}
            <img 
              src="/click-icon.svg" 
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

export default PaymentOptions;