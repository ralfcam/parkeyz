import React from 'react';
import { Outlet, useLocation, useNavigate, ScrollRestoration } from 'react-router-dom';
import Entete from './Entete';
import PiedDePage from '../PiedDePage';
import ScrollToHashElement from '../ScrollToHashElement';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Compatibility layer for components still using the old navigation pattern
  const handleNavigate = (view: string) => {
    // Map the old view names to the new URL paths
    const viewToPathMap: Record<string, string> = {
      'home': '/',
      'a-propos': '/a-propos',
      'contact': '/contact',
      'tutorials': '/tutorials',
      'boutique-forfaits': '/boutique-forfaits',
      'pricing': '/boutique-forfaits',
      'shop': '/boutique-forfaits',
      'terms': '/terms',
      'privacy': '/privacy',
      'product-detail': '/boutique-forfaits/product/1',
      'shipping': '/checkout/shipping',
      'payment': '/checkout/payment',
      'faq': '/#faq' // Anchor link to FAQ section on home page
    };
    
    const path = viewToPathMap[view] || '/';
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Extract the current view from the location path
  const getCurrentView = () => {
    const path = location.pathname.slice(1) || 'home';
    return path;
  };

  return (
    <div className="min-h-screen bg-neutral-darker">
      <Entete currentView={getCurrentView()} handleNavigate={handleNavigate} />
      <main>
        <Outlet />
      </main>
      <PiedDePage onNavigate={handleNavigate} />
      {/* ScrollRestoration ensures scroll position is preserved when navigating */}
      <ScrollRestoration />
      {/* Custom component to handle hash links */}
      <ScrollToHashElement />
    </div>
  );
}

export default App; 