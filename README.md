# Portfolio — Jean Philippe Fall

Portfolio personnel en single page, construit avec [Astro](https://astro.build) + Tailwind CSS v4. Contenu bilingue FR/EN, dark mode, et dockerisé pour un dev/CI reproductibles.

## Structure

```text
src/
├── data/cv.ts          # tout le contenu (FR/EN) — à éditer pour mettre à jour le CV
├── components/         # Nav, Hero, About, Experience, Missions, Skills, Education, Contact, Footer, Bi (helper i18n)
├── layouts/Layout.astro
└── pages/index.astro
```

Pour modifier le contenu (expériences, missions, compétences, formations), tout se passe dans `src/data/cv.ts` — aucun composant n'a besoin d'être touché.

## Développement local

Sans Docker :

```sh
npm install
npm run dev        # http://localhost:4321
```

Avec Docker (pas besoin de Node en local) :

```sh
docker compose up dev       # http://localhost:4321, hot-reload
docker compose up preview   # build de prod servi par nginx → http://localhost:8080
```

## Build & test de l'image de production

```sh
npm run build                       # build Astro → dist/
docker build -t portfolio .         # image nginx + build Astro
docker run --rm -p 8080:80 portfolio
```

## CI/CD

`.github/workflows/ci.yml` :
- **Job `build`** (à chaque push/PR) : install, build Astro, build de l'image Docker, démarrage du conteneur + vérification HTTP. Sert de garde-fou qualité.
- **Job `deploy`** (push sur `main`) : déploie `dist/` sur Cloudflare Pages via Wrangler. Nécessite deux secrets GitHub (`Settings > Secrets and variables > Actions`) :
  - `CLOUDFLARE_API_TOKEN` (créer un token avec la permission *Cloudflare Pages: Edit*)
  - `CLOUDFLARE_ACCOUNT_ID`

### Alternative plus simple (sans CI à configurer)

Connecter directement le repo GitHub dans le dashboard **Cloudflare Pages** (`Workers & Pages > Create > Pages > Connect to Git`). Cloudflare détecte Astro automatiquement (`npm run build`, dossier `dist/`) et redéploie à chaque push — zéro configuration de secret. Dans ce cas, le job `deploy` du workflow peut être supprimé ou laissé inactif.

## À faire avant mise en ligne

- [ ] Remplacer le favicon par défaut d'Astro (`public/favicon.svg` / `.ico`).
- [ ] Choisir et configurer un domaine custom sur Cloudflare Pages (optionnel, gratuit).
