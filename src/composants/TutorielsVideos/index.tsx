import React from 'react';
import { Bluetooth, Users, History, Bell } from 'lucide-react';
import VideoCard from './VideoCard';
import SetupCard from './SetupCard';

const TutorielsVideos: React.FC = () => {
  return (
    <section>
      {/* Section Principale */}
      <div className="bg-neutral-darker relative overflow-hidden">
        <div className="container py-section-lg text-center relative">
          <h1 className="text-display-1 text-white mb-layout-lg">
            Apprendre, Débloquer, Contrôler.
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-body-large">
            Explorez nos tutoriels et vidéos étape par étape conçus pour vous aider à tirer le meilleur parti de vos 
            solutions de stationnement All Keeyz. Des guides d'installation aux fonctionnalités avancées, 
            nous avons tout ce qu'il vous faut.
          </p>
          
          <div className="mt-section-sm">
            <img 
              src="/tutorialsandvideoshero.svg" 
              alt="Tutoriels et Vidéos"
              className="w-full max-w-4xl mx-auto h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/1200x600/003366/e6f7ff?text=Tutoriels+et+Vidéos';
              }}
            />
          </div>
        </div>
      </div>

      {/* Guides de Configuration */}
      <div className="bg-white section">
        <div className="container">
          <div className="text-center mb-section-sm">
            <span className="inline-block px-6 py-2 mb-layout-md text-secondary bg-secondary-light rounded-btn text-sm font-medium">
              Premiers Pas
            </span>
            <h2 className="text-neutral mb-layout-md">
              Configuration de Votre Appareil
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-body-large">
              Regardez nos guides de configuration rapide pour installer et configurer vos produits All Keeyz sans problème.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-layout-lg">
            <SetupCard
              title="Configuration Bouncer Key"
              image="/tutorialsanvideos1.svg"
              buttonVariant="neutral-dark"
            />
            <SetupCard
              title="Configuration Entreprise"
              image="/tutorialsandvideo2.svg"
              buttonVariant="secondary"
            />
            <SetupCard
              title="Installation Terminal"
              image="/tutorialsandvideo3.svg"
              buttonVariant="neutral-dark"
            />
          </div>
        </div>
      </div>

      {/* Tutoriels Pratiques */}
      <div className="bg-neutral-light section">
        <div className="container">
          <div className="text-center mb-section-sm">
            <span className="inline-block px-8 py-2 mb-layout-md text-secondary bg-secondary-light rounded-btn text-lg font-medium">
              Tutoriels Pratiques
            </span>
            <h2 className="text-neutral mb-layout-md">
              Exploitez Tout le Potentiel de Parkeeyz
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-body-large">
              Guides étape par étape pour gérer vos appareils, utilisateurs et accès sans effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-layout-lg">
            <VideoCard
              title="Comment se Connecter via Bluetooth"
              icon={Bluetooth}
              description="Apprenez à déverrouiller votre place de stationnement avec un accès Bluetooth."
              buttonVariant="accent"
            />
            <VideoCard
              title="Gestion de Plusieurs Utilisateurs"
              icon={Users}
              description="Ajoutez et gérez des utilisateurs autorisés pour les installations de stationnement partagées."
              buttonVariant="neutral-dark"
            />
            <VideoCard
              title="Suivi de l'Historique d'Accès"
              icon={History}
              description="Suivez qui a accédé à votre espace de stationnement et quand."
              buttonVariant="accent"
            />
            <VideoCard
              title="Configuration des Notifications"
              icon={Bell}
              description="Restez informé avec des alertes en temps réel pour une gestion sécurisée du stationnement."
              buttonVariant="accent"
            />
          </div>
        </div>
      </div>

      {/* Section Restez Informé */}
      <div className="bg-neutral-light section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-display-2 text-neutral mb-layout-lg">
              Restez Informé
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-body-large">
              Nous mettons régulièrement à jour cette page avec de nouveaux tutoriels, conseils et 
              aperçus de fonctionnalités pour vous aider à tirer le meilleur parti de votre 
              expérience All Keeyz.
            </p>
            <div className="mt-layout-xl flex justify-center">
              <div className="flex max-w-md w-full">
                <input 
                  type="email" 
                  placeholder="Entrez votre email" 
                  className="input flex-grow rounded-r-none"
                />
                <button className="btn-secondary rounded-l-none">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Besoin d'Aide Supplémentaire */}
      <div className="bg-white section">
        <div className="container">
          <div className="text-center">
            <h2 className="text-display-2 text-neutral mb-section-sm">
              Besoin d'aide supplémentaire?
            </h2>
            <div className="flex justify-center gap-layout-md">
              <button className="btn-secondary btn-lg">
                Centre d'Assistance
              </button>
              <button className="btn-outline btn-lg border-secondary text-secondary hover:bg-secondary-light">
                Contactez-Nous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Prêt à Maîtriser */}
      <div className="bg-neutral-light section">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-display-2 text-neutral mb-layout-lg">
              Prêt à maîtriser votre solution d'accès?
            </h2>
            <p className="text-xl text-gray-600 mb-layout-xl leading-relaxed text-body-large">
              Conçu pour offrir une sécurité et une gestion optimales,<br />
              Bouncer Key redéfinit les standards du stationnement.<br />
              Faites le choix de l'excellence avec la référence<br />
              incontournable du marché.
            </p>
            <div className="flex items-center justify-center">
              <button className="btn-outline btn-lg border-secondary text-secondary hover:bg-secondary-light rounded-btn">
                Choisir un Forfait
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorielsVideos; 