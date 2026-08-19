---
title: "SEO & Metadata Reference"
description: Referensi lengkap tag metadata head HTML — SEO dasar, Open Graph Protocol, Twitter Cards, dan Favicon.
---

## 🔍 1. Fundamental SEO Metadata Template

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Judul Spesifik Halaman (50-60 Karakter) — Nama Website</title>
  <meta name="description" content="Ringkasan deskripsi halaman yang menarik dan akurat untuk snippet Google (120-160 karakter)." />
  <meta name="author" content="Nama Penulis / Perusahaan" />
  <meta name="robots" content="index, follow" />
  
  <link rel="canonical" href="https://domain-resmi.com/halaman" />
</head>
```

---

## 📱 2. Open Graph Social Preview (WhatsApp, FB, LinkedIn)

```html
<!-- Open Graph Protocol -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Nama Brand Situs" />
<meta property="og:locale" content="id_ID" />
<meta property="og:url" content="https://domain-resmi.com/halaman" />
<meta property="og:title" content="Judul Preview Media Sosial" />
<meta property="og:description" content="Deskripsi singkat yang muncul di preview WhatsApp & FB." />
<meta property="og:image" content="https://domain-resmi.com/assets/images/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Deskripsi visual gambar preview" />
```

---

## 🐦 3. Twitter Card Reference

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Judul Preview Twitter" />
<meta name="twitter:description" content="Deskripsi singkat preview Twitter." />
<meta name="twitter:image" content="https://domain-resmi.com/assets/images/og-image.png" />
```

---

## 🖼️ 4. Favicon & Theme Color Reference

```html
<link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
<meta name="theme-color" content="#0ea5e9" />
```

---

**[Lanjut: Elemen Usang (Deprecated) →](/bab15/deprecated-elements/)**
