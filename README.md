# LUXDRIVE - Location de Voitures de Luxe

## 📋 Contexte du Projet

Ce projet est une SPA (Single Page Application) de location de voitures de luxe, construite avec React, visant une esthétique "Luxe automobile sombre" (style McLaren/Porsche). Le site doit être visuellement impressionnant, avec des animations avancées et une sensation premium.

## 🎨 Direction Artistique

*   **Esthétique** : Luxe sombre, glassmorphisme, cinématique.
*   **Couleurs** :
    *   Noir profond : `#0A0A0A`
    *   Blanc chaud : `#F5F0EB`
    *   Rouge électrique : `#E63946`
    *   Or métallique : `#C9A84C`
*   **Typographie** :
    *   Titres : "Bebas Neue"
    *   Corps : "Outfit"

## 📦 Stack Technique

*   **React 18** (Vite)
*   **React Router v6** (Multi-pages)
*   **Framer Motion** (Animations : transitions, scroll, hover)
*   **Tailwind CSS** (Styling)
*   **Swiper.js** (Carrousels)
*   **React Icons** (Icônes)
*   **React CountUp** (Compteurs)
*   **React DatePicker** (Calendriers)
*   **Zustand** (Gestion d'état globale)

## 📄 Pages & Routing

*   `/` : Page d'accueil (Héro, Stats, Vitrine, Témoignages)
*   `/voitures` : Catalogue complet avec filtres
*   `/voitures/:id` : Détail voiture (Specs, Galerie, Réservation)
*   `/reservation` : Formulaire multi-étapes
*   `/a-propos` : Histoire, Équipe, Valeurs
*   `/contact` : Formulaire et Infos

## ✨ Fonctionnalités Prévues

1.  **Navigation Fluide** : Transitions de pages (AnimatePresence), Menu mobile animé.
2.  **Animations** : Parallaxe, Révélation au scroll, Micro-interactions (hover).
3.  **Réservation** : Formulaire en 4 étapes avec validation.
4.  **Catalogue** : Filtrage dynamique (Catégorie, Prix, Transmission).
5.  **Responsive** : Adaptation parfaite Mobile / Tablette / Desktop.

## 🛠️ Installation & Démarrage

```bash
# Installation des dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📁 Structure du Projet

```
src/
├── components/
│   ├── ui/           # Composants UI génériques
│   ├── layout/       # Navbar, Footer
│   ├── home/         # Sections page d'accueil
│   └── cars/         # Carte voiture, filtres
├── pages/            # Composants de pages
├── features/         # (Optionnel) pour la logique complexe
├── hooks/            # Custom hooks (animations, etc.)
└── context/          # Stores Zustand / Context
```

## 📝 Notes Importantes

*   Pas de TypeScript (JSX pur).
*   Toutes les données sont mockées (images Unsplash).
*   Texte intégralement en Français.
