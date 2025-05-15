import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, Music } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#00264d] text-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/parkeeyzlogo.svg" 
                alt="Logo PARKEEYZ" 
                className="h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/40x40/00b8ff/ffffff?text=P';
                }}
              />
              <span className="text-3xl font-bold">
                PARKEEYZ
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre solution de stationnement intelligente. Sécurisez, contrôlez et gérez votre espace de stationnement en toute simplicité.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Liens Rapides</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                >
                  Aperçu du Produit
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('pricing');
                  }}
                >
                  Forfaits
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('faq');
                  }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect with us */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Connectez-vous avec nous sur</h3>
            <div className="flex gap-4 mb-12">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Music className="w-5 h-5" />
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Recevez Les Dernières Nouvelles</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Écrivez votre email ici"
                  className="flex-1 px-4 py-2 rounded-lg sm:rounded-r-none bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00b8ff]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="px-6 py-2 bg-[#00b8ff] text-white rounded-lg sm:rounded-l-none font-medium hover:bg-[#0099ff] transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>Copyright © 2025 PARKEEYZ | Tous Droits Réservés</span>
            <span className="hidden sm:inline">|</span>
            <a 
              href="#" 
              className="hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('terms');
              }}
            >
              Conditions Générales
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href="#" 
              className="hover:text-white"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('privacy');
              }}
            >
              Politique de Confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;