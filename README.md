# Saurav Dhami — portfolio

Static Vue site for GitHub Pages. Same mint UI as the fullstack project, without Node or Mongo.

## Local

```bash
npm install
npm run dev
```

## GitHub Pages

1. Push `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. After the workflow finishes: `https://sauravdhami.github.io/portfolio-saurav/`

## Custom `.com.np` domain

1. At your registrar, add a **CNAME**: `www` → `sauravdhami.github.io`
2. In this repo, add `public/CNAME` with one line, e.g. `www.yourname.com.np`
3. GitHub **Settings → Pages → Custom domain** → the same host
4. In `.github/workflows/pages.yml`, set `VITE_BASE: /` on the build step so assets load from the domain root:

```yaml
- run: npm run build
  env:
    VITE_BASE: /
```

Contact uses `mailto:` (no server). Approach, waves, and the quiz stay in the visitor's browser.
