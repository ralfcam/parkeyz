import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TemoignageProps {
  contenu: string;
  auteur: string;
  ville: string;
  note?: number;
}

const TemoignageCard: React.FC<TemoignageProps> = ({ contenu, auteur, ville, note = 5 }) => (
  <div className="bg-white p-layout-xl rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="flex items-center gap-2 mb-layout-md">
      {[...Array(note)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <div className="mb-layout-lg">
      <Quote className="w-8 h-8 text-primary opacity-30 mb-layout-sm" />
      <p className="text-body-large text-neutral-dark leading-relaxed italic">
        "{contenu}"
      </p>
    </div>
    <div className="border-t border-gray-100 pt-layout-md">
      <p className="text-body font-semibold text-neutral-dark">{auteur}</p>
      <p className="text-body text-neutral-dark opacity-60">{ville}</p>
    </div>
  </div>
);

const Temoignages: React.FC = () => {
  const temoignages: TemoignageProps[] = [
    {
      contenu: "Depuis que j'ai installé Lockeeyz, je ne m'inquiète plus de trouver ma place occupée. Et quand je pars en vacances, elle me rapporte plus de 200€ par mois. L'investissement a été rentabilisé en moins de deux mois !",
      auteur: "Sophie M.",
      ville: "Annecy 74"
    },
    {
      contenu: "Installation ultra simple, application intuitive et un service client au top. Je recommande à tous les propriétaires de places qui en ont marre des voitures ventouses !",
      auteur: "Thomas L.",
      ville: "Lyon"
    },
    {
      contenu: "En tant que représentant du syndic, j'ai équipé toute la résidence. Les voisins sont ravis et la gestion des places visiteurs est devenue un jeu d'enfant.",
      auteur: "Bernard D.",
      ville: "Syndic de copropriété Annemasse 74"
    }
  ];

  return (
    <section className="section bg-neutral-light">
      <div className="container">
        <div className="text-center mb-section-md">
          <span className="inline-block px-6 py-2 bg-primary-light text-primary rounded-btn text-sm font-medium mb-layout-sm">
            Témoignages
          </span>
          <h2 className="text-display-2 text-neutral-dark mb-layout-sm">
            Ils ont choisi Lockeeyz
          </h2>
          <p className="text-heading-3 text-neutral-dark opacity-80 max-w-3xl mx-auto">
            Découvrez l'expérience de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-layout-lg">
          {temoignages.map((temoignage, index) => (
            <TemoignageCard key={index} {...temoignage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Temoignages; 