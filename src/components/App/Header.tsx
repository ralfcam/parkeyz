import React, { useState } from 'react';
import { ShoppingCart, Globe, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  handleNavigate: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, handleNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (view: string) => {
    handleNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="py-4 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
            <img 
              src="/parkeeyzlogo.svg" 
              alt="Logo PARKEEYZ" 
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/40x40/00b8ff/ffffff?text=P';
              }}
            />
            <span className="ml-2 text-xl font-semibold text-white">PARKEEYZ</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="text-white hover:text-[#00b8ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Accueil
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#00b8ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              Qui Sommes-Nous
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#00b8ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('tutorials');
              }}
            >
              Tutoriels et Vidéos
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#00b8ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('pricing');
              }}
            >
              Forfaits
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#00b8ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contactez-Nous
            </a>
            <a 
              href="#" 
              className="text-white hover:text-[#00b8ff] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('shop');
              }}
            >
              Boutique
            </a>
          </nav>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-white" />
              <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs bg-[#00b8ff] rounded-full text-white">
                0
              </span>
            </div>
            <Globe className="h-6 w-6 text-white hidden sm:block" />
            <button className="hidden sm:block px-8 py-2 text-white bg-[#00b8ff] rounded-full hover:bg-[#0099ff] transition-colors">
              Connexion
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#003366] rounded-lg p-4 absolute left-0 right-0 mx-4 z-50">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-white hover:text-[#00b8ff] transition-colors py-2 px-4 rounded-lg hover:bg-[#004080]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                Accueil
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#00b8ff] transition-colors py-2 px-4 rounded-lg hover:bg-[#004080]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                Qui Sommes-Nous
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#00b8ff] transition-colors py-2 px-4 rounded-lg hover:bg-[#004080]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('tutorials');
                }}
              >
                Tutoriels et Vidéos
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#00b8ff] transition-colors py-2 px-4 rounded-lg hover:bg-[#004080]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('pricing');
                }}
              >
                Forfaits
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#00b8ff] transition-colors py-2 px-4 rounded-lg hover:bg-[#004080]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Contactez-Nous
              </a>
              <a 
                href="#" 
                className="text-white hover:text-[#00b8ff] transition-colors py-2 px-4 rounded-lg hover:bg-[#004080]"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('shop');
                }}
              >
                Boutique
              </a>
              <button className="w-full text-center py-2 text-white bg-[#00b8ff] rounded-full hover:bg-[#0099ff] transition-colors">
                Connexion
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;