import React from 'react';
import { Play } from 'lucide-react';

interface SetupCardProps {
  title: string;
  image: string;
  buttonVariant?: 'secondary' | 'neutral-dark' | 'accent';
}

const SetupCard: React.FC<SetupCardProps> = ({ title, image, buttonVariant = 'secondary' }) => {
  const buttonClasses = {
    secondary: 'btn-secondary',
    'neutral-dark': 'btn-primary bg-neutral-dark hover:bg-neutral-darker',
    accent: 'btn-primary bg-accent hover:bg-accent-dark',
  };

  return (
    <div className="card-featured flex flex-col p-layout-lg">
      <div className="flex-grow flex flex-col items-center">
        <div className="w-32 h-32 flex items-center justify-center mb-layout-md">
          <img 
            src={image.replace('.svg', '.webp').replace('/public', '')} 
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/128x128/neutral-dark/primary-light?text=Configuration';
            }}
          />
        </div>
        <h3 className="text-center mb-layout-md">{title}</h3>
      </div>
      <button className={`w-full ${buttonClasses[buttonVariant]} flex items-center justify-center gap-2`}>
        Regarder Maintenant
        <Play className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SetupCard; 