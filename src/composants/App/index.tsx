import React, { useState } from 'react';
import { ShoppingCart, Globe } from 'lucide-react';
import Entete from './Entete';
import ContenuPrincipal from './ContenuPrincipal';
import PiedDePage from '../PiedDePage';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-neutral-darker">
      <Entete currentView={currentView} handleNavigate={handleNavigate} />
      <ContenuPrincipal currentView={currentView} handleNavigate={handleNavigate} />
      <PiedDePage onNavigate={handleNavigate} />
    </div>
  );
}

export default App; 