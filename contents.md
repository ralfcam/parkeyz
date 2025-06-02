# Parkeeyz - Index des Contenus du Site

## 📑 Table des Matières
- [Structure Générale](#structure-générale)
- [Page d'Accueil](#page-daccueil)
- [Page Produit Lockeeyz](#page-produit-lockeeyz)
- [Page À Propos](#page-à-propos)
- [Page Contact](#page-contact)
- [Page Boutique & Forfaits](#page-boutique--forfaits)
- [Forfaits & Tarifs](#forfaits--tarifs)
- [FAQ](#faq)
- [Composants Réutilisables](#composants-réutilisables)

---

## 🏗️ Structure Générale

### En-tête (Header)
**Fichier**: `src/composants/App/Entete.tsx`

```
Logo: PARKEEYZ
Navigation principale:
- "Qui Sommes-Nous" → /a-propos
- "Tutoriels et Vidéos" → /tutorials
- "Boutique et Forfaits" → /boutique-forfaits
- "Contactez-Nous" → /contact

Navigation mobile (menu burger):
- "Accueil" → /
- [Mêmes liens que navigation principale]
```

### Pied de Page (Footer)
**Fichier**: `src/composants/PiedDePage.tsx`

```
Section 1 - Logo et Description:
- Logo: PARKEEYZ
- Description: "Votre solution de stationnement intelligente. Sécurisez, contrôlez et gérez votre espace de stationnement en toute simplicité."

Section 2 - Liens Rapides:
- "Aperçu du Produit" → /
- "Boutique & Forfaits" → /boutique-forfaits
- "FAQs" → /#faq
- "Contact" → /contact

Section 3 - Réseaux Sociaux et Newsletter:
- Titre: "Connectez-vous avec nous sur"
- Réseaux: LinkedIn, Facebook, Instagram, TikTok
- Newsletter: "Recevez Les Dernières Nouvelles"
- Placeholder: "Écrivez votre email ici"
- Bouton: "S'abonner"

Barre inférieure:
- "Copyright © 2025 PARKEEYZ | Tous Droits Réservés"
- "Conditions Générales" → /terms
- "Politique de Confidentialité" → /privacy
```

---

## 🏠 Page d'Accueil
**Fichier**: `src/composants/Pages/HomePage.tsx`

**Structure**:
1. AccueilHero
2. PourquoiParkeeyz
3. CommentCaMarche
4. Temoignages
5. SolutionsProfessionnelles
6. FAQ
7. AppelActionContact

### Hero Section
**Composant**: `src/composants/App/AccueilHero.tsx`

```
Titre principal: "Sécurisez, Rentabilisez, Simplifiez votre Place de Parking"
Sous-titre: "Découvrez une nouvelle façon de gérer votre stationnement avec Parkeeyz, propulsé par une technologie intelligente et innovante."

Badge: "Solution de stationnement intelligent"
H1: "Votre place de parking, enfin sous [contrôle/sécurisé/rentable]"
Sous-titre: "Installez Lockeeyz en 15 minutes, sécurisez votre emplacement et gagnez jusqu'à 300 € par mois. La barrière connectée qui vous simplifie la vie."

CTA Primaire: "Découvrir Lockeeyz" → /lockeeyz
CTA Secondaire: "Commander – 350 € TTC" → /boutique-forfaits
Lien Vidéo: "Comment ça marche"
```

### Section Avantages Clés
**Composant**: `src/composants/PourquoiParkeeyz.tsx`

```
Badge: "Avantages Clés"
Titre: "Découvrez les avantages de Lockeeyz"

Avantage 1:
- Titre: "Sécurité Maximale"
- Sous-titre: "Protégez votre place, en toute simplicité"
- Description: "Fini les véhicules non autorisés sur votre place. Contrôlez les accès depuis votre smartphone, où que vous soyez. Une tranquillité d'esprit totale, à portée de clic."

Avantage 2:
- Titre: "Rentabilisation Facile"
- Sous-titre: "Transformez votre place en revenus"
- Description: "Gagnez jusqu'à 300€/mois en louant votre place pendant vos absences. Lockeeyz gère tout automatiquement : réservations, accès et paiements. Votre place travaille pour vous."

Avantage 3:
- Titre: "Technologie Simple"
- Sous-titre: "Installez, connectez, c'est prêt !"
- Description: "15 minutes d'installation, 5 mois d'autonomie. Une technologie avancée qui se fait oublier. Pas de câblage, pas de maintenance complexe, juste une solution qui fonctionne."

Avantage 4:
- Titre: "Design Élégant"
- Sous-titre: "Une solution discrète et moderne"
- Description: "Une solution discrète et moderne qui s'intègre partout."
```

### Section Pourquoi Choisir Lockeeyz
**Composant**: `src/composants/PourquoiParkeeyz.tsx`

```
Badge: "Pourquoi choisir Lockeeyz ?"
Titre: "La solution complète pour votre stationnement"

Features:
1. "Autonomie record jusqu'à 5 mois" - "Oubliez les recharges fréquentes et profitez d'une tranquillité durable"
2. "Potentiel de revenus jusqu'à 300€/mois" - "Transformez une dépense en source de revenus passive"
3. "Installation sans travaux en 15 minutes" - "Pas de câblage, pas de technicien, juste vous et votre Lockeeyz"
4. "Application intuitive et sécurisée" - "Contrôlez tout depuis votre smartphone, en toute simplicité"
5. "Sécurité renforcée" - "La technologie connectée avancée empêche tout accès non autorisé. Une Barrière ultra-résistante allant jusqu'à 2500KG. ultra étanche résistant à tout intempérie."
6. "Support client réactif" - "Une équipe jeune et passionnée, toujours prête à vous aider"
```

### Comment Ça Marche
**Composant**: `src/composants/CommentCaMarche.tsx`

```
Badge: "Comment ça marche"
H2: "Simple. Sécurisé. Sûr."
Sous-titre: "Stationnement simplifié grâce à la technologie de pointe"

Étape 1:
- Titre: "Installez votre Lockeeyz"
- Description: "Fixez votre barrière en quelques minutes, sans outils spéciaux ni compétences techniques. Un jeu d'enfant, même pour les moins bricoleurs d'entre nous."

Étape 2:
- Titre: "Connectez à l'application"
- Description: "Téléchargez l'application, suivez le guide de configuration et prenez le contrôle de votre place. Une interface intuitive pour une gestion sans prise de tête."

Étape 3:
- Titre: "Gérez et rentabilisez"
- Description: "Partagez l'accès avec vos proches ou mettez votre place en location quand vous ne l'utilisez pas. Vous décidez quand, comment et à qui vous ouvrez votre place."

CTAs:
- "Voir le fonctionnement"
- "Explorer les forfaits" → /boutique-forfaits
- "Voir la démo en ligne"
```

### Témoignages
**Composant**: `src/composants/Temoignages.tsx`

```
Badge: "Témoignages"
Titre: "Ils ont choisi Lockeeyz"
Sous-titre: "Découvrez l'expérience de nos clients satisfaits"

Témoignage 1:
- Contenu: "Depuis que j'ai installé Lockeeyz, je ne m'inquiète plus de trouver ma place occupée. Et quand je pars en vacances, elle me rapporte plus de 200€ par mois. L'investissement a été rentabilisé en moins de deux mois !"
- Auteur: "Sophie M."
- Ville: "Annecy 74"

Témoignage 2:
- Contenu: "Installation ultra simple, application intuitive et un service client au top. Je recommande à tous les propriétaires de places qui en ont marre des voitures ventouses !"
- Auteur: "Thomas L."
- Ville: "Lyon"

Témoignage 3:
- Contenu: "En tant que représentant du syndic, j'ai équipé toute la résidence. Les voisins sont ravis et la gestion des places visiteurs est devenue un jeu d'enfant."
- Auteur: "Bernard D."
- Ville: "Syndic de copropriété Annemasse 74"
```

### Solutions Professionnelles
**Composant**: `src/composants/SolutionsProfessionnelles.tsx`

```
Badge: "Solutions Professionnelles"
Titre: "Solutions pour Hôtels et Entreprises"
Description: "Intégrez Lockeeyz à votre infrastructure existante grâce à notre API. Offrez à vos clients ou employés une expérience de stationnement fluide et automatisée."

Avantages:
1. "Réservation de chambre + place de parking en un clic"
2. "Gestion simplifiée des accès pour le personnel"
3. "Optimisation de l'utilisation de votre parc de stationnement"
4. "Données d'occupation en temps réel"
5. "Personnalisation selon vos besoins spécifiques"

CTA: "Demander une démo professionnelle"
```

---

## 📱 Page Produit Lockeeyz
**Fichier**: `src/composants/Pages/LockeeyzProduct.tsx`

### Hero Section
```
Badge: "Lockeeyz - La Barrière Connectée"
H1: "Prenez le contrôle de votre place avec Lockeeyz"
Sous-titre: "La barrière connectée installée en 15 minutes, autonome 5 mois et pilotable depuis votre smartphone."

Prix: "350€" - "TTC Livraison incluse"
Installation: "15 min" - "Installation"

CTA: "Commander maintenant"
Garanties: "Installation en 15 minutes • Garantie 2 ans • Support inclus"
```

### Description Produit
```
Titre: "Lockeeyz - La Barrière Connectée qui Révolutionne votre Stationnement"

Paragraphe 1: "Découvrez Lockeeyz, la première barrière de parking connectée qui allie sécurité, simplicité et rentabilité. Conçue pour les particuliers et les professionnels, cette solution innovante vous permet de contrôler l'accès à votre place de stationnement depuis votre smartphone et de la rentabiliser quand vous ne l'utilisez pas."

Paragraphe 2: "Unique en Europe, Lockeeyz transforme une simple place de parking en espace intelligent et potentiellement rentable. Fini les véhicules ventouses, les accès non autorisés et les places inutilisées. Prenez le contrôle de votre espace de stationnement, en toute simplicité."
```

### Spécifications Techniques
```
Titre: "Spécifications techniques"
Résumé: "Autonomie 5 mois · Bluetooth & 4G · Étanchéité IP65 · Recharge USB‑C ou solaire optionnelle · Gestion multipropriétaire"

Spécifications:
1. "Autonomie 5 mois" - "Batterie longue durée avec recharge USB-C ou solaire optionnelle"
2. "Bluetooth & 4G" - "Connectivité double pour un contrôle fiable à distance"
3. "Étanchéité IP65" - "Résistant à toutes les intempéries et conditions extérieures"
4. "Gestion multipropriétaire" - "Partagez l'accès avec plusieurs utilisateurs facilement"
5. "Ultra-résistant" - "Supporte jusqu'à 2500KG de résistance"
6. "Installation 15 minutes" - "Mise en place simple sans outils spécialisés"
```

---

## 🏢 Page À Propos
**Fichier**: `src/composants/APropos/index.tsx`

**Structure**:
1. HeroSection
2. OurStorySection
3. CeQueNousFaisons
4. MissionSection
5. ValuesSection
6. OurVisionSection
7. RevolutionSection
8. TeamSection
9. ReadyToUnlockSection

**Note**: Cette page contient plusieurs sections qui nécessitent une documentation détaillée du contenu.

---

## 📧 Page Contact
**Fichier**: `src/composants/ContactFormulaire.tsx`

```
Titre principal: "Contactez-Nous"
Sous-titre: "Notre équipe est là pour vous aider avec toutes vos questions sur nos solutions de stationnement intelligentes."

Informations de contact:
- Email: "contact@parkeeyz.com"
- Téléphone: "+33 1 23 45 67 89"

Formulaire:
- Champs: Nom, Email, Téléphone, Message
- Bouton: "Envoyer le Message"
```

---

## 🛍️ Page Boutique & Forfaits
**Fichier**: `src/composants/BoutiqueForfaits/index.tsx`

**Structure**:
1. HeroSection (Boutique)
2. ProductSection (Boutique)
3. Section Forfaits
4. ComparisonTable
5. PricingPlans
6. ReadyToMasterSection
7. StayUpdatedSection
8. NeedMoreHelpSection

### Section Forfaits
```
Badge: "Explorez Nos Forfaits"
Titre: "Des Forfaits Flexibles Conçus pour Chaque Besoin."
```

### Plans Tarifaires
**Fichier**: `src/composants/Forfaits/pricingData.ts`

```
Plan 1 - Basic keeyz / Clé Privée:
- Prix: "0€/mois"
- Description: "Parfait pour un usage personnel simple et sécurisé de votre place de parking."
- Fonctionnalités: ["Ouverture & fermeture", "Partage 1 utilisateur", "Support email", "Application mobile", "Contrôle à distance"]

Plan 2 - Golden Keeyz: (POPULAIRE)
- Prix: "9,90 € TTC/mois"
- Description: "La solution complète pour rentabiliser votre place et gérer plusieurs utilisateurs."
- Fonctionnalités: ["Toutes les fonctionnalités Basic", "Partage illimité", "Mise en location in-app", "Paiements sécurisés", "Tableau de bord avancé", "Support téléphone", "Gestion des réservations"]

Plan 3 - Business keeyz:
- Prix: "Sur devis"
- Description: "Solution sur mesure pour hôtels, entreprises et gestionnaires de parcs de stationnement."
- Fonctionnalités: ["Toutes les fonctionnalités Golden", "Multi-sites", "API & reporting avancé", "Support dédié", "Intégration personnalisée", "Formation équipe", "SLA garanti"]
```

---

## ❓ FAQ
**Fichier**: `src/composants/FAQ.tsx`

```
Badge: "Questions Fréquentes"
Titre: "Tout ce que vous devez savoir"
Sous-titre: "Trouvez rapidement les réponses à vos questions sur Lockeeyz"

Q1: "Comment configurer Lockeeyz ?"
R1: "La configuration de Lockeeyz est extrêmement simple. Après l'installation physique qui prend 15 minutes, téléchargez l'application mobile, créez votre compte et suivez le guide de configuration pas à pas. L'application détectera automatiquement votre Lockeeyz via Bluetooth et vous guidera à travers les étapes de paramétrage."

Q2: "Combien de temps dure la batterie ?"
R2: "La batterie de Lockeeyz offre une autonomie exceptionnelle de 5 mois en utilisation normale. Vous recevrez des notifications sur votre application lorsque le niveau de batterie devient faible. La recharge se fait simplement via USB-C, et une option de panneau solaire est disponible pour une autonomie encore plus longue."

Q3: "Lockeeyz est-il compatible avec mon emplacement ?"
R3: "Lockeeyz est conçu pour s'adapter à la grande majorité des places de parking, qu'elles soient en intérieur ou en extérieur. La barrière est étanche (IP65) et résiste à toutes les conditions météorologiques. Pour vérifier la compatibilité avec votre emplacement spécifique, consultez notre guide de compatibilité ou contactez notre support."

Q4: "Que se passe-t-il si je perds mon smartphone ?"
R4: "Pas de panique ! Vous pouvez accéder à votre compte Lockeeyz depuis n'importe quel appareil via notre application web. Il vous suffit de vous connecter avec vos identifiants pour gérer votre barrière. De plus, vous pouvez partager l'accès avec des proches de confiance qui pourront vous dépanner en cas de besoin."

Q5: "Y a-t-il un secours en cas de panne de courant ?"
R5: "Lockeeyz fonctionne sur batterie et n'est donc pas affecté par les coupures de courant. En cas de défaillance technique rare, un système de déverrouillage manuel sécurisé est intégré. Vous recevrez également une clé physique de secours lors de l'installation pour garantir l'accès en toute circonstance."
```

---

## 🔧 Composants Réutilisables

### Appel à l'Action Contact
**Fichier**: `src/composants/AppelActionContact.tsx`

```
Titre: "Des questions ? Nous sommes là pour vous aider."
Sous-titre: "Notre équipe jeune et passionnée est disponible pour répondre à toutes vos questions sur Lockeeyz et vous accompagner dans votre projet."
CTA: "Contactez-Nous" → /contact
```

---

## 📝 Notes pour les Modifications

### Modification du contenu Hero
1. Ouvrir `src/composants/App/AccueilHero.tsx`
2. Modifier les variables `words` pour changer les mots en rotation
3. Modifier les textes dans la structure JSX

### Modification des avantages
1. Ouvrir `src/composants/PourquoiParkeeyz.tsx`
2. Modifier les arrays `mainAdvantages` et `whyFeatures`

### Modification des témoignages
1. Ouvrir `src/composants/Temoignages.tsx`
2. Modifier l'array `temoignages`

### Modification des prix
1. Ouvrir `src/composants/Forfaits/pricingData.ts`
2. Modifier l'array `plans`

### Modification des FAQ
1. Ouvrir `src/composants/FAQ.tsx`
2. Modifier l'array `faqs`

### Modification de l'en-tête
1. Ouvrir `src/composants/App/Entete.tsx`
2. Modifier les liens de navigation

### Modification du pied de page
1. Ouvrir `src/composants/PiedDePage.tsx`
2. Modifier les sections et liens

---

## 🗺️ Routes et Navigation

### Routes principales
- `/` - Page d'accueil (HomePage)
- `/lockeeyz` - Page produit Lockeeyz
- `/boutique-forfaits` - Forfaits et tarifs
- `/contact` - Formulaire de contact
- `/a-propos` - À propos
- `/tutorials` - Tutoriels vidéos
- `/terms` - Conditions générales
- `/privacy` - Politique de confidentialité

### Liens internes à vérifier
- Hero CTA "Découvrir Lockeeyz" → `/lockeeyz`
- Hero CTA "Commander" → `/boutique-forfaits`
- "Explorer les forfaits" → `/boutique-forfaits`
- "Contactez-Nous" → `/contact`
- FAQ anchor → `/#faq`

---

## 🐛 Notes de Maintenance

### Imports non utilisés
- `BouncerSpot` est importé dans `HomePage.tsx` mais non utilisé dans le rendu 