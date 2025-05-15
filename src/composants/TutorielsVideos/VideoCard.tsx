import React from 'react';
import { Play } from 'lucide-react';

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
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col">
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
      <p className="text-gray-600 mb-6 text-center flex-grow">{description}</p>
      <button 
        className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 mt-auto ${buttonStyles[buttonVariant]}`}
      >
        Regarder Maintenant
        <Play className="w-4 h-4" />
      </button>
    </div>
  );
};

export default VideoCard; 