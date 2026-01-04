# nLPD Compliance Checker

Outil d'auto-evaluation de conformite a la nouvelle Loi federale sur la Protection des Donnees (nLPD) pour les entreprises suisses.

## Description

Cette application web permet aux entreprises suisses d'evaluer leur niveau de conformite a la nLPD entree en vigueur le 1er septembre 2023. L'outil propose un questionnaire structure couvrant les principaux domaines de la protection des donnees.

## Fonctionnalites

- Questionnaire interactif en 6 sections thematiques
- Evaluation du niveau de maturite par domaine
- Score global de conformite avec visualisation
- Plan d'actions prioritaires personnalise
- Interface responsive et accessible
- Export des resultats (impression/PDF)

## Sections evaluees

1. **Gouvernance des donnees** - Organisation et responsabilites
2. **Registre des traitements** - Documentation des activites
3. **Droits des personnes** - Procedures de gestion des demandes
4. **Securite des donnees** - Mesures techniques et organisationnelles
5. **Transferts internationaux** - Conformite des flux transfrontaliers
6. **Gestion des violations** - Procedures de notification

## Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/nlpd-compliance-checker.git
cd nlpd-compliance-checker

# Installer les dependances
npm install

# Lancer en developpement
npm run dev

# Build pour production
npm run build
```

## Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de developpement |
| `npm run build` | Build de production |
| `npm run preview` | Preview du build |
| `npm run lint` | Verification ESLint |
| `npm run typecheck` | Verification TypeScript |

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icones)

## Deploiement Netlify

### Configuration

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 18+

### Variables d'environnement

Aucune variable d'environnement requise pour le fonctionnement de base.

## Structure du projet

```
src/
├── components/       # Composants React
├── data/            # Donnees du questionnaire
├── types/           # Types TypeScript
├── utils/           # Fonctions utilitaires (scoring)
├── App.tsx          # Composant principal
├── main.tsx         # Point d'entree
└── index.css        # Styles Tailwind
```

## Disclaimer

Cet outil est fourni a titre informatif uniquement et constitue une auto-evaluation. Il ne remplace pas un audit professionnel ni un conseil juridique. Les resultats obtenus n'ont aucune valeur legale et ne garantissent pas la conformite effective de votre organisation a la nLPD.

Pour une evaluation complete et certifiee, nous recommandons de faire appel a un specialiste de la protection des donnees.

## Licence

MIT License - Voir le fichier [LICENSE](LICENSE) pour plus de details.

## Auteur

Developpe par [Axiorix](https://axiorix.ch) - Conseil en protection des donnees
