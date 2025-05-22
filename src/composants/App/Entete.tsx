import React, { useState } from 'react';
import { ShoppingCart, Globe, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface EnteteProps {
  // We're no longer using these props with React Router, but keeping them
  // for backward compatibility with existing code
  currentView?: string;
  handleNavigate?: (view: string) => void;
}

const Entete: React.FC<EnteteProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // NavLink classes for desktop navigation
  const getNavLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `text-white hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`;

  // NavLink classes for mobile navigation
  const getMobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-white hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-neutral-darker ${isActive ? 'text-primary bg-neutral-darker' : ''}`;

  return (
    <header className="sticky top-0 z-50 py-layout-md px-layout-lg bg-neutral-darker/90 backdrop-blur-md shadow-md">
      <div className="container">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center cursor-pointer" onClick={closeMobileMenu}>
            <img 
              src="/logo.svg" 
              alt="Logo PARKEEYZ" 
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/40x40/00b8ff/ffffff?text=P';
              }}
            />
          </NavLink>
          
          {/* Navigation de bureau */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/a-propos" 
              className={getNavLinkClasses}
            >
              Qui Sommes-Nous
            </NavLink>
            <NavLink 
              to="/tutorials" 
              className={getNavLinkClasses}
            >
              Tutoriels et Vidéos
            </NavLink>
            <NavLink 
              to="/boutique-forfaits" 
              className={getNavLinkClasses}
            >
              Boutique et Forfaits
            </NavLink>
            <NavLink 
              to="/contact" 
              className={getNavLinkClasses}
            >
              Contactez-Nous
            </NavLink>
          </nav>
          
          <div className="flex items-center space-x-6">
            {/* Future Implementation: Shopping Cart */}
            {/*
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-white" />
              <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs bg-primary rounded-full text-white">
                0
              </span>
            </div>
            */}

            {/* Future Implementation: Language Selector */}
            {/* <Globe className="h-6 w-6 text-white hidden sm:block" /> */}
            
            {/* Future Implementation: Login Button */}
            {/* 
            <button className="hidden sm:block btn-primary">
              Connexion
            </button>
            */}
            
            {/* Bouton du menu mobile */}
            <button 
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Menu de navigation mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-layout-md bg-neutral-dark rounded-lg p-layout-md absolute left-0 right-0 mx-layout-md z-50">
            <nav className="flex flex-col space-y-layout-sm">
              <NavLink 
                to="/" 
                className={getMobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Accueil
              </NavLink>
              <NavLink 
                to="/a-propos" 
                className={getMobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Qui Sommes-Nous
              </NavLink>
              <NavLink 
                to="/tutorials" 
                className={getMobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Tutoriels et Vidéos
              </NavLink>
              <NavLink 
                to="/boutique-forfaits" 
                className={getMobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Boutique & Forfaits
              </NavLink>
              <NavLink 
                to="/contact" 
                className={getMobileNavLinkClasses}
                onClick={closeMobileMenu}
              >
                Contactez-Nous
              </NavLink>
              {/* Future Implementation: Login Button Mobile */}
              {/* 
              <button className="w-full text-center btn-primary">
                Connexion
              </button>
              */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Entete; 