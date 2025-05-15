import React from 'react';
import FeatureRow from './FeatureRow';
import { features } from './pricingData';

const ComparisonTable: React.FC = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
    <div className="p-8 flex items-center justify-center gap-4 border-b border-gray-100">
      <img src="/featurecomparisontable.svg" alt="Tableau de Comparaison des Fonctionnalités" className="w-10 h-10" />
      <h3 className="text-2xl font-bold text-[#003366]">Tableau de Comparaison des Fonctionnalités</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-4 px-6 text-left bg-[#003366] text-white">Fonctionnalité</th>
            <th className="py-4 px-6 text-center bg-[#003366] text-white">Keeyz Basique</th>
            <th className="py-4 px-6 text-center bg-[#003366] text-white">Keeyz Standard</th>
            <th className="py-4 px-6 text-center bg-[#003366] text-white">Keeyz Or</th>
            <th className="py-4 px-6 text-center bg-[#1A73E8] text-white">Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <FeatureRow
              key={index}
              feature={feature.name}
              values={feature.values}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ComparisonTable; 