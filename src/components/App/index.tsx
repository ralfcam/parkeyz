import React, { useState } from 'react';
import { ShoppingCart, Globe } from 'lucide-react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from '../Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#00264d]">
      <Header currentView={currentView} handleNavigate={handleNavigate} />
      <MainContent currentView={currentView} handleNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;