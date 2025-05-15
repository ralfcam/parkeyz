import React from 'react';
import { Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedIn, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all">
    <div className="relative mb-6 group">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=003366&color=fff&size=400`;
        }}
      />
      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Linkedin className="w-5 h-5 text-[#0077b5]" />
        </a>
      )}
    </div>
    <h3 className="text-xl font-bold text-[#1A1A1A] mb-1">{name}</h3>
    <p className="text-[#00b8ff] font-medium mb-4">{role}</p>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TeamSection: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Sophie Martin",
      role: "Fondatrice & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedIn: "https://linkedin.com",
      description: "Passionnée par l'innovation et l'entrepreneuriat, Sophie a fondé Parkeeyz avec la vision de révolutionner l'accès au stationnement urbain."
    },
    {
      name: "Thomas Dubois",
      role: "Directeur Technique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedIn: "https://linkedin.com",
      description: "Expert en IoT et systèmes embarqués, Thomas dirige le développement technique de nos solutions innovantes de stationnement."
    },
    {
      name: "Marie Laurent",
      role: "Responsable Design",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedIn: "https://linkedin.com",
      description: "Avec son œil aiguisé pour le design, Marie crée des interfaces utilisateur intuitives qui rendent nos produits accessibles à tous."
    },
    {
      name: "Lucas Bernard",
      role: "Directeur Commercial",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      linkedIn: "https://linkedin.com",
      description: "Fort de 10 ans d'expérience dans les solutions B2B, Lucas développe nos partenariats stratégiques et relations clients."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-[#e6f7ff] text-[#00b8ff] rounded-full text-sm font-medium mb-4">
            Notre Équipe
          </span>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            Les Visages Derrière l'Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe passionnée qui travaille chaque jour pour révolutionner
            l'expérience du stationnement et créer un avenir plus intelligent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 