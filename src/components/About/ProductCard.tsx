import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  isActive?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  price, 
  image, 
  isActive = false 
}) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex justify-center mb-8">
      <img src={image} alt={title} className="w-48 h-48 object-contain" />
    </div>
    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">{title}</h3>
    <p className="text-gray-600 mb-4 h-16">{description}</p>
    <div className="flex items-center justify-between mb-6">
      <span className="text-4xl font-bold text-[#00b8ff]">{price}</span>
    </div>
    <div className="flex gap-4">
      <button 
        className={`flex-grow py-3 rounded-lg font-medium transition-colors ${
          isActive 
            ? 'bg-[#1A1A1A] text-white hover:bg-[#333]' 
            : 'bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-gray-50'
        }`}
      >
        Voir Détails
      </button>
      <button className="w-12 h-12 flex items-center justify-center bg-[#00b8ff] text-white rounded-lg hover:bg-[#0099ff] transition-colors">
        <ShoppingCart className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default ProductCard;