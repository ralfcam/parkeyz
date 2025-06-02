import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const AppelActionContact: React.FC = () => {
  return (
    <section className="section bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-layout-lg">
            <MessageCircle className="w-16 h-16 mx-auto mb-layout-md opacity-90" />
            <h2 className="text-display-2 mb-layout-md">
              Des questions ? Nous sommes là pour vous aider.
            </h2>
            <p className="text-heading-3 opacity-90 mb-layout-xl">
              Notre équipe jeune et passionnée est disponible pour répondre à toutes vos questions 
              sur Lockeeyz et vous accompagner dans votre projet.
            </p>
          </div>
          
          <Link 
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 text-lg font-semibold shadow-lg"
          >
            Contactez-Nous
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppelActionContact; 