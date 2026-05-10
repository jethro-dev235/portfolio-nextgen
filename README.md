# Portfolio | Étudiant ENASTIC - Développeur Web & Mobile Passionné par l'IA

> Portfolio moderne d'un jeune étudiant à l'ENASTIC passionné par l'Intelligence Artificielle, présentant mes projets d'apprentissage en Deep Learning et mon parcours en développement web et mobile.

## 🚀 [Voir le portfolio en ligne](https://votre-username.github.io/portfolio-nextgen/)

## 📋 Table des matières

- [À propos](#-à-propos)
- [Caractéristiques](#-caractéristiques)
- [Stack Technique](#️-stack-technique)
- [Projets](#-projets)
- [Installation](#-installation)
- [Déploiement](#-déploiement)
- [SEO & Performance](#-seo--performance)
- [Contribution](#-contribution)

## 🎓 À propos

Jeune étudiant à l'**École Nationale Supérieure d'Informatique et de Technologies de l'Information et de la Communication (ENASTIC)** du Tchad, passionné par le développement web, mobile et l'Intelligence Artificielle.

### 🎯 Objectifs
- Développer mes compétences en **Deep Learning** et **Machine Learning**
- Créer des solutions IA avec un **impact réel** pour le Tchad
- Maîtriser le développement **web et mobile** moderne
- Contribuer à des projets **open source**

## 🚀 Caractéristiques

- **🎨 Design Dark Engineering** : Noir, gris anthracite, lignes fines, polices monospace
- **⚡ Effets Interactifs** : Animations "scan" et "data flow" pour les projets IA
- **📱 Responsive Design** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **⚡ Performance** : Next.js 14 avec optimisation automatique et lazy loading
- **🔧 Technologies Modernes** : TypeScript, Tailwind CSS, Lucide React
- **🔍 Optimisé SEO** : Open Graph, Twitter Cards, sitemap.xml, robots.txt
- **♿ Accessibilité** : ARIA labels, navigation clavier, contrast élevé

## 🛠️ Stack Technique

### Frontend
- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Icônes** : Lucide React
- **Animations** : CSS animations & Framer Motion

### Backend & IA
- **Langage IA** : Python
- **Frameworks ML** : TensorFlow, OpenCV, Scikit-learn
- **NLP** : NLTK, Transformers
- **API** : Node.js, Express, FastAPI

### Base de données
- **NoSQL** : MongoDB, Firebase
- **SQL** : MySQL, PostgreSQL
- **ORM** : Prisma, Mongoose

### Outils
- **Version Control** : Git & GitHub
- **Déploiement** : Vercel, Netlify, GitHub Pages
- **Package Manager** : npm, yarn

## 📁 Structure du Projet

```
portfolio-nextgen/
├── src/
│   ├── app/                 # Pages et layout Next.js
│   │   ├── globals.css     # Styles globaux
│   │   ├── layout.tsx      # Layout principal
│   │   └── page.tsx        # Page d'accueil
│   ├── components/          # Composants React
│   │   ├── Header.tsx      # Navigation
│   │   ├── Hero.tsx        # Section d'accueil
│   │   ├── Skills.tsx      # Compétences techniques
│   │   ├── AIProjects.tsx  # Projets IA
│   │   ├── WebProjects.tsx # Projets Web
│   │   ├── Vision.tsx      # Vision & apprentissage
│   │   └── Footer.tsx      # Pied de page
│   └── lib/                # Utilitaires
├── projects/               # Détails des projets
│   ├── ai/                # Projets IA
│   ├── web/               # Projets Web
│   └── assets/             # Ressources partagées
├── public/                # Fichiers statiques
│   ├── sitemap.xml        # Plan du site pour SEO
│   └── robots.txt         # Instructions pour robots
├── package.json           # Dépendances et scripts
└── README.md             # Documentation du projet
```

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Cloner le projet
```bash
git clone https://github.com/votre-username/portfolio-nextgen.git
cd portfolio-nextgen
```

### Installer les dépendances
```bash
npm install
# ou
yarn install
```

### Démarrer le serveur de développement
```bash
npm run dev
# ou
yarn dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🌐 Déploiement

### GitHub Pages (Recommandé)
1. **Fork** ce repository
2. **Modifier** les URLs dans `src/app/layout.tsx` :
   ```typescript
   url: 'https://votre-username.github.io/portfolio-nextgen'
   ```
3. **Activer** GitHub Pages dans les settings du repository
4. **Choisir** la branche `main` comme source

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Uploader le dossier `.next`
```

## 📊 Projets

### 🤖 Intelligence Artificielle
- **Agri-IA** : Reconnaissance des maladies des plantes avec Deep Learning
- **Chatbot Intelligent** : Assistant conversationnel avec NLP
- **Reconnaissance Faciale** : Système d'identification biométrique

### 🌐 Web & Mobile
- **Gestion de Stock** : Système CRUD avec React et Node.js
- **Applications Mobiles** : Projets React Native et Flutter
- **Site Restaurant** : Design responsive avec animations

## 🔍 SEO & Performance

### ✅ Optimisations implémentées
- **Open Graph** : Partage optimisé sur réseaux sociaux
- **Twitter Cards** : Cards personnalisées pour Twitter
- **Sitemap.xml** : Plan du site pour les moteurs de recherche
- **Robots.txt** : Instructions pour les crawlers
- **Meta Tags** : Description, keywords, author
- **Accessibilité** : ARIA labels et navigation clavier
- **Performance** : Lazy loading et optimisation images

### 📈 Métriques cibles
- **Lighthouse** : 95+ sur tous les critères
- **Core Web Vitals** : < 2.5s LCP
- **SEO Score** : 90+ sur les outils d'audit

## 🎨 Personnalisation

### Couleurs et thème
Modifier les variables CSS dans `src/app/globals.css` :
```css
:root {
  --background: #0a0a0a;
  --foreground: #e5e5e5;
  --primary: #3b82f6;
}
```

### Contenu personnalisé
1. **Profil** : Modifier `src/components/Hero.tsx`
2. **Projets** : Mettre à jour les composants projets
3. **Contact** : Adapter `src/components/Footer.tsx`
4. **Skills** : Personnaliser `src/components/Skills.tsx`

## 🤝 Contribution

### Comment contribuer
1. **Fork** le repository
2. **Créer** une branche `feature/votre-feature`
3. **Commit** vos changements
4. **Push** vers votre fork
5. **Ouvrir** une Pull Request

### Guidelines
- Utiliser TypeScript
- Suivre le style Dark Engineering
- Ajouter des tests si possible
- Documenter les nouvelles fonctionnalités

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails.

## 🙏 Remerciements

- **Next.js** : Framework React moderne
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes magnifiques
- **ENASTIC** : Formation d'excellence

---

**Portfolio Étudiant ENASTIC** - Créé avec ❤️ et Next.js 14

> *"La technologie au service de l'innovation africaine"*
```

## 🎯 Sections du Portfolio

### 1. Pôle Intelligence Artificielle (Priorité Haute)
- **Agri-IA** : Reconnaissance des maladies des plantes
- **Chatbot Intelligent** : Assistant NLP
- **Reconnaissance Faciale** : Système d'identification

### 2. Pôle Web & Gestion (Full-Stack)
- **Gestion de Stock** : Dashboard analytique
- **Gestion des Étudiants** : Plateforme éducative
- **E-commerce** : Boutique en ligne moderne
- **Restaurant** : Site avec réservations
- **Site Personnel v1** : Première version

### 3. Vision & Apprentissage
- Deep Learning et Machine Learning
- Applications concrètes au Tchad
- Parcours d'apprentissage continu

## 🚀 Démarrage

1. **Installation des dépendances**
```bash
npm install
```

2. **Démarrer le serveur de développement**
```bash
npm run dev
```

3. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📝 Commands

- `npm run dev` : Serveur de développement
- `npm run build` : Build de production
- `npm run start` : Serveur de production
- `npm run lint` : Linting du code

## 🎨 Personnalisation

### Couleurs et Thème
Les couleurs sont définies dans `src/app/globals.css` :
- `--background` : Fond principal
- `--foreground` : Texte principal
- `--primary` : Couleur primaire (bleu)
- `--accent` : Couleur d'accent

### Polices
Police monospace configurée dans `tailwind.config.js` :
- JetBrains Mono (primaire)
- Fira Code (alternative)
- Monaco (fallback)

### Animations
Animations CSS personnalisées dans `globals.css` :
- `scan` : Effet de scan pour les projets IA
- `dataflow` : Effet de flux de données

## 📊 Ajouter de Nouveaux Projets

1. **Créer le dossier** dans `projects/ai/` ou `projects/web/`
2. **Ajouter un README.md** avec les détails du projet
3. **Ajouter les médias** (captures, démo)
4. **Mettre à jour** le composant correspondant

### Structure pour un nouveau projet
```
projects/ai/nouveau-projet/
├── README.md
├── images/
│   ├── screenshot1.png
│   └── screenshot2.png
└── demo.mp4
```

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploader le dossier .next
```

### Docker
```bash
docker build -t portfolio-nextgen .
docker run -p 3000:3000 portfolio-nextgen
```

## 📈 Performance

- **Score Lighthouse** : 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals** : Optimisé
- **Bundle Size** : Minifié et gzippé
- **Images** : Optimisées avec Next.js Image

## 🔧 Configuration

### Variables d'Environnement
Créer un fichier `.env.local` :
```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/votre-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/votre-profile
NEXT_PUBLIC_EMAIL=contact@votre-domaine.com
```

### SEO
Mettre à jour `src/app/layout.tsx` avec vos informations :
- Title
- Description
- Metadata

## 📝 Licence

Ce projet est sous licence MIT.

## 🤝 Contribuer

Les contributions sont bienvenues ! N'hésitez pas à :
- Reporter des bugs
- Suggérer des améliorations
- Soumettre des pull requests

---

**Portfolio Next-Gen** - Créé avec ❤️ et Next.js 14
