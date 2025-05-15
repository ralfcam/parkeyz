import React from 'react';
import { Play, MousePointer, Bluetooth, Users, History, Bell } from 'lucide-react';

interface VideoCardProps {
  title: string;
  icon?: React.ElementType;
  description: string;
  buttonVariant?: 'primary' | 'dark' | 'light';
  imageSrc?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  icon: Icon, 
  description, 
  buttonVariant = 'primary',
  imageSrc 
}) => {
  const buttonStyles = {
    primary: 'bg-[#1A73E8] hover:bg-[#1557b0] text-white',
    dark: 'bg-[#003366] hover:bg-[#002347] text-white',
    light: 'bg-[#00D2FF] hover:bg-[#00bfe6] text-white'
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
      <div className="mb-6 flex justify-center">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title}
            className="w-24 h-24 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/96x96/e6f7ff/003366?text=Icon';
            }}
          />
        ) : Icon ? (
          <Icon className="w-12 h-12 text-[#1A73E8]" />
        ) : null}
      </div>
      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 min-h-[60px] text-center">{description}</p>
      <button 
        className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${buttonStyles[buttonVariant]}`}
      >
        Regarder Maintenant
        <Play className="w-4 h-4" />
      </button>
    </div>
  );
};

const BouncerSetupCard: React.FC = () => {
  return (
    <div className="bg-[#e6f7ff] rounded-2xl overflow-hidden border-2 border-[#e6f7ff] hover:shadow-lg transition-all">
      <div className="flex flex-col items-center p-8">
        <img 
          src="/tutorialsanvideos1.svg" 
          alt="Configuration Bouncer Key"
          className="w-32 h-32 object-contain mb-6"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/128x128/003366/e6f7ff?text=Bouncer+Key';
          }}
        />
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Configuration Bouncer Key</h3>
        <button className="w-full py-4 bg-[#1A1A1A] text-white rounded-lg font-medium hover:bg-[#333] transition-colors flex items-center justify-center gap-2">
          Regarder la Vidéo
        </button>
      </div>
    </div>
  );
};

const EnterpriseConfigCard: React.FC = () => {
  return (
    <div className="bg-[#e6f7ff] rounded-2xl overflow-hidden border-2 border-[#e6f7ff] hover:shadow-lg transition-all">
      <div className="flex flex-col items-center p-8">
        <img 
          src="/tutorialsandvideo2.svg" 
          alt="Configuration Entreprise"
          className="w-32 h-32 object-contain mb-6"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/128x128/003366/e6f7ff?text=Enterprise';
          }}
        />
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Configuration Entreprise</h3>
        <button className="w-full py-4 bg-[#1A73E8] text-white rounded-lg font-medium hover:bg-[#1557b0] transition-colors flex items-center justify-center gap-2">
          Regarder la Vidéo
        </button>
      </div>
    </div>
  );
};

const TerminalInstallationCard: React.FC = () => {
  return (
    <div className="bg-[#e6f7ff] rounded-2xl overflow-hidden border-2 border-[#e6f7ff] hover:shadow-lg transition-all">
      <div className="flex flex-col items-center p-8">
        <img 
          src="/tutorialsandvideo3.svg" 
          alt="Installation Terminal"
          className="w-32 h-32 object-contain mb-6"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://placehold.co/128x128/003366/e6f7ff?text=Terminal';
          }}
        />
        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">Installation Terminal</h3>
        <button className="w-full py-4 bg-[#002347] text-white rounded-lg font-medium hover:bg-[#001a33] transition-colors flex items-center justify-center gap-2">
          Regarder la Vidéo
        </button>
      </div>
    </div>
  );
};

const TutorialsAndVideos: React.FC = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#00264d] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-32 text-center relative">
          <h1 className="text-6xl font-bold text-white mb-8">
            Apprendre, Débloquer, Contrôler.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Explorez nos tutoriels et vidéos étape par étape conçus pour vous aider à tirer le meilleur parti de vos 
            solutions de stationnement All Keeyz. Des guides d'installation aux fonctionnalités avancées, 
            nous avons tout ce qu'il vous faut.
          </p>
          
          <div className="mt-16">
            <img 
              src="/tutorialsandvideoshero.svg" 
              alt="Tutoriels et Vidéos"
              className="w-full max-w-4xl mx-auto h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/1200x600/003366/e6f7ff?text=Tutorials+and+Videos';
              }}
            />
          </div>
        </div>
      </div>

      {/* Setup Guides Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 mb-6 text-[#1A73E8] bg-[#e6f7ff] rounded-full text-sm font-medium">
              Premiers Pas
            </span>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
              Configuration de Votre Appareil
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Regardez nos guides de configuration rapide pour installer et configurer vos produits All Keeyz sans problème.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BouncerSetupCard />
            <EnterpriseConfigCard />
            <TerminalInstallationCard />
          </div>
        </div>
      </div>

      {/* How-To Tutorials Section */}
      <div className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-8 py-2 mb-6 text-[#1A73E8] bg-[#e6f7ff] rounded-full text-lg font-medium">
              Tutoriels Pratiques
            </span>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
              Exploitez Tout le Potentiel de Parkeeyz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guides étape par étape pour gérer vos appareils, utilisateurs et accès sans effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <VideoCard
              title="Comment se Connecter via Bluetooth"
              icon={Bluetooth}
              description="Apprenez à déverrouiller votre place de stationnement avec un accès Bluetooth."
              buttonVariant="light"
            />
            <VideoCard
              title="Gestion de Plusieurs Utilisateurs"
              icon={Users}
              description="Ajoutez et gérez des utilisateurs autorisés pour les installations de stationnement partagées."
              buttonVariant="dark"
            />
            <VideoCard
              title="Suivi de l'Historique d'Accès"
              icon={History}
              description="Suivez qui a accédé à votre espace de stationnement et quand."
              buttonVariant="light"
            />
            <VideoCard
              title="Configuration des Notifications"
              icon={Bell}
              description="Restez informé avec des alertes en temps réel pour une gestion sécurisée du stationnement."
              buttonVariant="light"
            />
          </div>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="bg-[#f8fafc] py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
              Restez Informé
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nous mettons régulièrement à jour cette page avec de nouveaux tutoriels, conseils et 
              aperçus de fonctionnalités pour vous aider à tirer le meilleur parti de votre 
              expérience All Keeyz.
            </p>
            <div className="mt-12 flex justify-center">
              <div className="flex max-w-md w-full">
                <input 
                  type="email" 
                  placeholder="Entrez votre email" 
                  className="flex-grow px-6 py-4 rounded-l-lg border-2 border-[#1A73E8] focus:outline-none focus:ring-2 focus:ring-[#1A73E8]"
                />
                <button className="px-6 py-4 bg-[#1A73E8] text-white rounded-r-lg font-medium hover:bg-[#1557b0] transition-colors">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need More Help Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-16">
              Besoin d'aide supplémentaire?
            </h2>
            <div className="flex justify-center gap-6">
              <button className="px-12 py-4 bg-[#1A73E8] text-white rounded-lg text-xl font-medium hover:bg-[#1557b0] transition-colors">
                Centre d'Assistance
              </button>
              <button className="px-12 py-4 text-[#1A73E8] border-2 border-[#1A73E8] rounded-lg text-xl font-medium hover:bg-[#f5f8ff] transition-colors">
                Contactez-Nous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Master Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">
              Prêt à maîtriser votre solution d'accès?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Conçu pour offrir une sécurité et une gestion optimales,<br />
              Bouncer Key redéfinit les standards du stationnement.<br />
              Faites le choix de l'excellence avec la référence<br />
              incontournable du marché.
            </p>
            <div className="flex items-center justify-center">
              <button className="px-8 py-4 text-[#1A73E8] border-2 border-[#1A73E8] rounded-full text-lg font-medium hover:bg-blue-50 transition-colors">
                Choisir un Forfait
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialsAndVideos;