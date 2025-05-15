import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  number: number;
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ number, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f5f8ff] rounded-lg overflow-hidden mb-4 hover:bg-[#e8f0ff] transition-colors">
      <button
        className="w-full px-4 md:px-8 py-4 md:py-6 flex items-start md:items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-xl font-semibold text-[#1A73E8] mr-3 md:mr-12 whitespace-nowrap mt-1 md:mt-0">Q{' '}<span className="hidden md:inline">No</span> {number}</span>
        <span className="text-lg md:text-2xl font-medium text-[#003366] flex-grow pr-2">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-[#1A73E8] flex-shrink-0 mt-1 md:mt-0" />
        ) : (
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-[#1A73E8] flex-shrink-0 mt-1 md:mt-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 md:px-8 pb-6 pt-2">
          <p className="text-[#003366]/80 text-base md:text-lg ml-0 md:ml-28">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems: FAQItemProps[] = [
    {
      number: 1,
      question: "Comment configurer Smart Locker?",
      answer: "La configuration de Smart Locker est simple. Notre équipe d'installation vous guidera tout au long du processus, qui prend généralement moins d'une heure. Le système est préconfiguré et prêt à l'emploi."
    },
    {
      number: 2,
      question: "Combien de temps durera ma batterie?",
      answer: "Notre système Smart Locker utilise des batteries haute capacité qui durent jusqu'à 12 mois avec une utilisation normale. Vous recevrez des notifications lorsqu'il sera temps de remplacer les batteries."
    },
    {
      number: 3,
      question: "Smart Locker est-il compatible avec mon espace de stationnement?",
      answer: "Smart Locker est conçu pour fonctionner avec la plupart des espaces de stationnement standard. Notre équipe évaluera votre espace et fournira des solutions d'installation personnalisées si nécessaire."
    },
    {
      number: 4,
      question: "Que se passe-t-il si je perds mon smartphone?",
      answer: "Ne vous inquiétez pas! Votre compte peut être accessible depuis n'importe quel appareil. Connectez-vous simplement à votre compte depuis un nouvel appareil, et vos identifiants d'accès seront automatiquement transférés."
    },
    {
      number: 5,
      question: "Y a-t-il un système de secours en cas de panne de courant?",
      answer: "Oui, notre système Smart Locker est équipé d'une batterie de secours qui assure un fonctionnement continu même pendant les coupures de courant. Le système peut fonctionner jusqu'à 72 heures sur l'alimentation de secours."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-[#003366] mb-8 md:mb-12">
          FAQ
        </h2>
        <div>
          {faqItems.map((item) => (
            <FAQItem key={item.number} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 