export const features = [
  { name: 'Ouverture & fermeture', values: [true, true, true] },
  { name: 'Partage utilisateur', values: ['1 utilisateur', 'Illimité', 'Illimité'] },
  { name: 'Support', values: ['Email', 'Email & Téléphone', 'Support dédié'] },
  { name: 'Mise en location in-app', values: [false, true, true] },
  { name: 'Paiements sécurisés', values: [false, true, true] },
  { name: 'Multi-sites', values: [false, false, true] },
  { name: 'API & reporting', values: [false, false, true] },
  { name: 'Tableau de bord avancé', values: [false, true, true] },
  { name: 'Gestion des réservations', values: [false, true, true] },
  { name: 'Historique complet', values: [false, true, true] },
  { name: 'Notifications en temps réel', values: [true, true, true] },
  { name: 'Application mobile', values: [true, true, true] },
  { name: 'Contrôle à distance', values: [true, true, true] }
];

export const plans = [
  {
    name: "Basic keeyz / Clé Privée",
    price: "0",
    period: "/mois",
    description: "Parfait pour un usage personnel simple et sécurisé de votre place de parking.",
    buttonVariant: "outline" as const,
    buttonText: "Gratuit",
    popular: false,
    features: [
      "Ouverture & fermeture",
      "Partage 1 utilisateur", 
      "Support email",
      "Application mobile",
      "Contrôle à distance"
    ]
  },
  {
    name: "Golden Keeyz",
    price: "9,90",
    period: " € TTC/mois",
    description: "La solution complète pour rentabiliser votre place et gérer plusieurs utilisateurs.",
    buttonVariant: "primary" as const,
    buttonText: "Choisir Golden",
    popular: true,
    features: [
      "Toutes les fonctionnalités Basic",
      "Partage illimité",
      "Mise en location in-app",
      "Paiements sécurisés",
      "Tableau de bord avancé",
      "Support téléphone",
      "Gestion des réservations"
    ]
  },
  {
    name: "Business keeyz",
    price: "Sur devis",
    period: "",
    description: "Solution sur mesure pour hôtels, entreprises et gestionnaires de parcs de stationnement.",
    buttonVariant: "secondary" as const,
    buttonText: "Demander un devis",
    popular: false,
    features: [
      "Toutes les fonctionnalités Golden",
      "Multi-sites",
      "API & reporting avancé",
      "Support dédié",
      "Intégration personnalisée",
      "Formation équipe",
      "SLA garanti"
    ]
  }
]; 