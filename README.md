# nLPD Compliance Checker

**Auto-évaluation de conformité nLPD (LPD révisée) pour les PME en Suisse.**  
Démo : https://axiorix-pro.github.io/nlpd-compliance-checker/

[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-ready-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-ready-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-ready-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-success)](LICENSE)
[![Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://axiorix-pro.github.io/nlpd-compliance-checker/)

---

## Démo

▶️ https://axiorix-pro.github.io/nlpd-compliance-checker/

---

## Description

Outil web d'auto-évaluation destiné aux PME en Suisse pour estimer leur niveau de conformité à la nLPD / LPD révisée (en vigueur depuis le 1er septembre 2023).

L'application fournit :
- un verdict clair,
- un score par domaine + un score global,
- des actions prioritaires,
- des preuves / éléments à conserver (documentation minimale).

---

## Couverture (9/9)

Le questionnaire couvre les exigences suivantes :

1. Inventaire des données (types, localisation, accès, registre)
2. Finalités & proportionnalité (collecte minimale / minimisation)
3. Information & transparence (clients + employés, site web, formulaires, cookies)
4. Sécurité technique & organisationnelle (MFA, mots de passe, sauvegardes, procédure incident)
5. Sous-traitants & cloud (inventaire, DPA, localisation, certifications)
6. Durées de conservation (politique, suppression régulière)
7. Droits des personnes (procédure d'accès/suppression, contact)
8. Usage de l'IA (données, décisions, politique interne)
9. Documentation minimale (registre, preuves à conserver)

---

## Structure du diagnostic

32 questions réparties en 7 sections :

- Organisation & inventaire (4)
- Hébergement & sécurité (6)
- Site web & transparence (6)
- Droits & conservation (5)
- Emails (3)
- Cloud (4)
- IA (4)

---

## À savoir avant de démarrer

Cet outil suppose un minimum de maîtrise côté entreprise :
- connaître les traitements (clients, RH, marketing, support),
- connaître les outils et prestataires (hébergement, CRM, messagerie, analytics, etc.),
- pouvoir répondre factuellement (accès, durées, procédures, sécurité).

Si vous répondez "au feeling", le résultat sera "au feeling".

---

## Installation

### Prérequis
- Node.js 18+
- npm

### Local
```bash
# Cloner le repository
git clone https://github.com/axiorix-pro/nlpd-compliance-checker.git
cd nlpd-compliance-checker

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## Scripts

| Commande | Description |
|----------|-------------|
| npm run dev | Serveur de développement |
| npm run build | Build de production |
| npm run preview | Prévisualisation du build |
| npm run lint | Vérification ESLint |
| npm run typecheck | Vérification TypeScript |

---

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icônes)

---

## Déploiement

Application front-end statique (compatible GitHub Pages, Netlify, etc.).

### Netlify (optionnel)

- Build command : npm run build
- Publish directory : dist
- Node : 18+

---

## Structure du projet
```
src/
├── components/       # Composants React
├── data/             # Données du questionnaire
├── types/            # Types TypeScript
├── utils/            # Scoring / logique
├── App.tsx           # Composant principal
├── main.tsx          # Point d'entrée
└── index.css         # Styles Tailwind
```

---

## Disclaimer

Cet outil est fourni à titre informatif et constitue une auto-évaluation.
Il ne remplace ni un audit professionnel ni l'avis d'un spécialiste (DPO / conseil).
Les résultats n'ont aucune valeur légale et ne garantissent pas la conformité effective de votre organisation à la nLPD.

---

## Licence

MIT — voir LICENSE

---

## Éditeur

Outil conçu et développé par l'équipe Axiorix.  
Site : https://axiorix.ch
