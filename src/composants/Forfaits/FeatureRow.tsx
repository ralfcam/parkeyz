import React from 'react';
import { Check } from 'lucide-react';

interface FeatureRowProps {
  feature: string;
  values: (string | boolean)[];
  isEven: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ feature, values, isEven }) => (
  <tr className={`${isEven ? 'bg-secondary-light' : 'bg-white'} transition-colors hover:bg-primary-light`}>
    <td className="py-layout-sm px-layout-xs md:px-layout-md text-small md:text-body text-neutral-dark font-medium">{feature}</td>
    {values.map((value, index) => (
      <td key={index} className="py-layout-sm px-layout-xs md:px-layout-md text-center">
        {typeof value === 'boolean' ? (
          value ? <Check className="w-4 h-4 md:w-5 md:h-5 text-secondary mx-auto" /> : <span className="text-gray-400">-</span>
        ) : (
          <span className="text-small md:text-body text-neutral opacity-80">{value || '-'}</span>
        )}
      </td>
    ))}
  </tr>
);

export default FeatureRow; 