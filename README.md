<div align="center">

# 📘 HTML Guidebook

### Belajar HTML Modern dari Nol Hingga Mahir

Panduan pembelajaran HTML5 lengkap berbahasa Indonesia yang dirancang khusus untuk siswa SMK Rekayasa Perangkat Lunak (RPL), mahasiswa, dan developer pemula.

<p>

![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro)
![Starlight](https://img.shields.io/badge/Starlight-Latest-FF5D01)
![HTML5](https://img.shields.io/badge/HTML5-Modern-E34F26?logo=html5)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

<img src="public/images/cover-learn.png" alt="HTML Guidebook" width="800" style="max-width:100%; border-radius: 12px;"/>

</div>

---

# ✨ Tentang Project

**HTML Guidebook** adalah website pembelajaran dokumentasi interaktif yang dibangun menggunakan **Astro Starlight** sebagai media belajar HTML5 modern secara terstruktur.

Materi disusun secara bertahap mulai dari konsep dasar (*getting started*) hingga pembuatan website nyata yang valid W3C, *semantic*, dan *accessible*.

Proyek ini sangat cocok digunakan sebagai media pembelajaran bagi:
- 👨‍🎓 Siswa SMK Rekayasa Perangkat Lunak (RPL)
- 🎓 Mahasiswa Informatika / Ilmu Komputer
- 👨‍💻 Developer Pemula (Self-taught Learner)
- 👨‍🏫 Guru / Mentor Programming

---

# 🚀 Demo

### Website

> https://html5-guidebook.vercel.app

atau

> https://smartonesda.github.io/html-guidebook/

---

# ✨ Fitur Utama

- 📚 **Materi Terstruktur**: Penjelasan teori mendalam yang dilengkapi analogi kehidupan nyata.
- 🌙 **Tema Gelap & Terang**: Mendukung dark mode & light mode bawaan.
- 💻 **Desain Responsif**: Nyaman dibaca melalui layar HP, tablet, maupun laptop.
- 🔍 **Pencarian Cepat**: Dilengkapi fitur pencarian kata kunci (*full-text search*).
- 📋 **Salin Kode Instan**: Tombol satu klik untuk menyalin seluruh blok kode contoh.
- 🎨 **Expressive Code**: Blok visual kode dengan pewarnaan syntax modern.
- 🧱 **Proyek Linier Terintegrasi**: Membangun portfolio pribadi yang tumbuh secara bertahap di setiap bab.

---

# 📖 Jalur Pembelajaran (Roadmap)

Website ini menyajikan kurikulum lengkap berjenjang:

### **BAB 0 — Getting Started**
Orientasi internet/web, peran HTML/CSS/JS, dan persiapan VS Code.

### **BAB 1 — HTML Fundamentals**
Anatomi tag, elemen, atribut, dan validasi standar W3C.

### **BAB 2 — Text & Typography**
Format teks semantik (`<strong>`, `<em>`, `blockquote`, `pre`, `code`, `abbr`, `time`).

### **BAB 3 — Hyperlinks & Navigation**
Anchor `<a>`, rute relative path (`.` & `..`), target tab, dan link download/surel.

### **BAB 4 — Images & Multimedia**
Aset gambar responsif (`<picture>`, `srcset`), audio, video, dan frame eksternal (`<iframe>`).

### **BAB 5 — Lists & Tables**
Data terstruktur (`<ul>`, `<ol>`, `<dl>`) dan tabel data semantik (`<thead>`, `colspan`, `rowspan`).

### **BAB 6 — Forms** (Upcoming)
Menerima input pengguna (`<form>`, `<input>`, `<textarea>`, `<select>`).

... hingga **BAB 15 — HTML Handbook (Referensi Tag Lengkap)**.

---

# 🛠 Tech Stack

Proyek ini dibangun menggunakan:

- **Astro v7.x** (Static Site Generator)
- **Astro Starlight** (Documentation integration)
- **MDX** (Rich Markdown components)
- **Expressive Code** (Code block highlights)
- **Sharp** (Image optimization)

---

# 📂 Struktur Folder Proyek

```text
.
├── public/
│   ├── favicon.svg
│   ├── images/              ← Folder logo, smartone, dan cover-learn.png
│   └── robots.txt
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   └── Hero.astro       ← Custom Hero halaman muka
│   │
│   ├── content/
│   │   └── docs/            ← File-file bab materi markdown (.md)
│   │
│   ├── styles/
│   │   └── custom.css       ← Kustomisasi CSS stylesheet
│   │
│   └── content.config.ts
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

# ⚙️ Pemasangan Proyek Lokal

Jika kamu ingin menjalankan situs dokumentasi ini secara lokal di komputermu sendiri:

1. Clone repositori ini:
   ```bash
   git clone https://github.com/smartonesda/html-guidebook.git
   ```
2. Masuk ke folder proyek:
   ```bash
   cd html-guidebook
   ```
3. Pasang dependensi:
   ```bash
   npm install
   ```
4. Jalankan server lokal:
   ```bash
   npm run dev
   ```
5. Akses halaman lokal di browsermu:
   > http://localhost:4321

---

# 📦 Perintah Script (Scripts)

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Menjalankan server pengembangan lokal. |
| `npm run build` | Melakukan kompilasi static production build. |
| `npm run preview` | Meninjau hasil kompilasi build sebelum di-deploy. |

---

# 📄 Lisensi

Proyek ini didistribusikan di bawah lisensi **MIT License**. Silakan digunakan dan dimanfaatkan untuk media pembelajaran maupun pengembangan akademis lebih lanjut.

<div align="center">

Dibuat dengan ❤️ oleh **SmartOne Dev**

**Belajar Web Development Modern dari Langkah Paling Mendasar**

</div>

