---
title: "2.10 Mini Project — Interactive Pricing Table & Selector Lab"
description: "Proyek mandiri mempraktikkan seluruh konsep selector BAB 2 — membangun Pricing Table 3 paket interaktif dengan penargetan presisi tanpa JavaScript."
---

Saatnya membuktikan kemampuan selectormu! Di proyek ini, kamu akan membangun **Interactive Pricing Table 3 Paket (Free, Pro, Enterprise)** yang memanfaatkan:
- Class & Compound Selectors
- Combinators (`>`, `+`, `~`)
- Attribute Selectors (`data-popular`)
- Pseudo-Classes (`:hover`, `:checked`, `:focus-visible`, `:not()`)
- Pseudo-Element (`::before`, `::after`, `::marker`)
- Modern Selector (`:has()`)

---

## Target Hasil Visual

1. **Paket Populer (Pro)** memiliki border aksen merah dan badge "Paling Populer" di atasnya.
2. Setiap fitur di dalam list memiliki tanda centang via `::before` atau `::marker`.
3. Ketika radio button durasi bulanan/tahunan dipilih, harga berubah dinamis murni dengan CSS.
4. Ketika salah satu kartu di-hover, kartu lainnya sedikit meredup menggunakan kombinasi `:has()` dan `:hover`!

---

## Langkah 1: Struktur HTML Semantik

Buat file baru `index.html` dan isi dengan struktur semantik berikut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Pricing Table — CSS Selector Master</title>
 <link rel="stylesheet" href="style.css" />
</head>
<body>

 <main class="pricing-container">
 <header class="pricing-header">
 <span class="badge-pill">Pilihan Berlangganan</span>
 <h1>Investasi Terbaik untuk Karir Coding-mu</h1>
 <p>Pilih paket belajar yang sesuai dengan kebutuhan belajarmu.</p>
 </header>

 <div class="pricing-grid">
 <!-- 1. PAKET STARTER -->
 <div class="pricing-card" data-plan="starter">
 <div class="card-header">
 <h2 class="plan-name">Starter</h2>
 <p class="plan-desc">Untuk pemula yang baru memulai.</p>
 <div class="price-val">Gratis</div>
 </div>
 <ul class="feature-list">
 <li>Akses Bab 0 & 1 Lengkap</li>
 <li>Akses Komunitas Belajar</li>
 <li class="disabled">Challenge Lab Interaktif</li>
 <li class="disabled">Sertifikat Kelulusan</li>
 </ul>
 <button class="btn btn-outline">Mulai Sekarang</button>
 </div>

 <!-- 2. PAKET PRO (POPULAR) -->
 <div class="pricing-card" data-plan="pro" data-popular="true">
 <div class="card-header">
 <h2 class="plan-name">Pro Developer</h2>
 <p class="plan-desc">Paket lengkap untuk siswa SMK & Mahasiswa.</p>
 <div class="price-val">Rp 99.000 <span>/bulan</span></div>
 </div>
 <ul class="feature-list">
 <li>Akses 16 Bab Lengkap</li>
 <li>5 Mini Project Portofolio</li>
 <li>6 Challenge Debug Lab</li>
 <li>Sertifikat Kelulusan Resmi</li>
 </ul>
 <button class="btn btn-primary">Pilih Paket Pro</button>
 </div>

 <!-- 3. PAKET ENTERPRISE -->
 <div class="pricing-card" data-plan="enterprise">
 <div class="card-header">
 <h2 class="plan-name">Sekolah & Kampus</h2>
 <p class="plan-desc">Untuk kelas kejuruan dan bimbingan mentor.</p>
 <div class="price-val">Hubungi Kami</div>
 </div>
 <ul class="feature-list">
 <li>Seluruh Fitur Pro</li>
 <li>Dashboard Guru / Mentor</li>
 <li>Sesi Review Kode Mingguan</li>
 <li>Dukungan Kurikulum Sekolah</li>
 </ul>
 <a href="mailto:mentor@guidebook.dev" class="btn btn-outline">Konsultasi Mentor</a>
 </div>
 </div>
 </main>

</body>
</html>
```

---

## Langkah 2: Menulis CSS dengan Selector Presisi

Buat file `style.css` dan terapkan aturan-aturan penargetan berikut:

```css
/* 1. Global Reset Universal */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 font-family: "Inter", system-ui, sans-serif;
 background-color: #0c0c0e;
 color: #f0f0f3;
 line-height: 1.6;
 padding: 3rem 1rem;
}

.pricing-container {
 max-width: 76rem;
 margin-inline: auto;
}

.pricing-header {
 text-align: center;
 margin-bottom: 3.5rem;
}

.pricing-header h1 {
 font-size: clamp(1.75rem, 3.5vw, 2.75rem);
 font-weight: 800;
 letter-spacing: -0.03em;
 margin-block: 0.5rem;
}

/* 2. Badge Header via Compound Selector */
.badge-pill {
 font-size: 0.75rem;
 font-weight: 700;
 text-transform: uppercase;
 letter-spacing: 0.08em;
 color: #ff6b5b;
 background: rgba(232, 57, 43, 0.12);
 border: 1px solid rgba(232, 57, 43, 0.3);
 padding: 0.25rem 0.75rem;
 border-radius: 999px;
}

/* 3. Grid Kartu */
.pricing-grid {
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
 gap: 1.5rem;
 align-items: stretch;
}

/* 4. Base Card Styling */
.pricing-card {
 background-color: #18181d;
 border: 1px solid rgba(255, 255, 255, 0.08);
 border-radius: 1.25rem;
 padding: 2rem;
 display: flex;
 flex-direction: column;
 position: relative;
 transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

/* 5. Target Attribute Selector untuk Paket Populer */
.pricing-card[data-popular="true"] {
 border-color: #e8392b;
 box-shadow: 0 8px 32px rgba(232, 57, 43, 0.18);
 transform: scale(1.02);
}

/* 6. Pseudo-Element Badge 'Paling Populer' */
.pricing-card[data-popular="true"]::before {
 content: "* PALING DIREKOMENDASIKAN";
 position: absolute;
 top: -12px;
 left: 50%;
 transform: translateX(-50%);
 background: linear-gradient(135deg, #c62828, #e8392b);
 color: #ffffff;
 font-size: 0.625rem;
 font-weight: 800;
 letter-spacing: 0.06em;
 padding: 0.3rem 0.85rem;
 border-radius: 999px;
 box-shadow: 0 4px 12px rgba(232, 57, 43, 0.4);
}

/* 7. Fitur List dengan Pseudo-Element Checkmark */
.feature-list {
 margin-block: 2rem;
 flex: 1;
 display: flex;
 flex-direction: column;
 gap: 0.75rem;
}

.feature-list li {
 font-size: 0.9375rem;
 color: #9898a6;
 display: flex;
 align-items: center;
 gap: 0.5rem;
}

.feature-list li::before {
 content: "";
 color: #4ade80;
 font-weight: 800;
}

/* 8. Fitur yang Disabled via Class & Negasi */
.feature-list li.disabled {
 opacity: 0.4;
 text-decoration: line-through;
}

.feature-list li.disabled::before {
 content: "";
 color: #636370;
}

/* 9. Tombol & Pseudo-Classes */
.btn {
 width: 100%;
 padding: 0.75rem 1.25rem;
 border-radius: 0.625rem;
 font-weight: 600;
 font-size: 0.9375rem;
 cursor: pointer;
 text-align: center;
 transition: all 0.2s ease;
}

.btn-primary {
 background: linear-gradient(135deg, #c62828, #e8392b);
 color: #ffffff;
 border: none;
}

.btn-primary:hover {
 box-shadow: 0 4px 20px rgba(232, 57, 43, 0.45);
 transform: translateY(-2px);
}

.btn-outline {
 background: transparent;
 color: #f0f0f3;
 border: 1px solid rgba(255, 255, 255, 0.15);
}

.btn-outline:hover {
 background: rgba(255, 255, 255, 0.06);
 border-color: rgba(255, 255, 255, 0.3);
}

/* 10. Fitur Canggih: Efek Fokus Grid via :has() */
.pricing-grid:has(.pricing-card:hover) .pricing-card:not(:hover) {
 opacity: 0.65;
 filter: blur(0.5px);
 transform: scale(0.98);
}
```

---

## Rubrik Evaluasi Mandiri

| Aspek | Skor Maksimal | Poin Evaluasi |
|:---|:---:|:---|
| **Penerapan Selector Dasar** | 25 | Menggunakan class, universal reset, dan combinator secara tepat |
| **Attribute & State Selector** | 25 | Menggunakan `[data-popular]` dan `:hover`/`:focus-visible` |
| **Pseudo-Elements** | 25 | Badge dan icon list dibuat murni via `::before` tanpa tag tambahan |
| **Modern Selector & Efek** | 25 | Menerapkan `:has()` untuk efek grid focus interaktif |