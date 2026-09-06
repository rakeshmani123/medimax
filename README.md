# MediMax Global Website

Website resmi MediMax Global — platform healthcare products.

## Tech Stack

- **React 19** + **Vite 8**
- **React Router DOM** — client-side routing
- **Oxlint** — linting

## Struktur Project

```
src/
├── components/     # Navbar, Footer, reusable UI
├── pages/          # Home, Products, About, Contact, Services, OurBrand
├── data/           # Product specs & data
├── i18n/           # Multi-language support
└── styles/         # CSS tokens & global styles
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:5173)
npm run dev

# Build untuk production
npm run build

# Preview build result
npm run preview
```

## Deployment Workflow

### Vercel (Recommended — Auto Deploy)

1. Login ke [vercel.com](https://vercel.com) pakai akun GitHub
2. Klik **Add New Project** → pilih repo `rakeshmani123/medimax`
3. Vercel otomatis detect Vite → langsung deploy
4. Setiap push ke `main`, Vercel auto build & deploy

**Custom Domain (medimaxglobal.com):**
- Buka project di Vercel → Settings → Domains
- Tambah `medimaxglobal.com`
- Update **DNS records** di Hostinger:
  ```
  Type: A
  Name: @
  Value: 76.76.21.21

  Type: CNAME
  Name: www
  Value: cname.vercel-dns.com
  ```

### Hostinger (Manual)

Kalau pakai hosting Hostinger langsung:

```bash
# Build dulu
npm run build

# Upload isi folder dist/ ke hPanel File Manager
# (bukan source code mentah!)
```

> ⚠️ React/Vite **tidak bisa** langsung di-serve tanpa build. Yang di-upload harus isi folder `dist/`.

## Contributing

1. Fork / clone repo
2. Buat branch baru: `git checkout -b fitur/nama-fitur`
3. Commit: `git commit -m "add: deskripsi"`
4. Push: `git push origin fitur/nama-fitur`
5. Buka Pull Request

## License

Private — MediMax Global
