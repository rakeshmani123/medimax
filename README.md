# MediMax Global Website

MediMax Global is a modern healthcare product website built with React. It showcases medical and healthcare products with a clean, professional interface — featuring product catalogs, service information, brand story, and multilingual support.

## Tech Stack

- **React 19** + **Vite 8**
- **React Router DOM** — client-side routing
- **Oxlint** — linting

## Project Structure

```
src/
├── components/     # Navbar, Footer, reusable UI
├── pages/          # Home, Products, About, Contact, Services, OurBrand
├── data/           # Product specs & data
├── i18n/           # Multi-language support
└── styles/         # CSS tokens & global styles
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:5173

# Lint
npm run lint
```

## Production Build

```bash
# Build for production
npm run build

# Preview the build locally
npm run preview
```

The build output goes into the `dist/` folder. This is what you upload to your hosting server.

## Deployment

This project is a **static site** after build. Any hosting platform that supports static files will work.

### Manual Upload

1. Run `npm run build`
2. Upload the entire `dist/` folder contents to your hosting's file manager or via FTP/SFTP

### Git-based Auto Deploy

If your hosting supports Git deployment (e.g. Hostinger, Netlify, Cloudflare Pages), configure it to run:

```bash
npm install && npm run build
```

Then point the serving directory to `dist/`.

> **Important:** Do NOT upload the source code directly. React/Vite projects must be built first. The server needs to serve the `dist/` folder, not the project root.

## License

Private — MediMax Global
