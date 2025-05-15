export const features = [
  { name: 'Verrouillage Illimité', values: [true, true, true, true] },
  { name: 'Partage', values: ['1 Personne', '2 Personnes', '3 Personnes', '5 Personnes'] },
  { name: 'Historique des Rapports', values: ['1 Semaine', '2 Semaines', '3 Semaines', '4 Semaines'] },
  { name: 'Information Batterie', values: [true, true, true, true] },
  { name: 'Verrouillage Automatique', values: [true, true, true, true] },
  { name: 'Information Personnel', values: [true, true, true, true] },
  { name: 'Alarme', values: [true, true, true, true] },
  { name: 'Renommer le Casier', values: [true, true, true, true] },
  { name: 'Utilisation Web App', values: [false, true, true, true] },
  { name: 'Bouncer Key', values: ['', '4G', '4G', '4G'] },
  { name: 'Logo Personnalisé', values: [false, false, true, true] },
  { name: 'Location de Place', values: [false, false, true, true] },
  { name: 'Tableau de Bord VIP', values: [false, false, true, true] },
  { name: 'Gestion de Calendrier', values: [false, false, true, true] },
  { name: 'Gérer les Réservations', values: [false, false, true, true] },
  { name: 'Portefeuille', values: [false, false, true, true] },
  { name: 'Licence Pour', values: [false, false, true, true] },
  { name: 'Intégration API', values: [false, false, false, true] },
  { name: 'Intégration Design', values: [false, false, false, true] }
];

export const plans = [
  {
    name: "Keeyz Basique",
    price: "33",
    description: "Accès sécurisé pour 1 place de stationnement.",
    buttonVariant: "light" as const
  },
  {
    name: "Keeyz Standard",
    price: "55",
    description: "Contrôle multi-espaces, notifications en temps réel.",
    buttonVariant: "primary" as const
  },
  {
    name: "Keeyz Or",
    price: "99",
    description: "Suite complète: Gestion d'accès illimitée + support premium.",
    buttonVariant: "dark" as const
  }
];