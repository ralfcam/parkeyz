import React, { useState } from 'react';
import { Linkedin, Facebook, Instagram, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PiedDePageProps {
  onNavigate?: (view: string) => void;
}

const PiedDePage: React.FC<PiedDePageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-neutral-darker text-white py-section-md">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-xl">
          {/* Logo et Description */}
          <div>
            <div className="flex items-center gap-2 mb-layout-md">
              <Link to="/">
                <img 
                  src="/logo.webp" 
                  alt="Logo PARKEEYZ" 
                  className="h-10 w-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://placehold.co/40x40/00b8ff/ffffff?text=P';
                  }}
                />
              </Link>
            </div>
            <p className="text-gray-300 leading-relaxed text-body">
              Votre solution de stationnement intelligente. Sécurisez, contrôlez et gérez votre espace de stationnement en toute simplicité.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-layout-md">Liens Rapides</h3>
            <ul className="space-y-layout-sm">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors text-body"
                >
                  Aperçu du Produit
                </Link>
              </li>
              <li>
                <Link 
                  to="/boutique-forfaits" 
                  className="text-gray-300 hover:text-white transition-colors text-body"
                >
                  Boutique & Forfaits
                </Link>
              </li>
              <li>
                <Link 
                  to="/#faq" 
                  className="text-gray-300 hover:text-white transition-colors text-body"
                  onClick={(e) => {
                    // Special handling for anchor links
                    e.preventDefault();
                    document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors text-body"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Suivez-nous */}
          <div>
            <h3 className="text-xl font-semibold mb-layout-md">Connectez-vous avec nous sur</h3>
            <div className="flex gap-layout-sm mb-layout-xl">
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
              <h3 className="text-xl font-semibold mb-layout-md">Recevez Les Dernières Nouvelles</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Écrivez votre email ici"
                  className="input flex-1 sm:rounded-r-none text-neutral bg-white placeholder-gray-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn-primary sm:rounded-l-none">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-section-sm pt-layout-lg border-t border-white/10 text-center text-gray-400 text-sm">
          <p className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <span>Copyright © 2025 PARKEEYZ | Tous Droits Réservés</span>
            <span className="hidden sm:inline">|</span>
            <Link 
              to="/terms" 
              className="hover:text-white"
            >
              Conditions Générales
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link 
              to="/privacy" 
              className="hover:text-white"
            >
              Politique de Confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PiedDePage; 