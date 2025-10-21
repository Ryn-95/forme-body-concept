# Forme Body Concept

Site web ultra-premium avec design minimaliste inspiré Apple/Studio.

## Stack Technique

- React 18
- TailwindCSS 3.4
- Vite 5
- Police: Poppins ExtraLight (200) & Inter ExtraLight

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build Production

```bash
npm run build
```

## Architecture

```
src/
├── components/       # Composants réutilisables (Navbar, etc.)
├── sections/         # Sections de la page (Hero, etc.)
├── config/           # Constantes et configuration
├── styles/           # Styles globaux
└── layout/           # Layouts (à venir)
```

## Design System

Toutes les constantes de design sont définies dans `src/config/constants.js` :

- Border radius: 24px (cartes) / 50px (navbar)
- Espacements: 140px entre sections
- Police: Poppins ExtraLight (200)
- Couleurs: définies en HEX exact

