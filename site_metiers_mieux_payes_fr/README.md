# Top Salaires France (statique) — clé en main

## Contenu
- Page pilier : `/metiers-les-mieux-payes-france/`
- Index métiers : `/metiers/` (+ 30 pages métier)
- Pages secteurs : `/secteurs/`
- Méthodologie : `/methodologie/`
- Contact / Mentions légales

## Déploiement (le plus simple)
### Option A — Netlify
1. Mets ce dossier dans un repo GitHub
2. Netlify > New site from Git > choisis le repo
3. Build command : (vide)
4. Publish directory : `/` (racine)
5. Ajoute ton domaine

### Option B — Vercel
1. Import repo
2. Framework preset: "Other"
3. Output: statique (aucun build)

## Pub (Adsense / partenaires)
- Le site affiche une bannière consentement simple (localStorage).
- **À toi** d’insérer les scripts ads/analytics **après consentement** dans `assets/site.js`.

## Personnalisation
- Change `base_url` dans le générateur ou remplace les balises canonical/og dans les pages.
- Ajoute une image OG et remplace `og:image` si tu en mets une.

## SEO
- Publie régulièrement de nouvelles pages métier (longue traîne)
- Mets à jour les pages existantes (date + changelog)
- Obtiens des backlinks (guest posts, outils gratuits, ressources)
