# fynni Landing Page

Landing page untuk aplikasi fynni - Finance, simplified.

## Struktur Project

```
/workspace
├── index.html              # Main landing page
├── css/
│   └── style.css          # Generated Tailwind CSS (run npm run build:css)
├── js/
│   └── app.js             # Main JavaScript
├── images/                # Images and icons
│   └── favicon.svg
├── src/
│   └── input.css          # Tailwind source file
├── .github/
│   └── workflows/
│       └── validate.yml   # GitHub Actions workflow
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── site.webmanifest       # PWA manifest
└── README.md              # This file
```

## Setup & Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Build CSS (Production)

```bash
npm run build:css
```

### 3. Watch CSS (Development)

```bash
npm run watch:css
```

### 4. Validate HTML

```bash
npm run validate
```

## Deployment ke GitHub Pages

1. Push semua perubahan ke repository GitHub
2. Aktifkan GitHub Pages di Settings > Pages
3. Pilih branch `main` dan folder `/root`
4. Website akan tersedia di `https://username.github.io/repository`

## Optimasi yang Sudah Diterapkan

### Performance
- ✅ Tailwind CSS build lokal (bukan CDN)
- ✅ Google Fonts dengan preconnect
- ✅ Lazy loading untuk animasi
- ✅ Minimal inline JavaScript
- ✅ CSS minified

### SEO
- ✅ Meta tags lengkap (Open Graph, Twitter Cards)
- ✅ Structured data (Schema.org)
- ✅ Favicon SVG + Web Manifest
- ✅ Canonical URL
- ✅ Robots meta tag

### Accessibility
- ✅ Skip links
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Reduced motion support

### Security (GitHub Pages)
- ✅ Content Security Policy ready
- ✅ Referrer policy
- ✅ Permissions policy

## Menambahkan Google Analytics

Edit `index.html`, tambahkan sebelum `</head>`:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Ganti `G-XXXXXXXXXX` dengan Measurement ID Anda.

## Custom Domain

Untuk menggunakan custom domain:

1. Buat file `CNAME` di root folder
2. Isi dengan domain Anda (contoh: `fynni.app`)
3. Update DNS records di domain provider
4. Update `og:url` dan `canonical` di `index.html`

## License

© 2024 fynni. All rights reserved.
