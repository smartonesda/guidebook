---
title: "Lab 2 — Navigation & Links"
description: Lab Debugging 2 — Menemukan dan memperbaiki kesalahan navigasi fragment anchor, link mati, target _blank tanpa keamanan, dan teks link tidak deskriptif.
---

## 🔬 CHALLENGE 2.1 — Mismatch ID pada Fragment Link

### Scenario
Seorang developer membuat menu navigasi internal agar pengguna bisa melompat langsung ke seksi Kontak di bawah halaman. Namun saat link "Hubungi Saya" diklik, halaman tidak bergerak sama sekali.

### Expected Behavior
Mengklik link "Hubungi Saya" di header secara otomatis me-scroll halaman ke seksi Formulir Kontak di bawah.

### Broken Code
```html
<header>
  <nav>
    <a href="#contact-us">Hubungi Saya</a>
  </nav>
</header>

<main>
  <section id="kontak">
    <h2>Formulir Kontak</h2>
    <form action="/kirim">...</form>
  </section>
</main>
```

### Symptoms
Mengklik link mengubah URL menjadi `index.html#contact-us`, tetapi layar tetap diam di paling atas.

---

### 🕵️ Investigation & Hints
1. *Bandingkan nilai atribut `href` pada tag `<a>` dengan nilai atribut `id` pada tag `<section>`.*
2. *Apakah browser menemukan elemen yang cocok?*

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<header>
  <nav aria-label="Navigasi utama">
    <a href="#kontak">Hubungi Saya</a>
  </nav>
</header>

<main id="konten-utama" tabindex="-1">
  <section id="kontak" aria-labelledby="judul-kontak">
    <h2 id="judul-kontak">Formulir Kontak</h2>
    <form action="/kirim" method="POST">...</form>
  </section>
</main>
```

**Alasan Teknis**:
Atribut `href="#contact-us"` memerintahkan peramban web untuk mencari elemen di dalam dokumen yang memiliki `id="contact-us"`. Namun elemen yang tersedia di bawah memiliki atribut `id="kontak"`. Karena nilai *identifier* tidak cocok (*mismatch*), browser tidak menemukan target lokasi yang dimaksud dan navigasi gagal.

---

## 🔬 CHALLENGE 2.2 — Keamanan Link Eksternal `target="_blank"`

### Scenario
Saat mengaudit aksesibilitas dan keamanan website sekolah, alat penguji memberikan peringatan bahaya pada tautan sosial media sekolah.

### Broken Code
```html
<p>Ikuti kami di <a href="https://instagram.com/smknusantara" target="_blank">Instagram Sekolah</a>.</p>
```

### Symptoms
Validator keamanan menandai bahaya `Reverse Tabnapping` dan masalah keterbukaan tab tanpa pemberitahuan screen reader.

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<p>
  Ikuti kami di 
  <a 
    href="https://instagram.com/smknusantara" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Instagram Sekolah (terbuka di tab baru)"
  >
    Instagram Sekolah
  </a>.
</p>
```

**Alasan Teknis**:
Membuka link di tab baru (`target="_blank"`) tanpa atribut `rel="noopener noreferrer"` memungkinkan halaman tujuan mengakses objek `window.opener` dari halaman aslimu. Ini membuka celah keamanan di mana halaman tujuan bisa mengganti lokasi halaman aslimu secara berbahaya. Selain itu, `aria-label` memberi tahu pengguna screen reader bahwa tautan tersebut akan membuka tab baru.

---

**[Lanjut: Lab 3 — Multimedia & Tables →](/bab14/lab-3-media-tables/)**
