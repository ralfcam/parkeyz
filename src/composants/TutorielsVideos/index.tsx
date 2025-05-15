import React from 'react';
import { Bluetooth, Users, History, Bell } from 'lucide-react';
import VideoCard from './VideoCard';
import SetupCard from './SetupCard';

const TutorielsVideos: React.FC = () => {
  return (
    <section className="min-h-screen">
      {/* Section Principale */}
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
                target.src = 'https://placehold.co/1200x600/003366/e6f7ff?text=Tutoriels+et+Vidéos';
              }}
            />
          </div>
        </div>
      </div>

      {/* Guides de Configuration */}
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
            <SetupCard
              title="Configuration Bouncer Key"
              image="/tutorialsanvideos1.svg"
              buttonVariant="dark"
            />
            <SetupCard
              title="Configuration Entreprise"
              image="/tutorialsandvideo2.svg"
              buttonVariant="primary"
            />
            <SetupCard
              title="Installation Terminal"
              image="/tutorialsandvideo3.svg"
              buttonVariant="dark"
            />
          </div>
        </div>
      </div>

      {/* Tutoriels Pratiques */}
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

      {/* Section Restez Informé */}
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

      {/* Section Besoin d'Aide Supplémentaire */}
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

      {/* Section Prêt à Maîtriser */}
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

export default TutorielsVideos; 