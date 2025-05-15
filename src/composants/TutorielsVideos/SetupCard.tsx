import React from 'react';
import { Play } from 'lucide-react';

interface SetupCardProps {
  title: string;
  image: string;
  buttonVariant?: 'primary' | 'dark' | 'light';
}

const SetupCard: React.FC<SetupCardProps> = ({ title, image, buttonVariant = 'primary' }) => {
  const buttonStyles = {
    primary: 'bg-[#1A73E8] hover:bg-[#1557b0]',
    dark: 'bg-[#1A1A1A] hover:bg-[#333]',
    light: 'bg-[#00D2FF] hover:bg-[#00bfe6]'
  };

  return (
    <div className="bg-[#e6f7ff] rounded-2xl overflow-hidden border-2 border-[#e6f7ff] hover:shadow-lg transition-all h-full">
      <div className="flex flex-col h-full p-8">
        <div className="flex-grow flex flex-col items-center">
          <div className="w-32 h-32 flex items-center justify-center mb-6">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/128x128/003366/e6f7ff?text=Configuration'; // Translated placeholder
              }}
            />
          </div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">{title}</h3>
        </div>
        <button className={`w-full py-4 ${buttonStyles[buttonVariant]} text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2`}>
          Regarder Maintenant
          <Play className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SetupCard; 