import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      className="w-full py-layout-lg px-layout-sm flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      onClick={onToggle}
    >
      <h3 className="text-heading-3 text-neutral-dark pr-layout-sm">{question}</h3>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="px-layout-sm pb-layout-lg">
        <p className="text-body text-neutral-dark opacity-80 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Comment configurer Lockeeyz ?",
      answer: "La configuration de Lockeeyz est extrêmement simple. Après l'installation physique qui prend 15 minutes, téléchargez l'application mobile, créez votre compte et suivez le guide de configuration pas à pas. L'application détectera automatiquement votre Lockeeyz via Bluetooth et vous guidera à travers les étapes de paramétrage."
    },
    {
      question: "Combien de temps dure la batterie ?",
      answer: "La batterie de Lockeeyz offre une autonomie exceptionnelle de 5 mois en utilisation normale. Vous recevrez des notifications sur votre application lorsque le niveau de batterie devient faible. La recharge se fait simplement via USB-C, et une option de panneau solaire est disponible pour une autonomie encore plus longue."
    },
    {
      question: "Lockeeyz est-il compatible avec mon emplacement ?",
      answer: "Lockeeyz est conçu pour s'adapter à la grande majorité des places de parking, qu'elles soient en intérieur ou en extérieur. La barrière est étanche (IP65) et résiste à toutes les conditions météorologiques. Pour vérifier la compatibilité avec votre emplacement spécifique, consultez notre guide de compatibilité ou contactez notre support."
    },
    {
      question: "Que se passe-t-il si je perds mon smartphone ?",
      answer: "Pas de panique ! Vous pouvez accéder à votre compte Lockeeyz depuis n'importe quel appareil via notre application web. Il vous suffit de vous connecter avec vos identifiants pour gérer votre barrière. De plus, vous pouvez partager l'accès avec des proches de confiance qui pourront vous dépanner en cas de besoin."
    },
    {
      question: "Y a-t-il un secours en cas de panne de courant ?",
      answer: "Lockeeyz fonctionne sur batterie et n'est donc pas affecté par les coupures de courant. En cas de défaillance technique rare, un système de déverrouillage manuel sécurisé est intégré. Vous recevrez également une clé physique de secours lors de l'installation pour garantir l'accès en toute circonstance."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-section-sm">
            <span className="inline-block px-6 py-2 mb-layout-md text-primary bg-primary-light rounded-btn text-sm font-medium">
              Questions Fréquentes
            </span>
            <h2 className="text-display-2 text-neutral-dark mb-layout-sm">
              Tout ce que vous devez savoir
            </h2>
            <p className="text-heading-3 text-neutral-dark opacity-80 max-w-2xl mx-auto">
              Trouvez rapidement les réponses à vos questions sur Lockeeyz
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-layout-lg">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 