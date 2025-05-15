import React from 'react';
import { Check } from 'lucide-react';

interface FeatureRowProps {
  feature: string;
  values: (string | boolean)[];
  isEven: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ feature, values, isEven }) => (
  <tr className={`${isEven ? 'bg-[#f5f8ff]' : 'bg-white'} transition-colors hover:bg-[#e8f0ff]`}>
    <td className="py-4 px-2 md:px-6 text-xs md:text-sm text-[#003366]">{feature}</td>
    {values.map((value, index) => (
      <td key={index} className="py-4 px-1 md:px-6 text-center">
        {typeof value === 'boolean' ? (
          value ? <Check className="w-4 h-4 md:w-5 md:h-5 text-[#1A73E8] mx-auto" /> : null
        ) : (
          <span className="text-xs md:text-sm text-[#003366]/80">{value}</span>
        )}
      </td>
    ))}
  </tr>
);

export default FeatureRow;