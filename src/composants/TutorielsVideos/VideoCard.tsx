import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  icon?: React.ElementType;
  description: string;
  buttonVariant?: 'secondary' | 'neutral-dark' | 'accent';
  imageSrc?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ 
  title, 
  icon: Icon, 
  description, 
  buttonVariant = 'secondary',
  imageSrc 
}) => {
  const buttonClasses = {
    secondary: 'btn-secondary',
    'neutral-dark': 'btn-primary bg-neutral-dark hover:bg-neutral-darker',
    accent: 'btn-primary bg-accent hover:bg-accent-dark',
  };

  return (
    <div className="card flex flex-col p-layout-lg">
      <div className="mb-layout-md flex justify-center">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={title}
            className="w-24 h-24 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/96x96/primary-light/neutral-dark?text=Icon';
            }}
          />
        ) : Icon ? (
          <Icon className="w-12 h-12 text-secondary" />
        ) : null}
      </div>
      <h3 className="text-center mb-layout-sm">{title}</h3>
      <p className="text-gray-600 mb-layout-md text-center flex-grow text-body">{description}</p>
      <button 
        className={`w-full ${buttonClasses[buttonVariant]} flex items-center justify-center gap-2 mt-auto`}
      >
        Regarder Maintenant
        <Play className="w-4 h-4" />
      </button>
    </div>
  );
};

export default VideoCard; 