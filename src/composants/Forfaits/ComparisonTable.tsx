import React from 'react';
import FeatureRow from './FeatureRow';
import { features } from './pricingData';

const ComparisonTable: React.FC = () => (
  <div className="card-featured overflow-hidden mb-section-sm p-0">
    <div className="p-layout-lg flex items-center justify-center gap-layout-sm border-b border-gray-100">
      <img src="/featurecomparisontable.svg" alt="Tableau de Comparaison des Fonctionnalités" className="w-10 h-10" />
      <h3 className="text-neutral-dark">Tableau de Comparaison des Fonctionnalités</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-body">
        <thead>
          <tr className="bg-neutral-dark text-white">
            <th className="py-layout-sm px-layout-md text-left font-semibold">Fonctionnalité</th>
            <th className="py-layout-sm px-layout-md text-center font-semibold">Keeyz Basique</th>
            <th className="py-layout-sm px-layout-md text-center font-semibold">Keeyz Standard</th>
            <th className="py-layout-sm px-layout-md text-center font-semibold">Keeyz Or</th>
            <th className="py-layout-sm px-layout-md text-center bg-secondary text-white font-semibold">Entreprise</th>
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