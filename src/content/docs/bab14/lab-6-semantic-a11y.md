---
title: "Lab 6 — Semantics & A11y"
description: Lab Debugging 6 — Membedah masalah Div-Soup, tombol ikonik tanpa label aksesibel, dan hilangnya indikator focus keyboard di CSS.
---

## 🔬 CHALLENGE 6.1 — Non-Accessible Icon Button (Tombol Ikonik Buta)

### Scenario
Di bagian header portofolio, terdapat tombol berbentuk ikon bulan 🌙 untuk mengubah tema gelap/terang. Pengguna screen reader melaporkan bahwa alat pembaca layar hanya mengumumkan *"button"* tanpa menjelaskan fungsi tombol tersebut.

### Broken Code
```html
<button class="theme-toggle" onclick="toggleTheme()">
  <span class="icon">🌙</span>
</button>
```

### Symptoms
Screen reader NVDA membacakan: `"button, unlabelled"` atau hanya mendiamkan nama ikon.

---

### 🕵️ Investigation & Hints
1. *Bagaimana pengguna tunanetra bisa mengetahui fungsi tombol jika tombol tersebut tidak memiliki teks tertulis?*
2. *Atribut ARIA apakah yang digunakan untuk memberikan label teks tersembunyi pada elemen interaktif?*

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<button 
  type="button" 
  class="theme-toggle" 
  onclick="toggleTheme()"
  aria-label="Ubah tema antara gelap dan terang"
>
  <span class="icon" aria-hidden="true">🌙</span>
</button>
```

**Alasan Teknis**:
Tombol yang hanya berisi ikon dekoratif atau emoji tidak memiliki teks langsung yang bisa dibaca oleh *screen reader*. Dengan memasang atribut **`aria-label`**, kita memberikan label teks aksesibel yang akan dibacakan oleh pembaca layar. Sementara atribut `aria-hidden="true"` pada tag `<span>` menyembunyikan emoji dari pembacaan karakter ganda.

---

## 🔬 CHALLENGE 6.2 — Bencana CSS `*:focus { outline: none }`

### Scenario
Seorang desainer grafis menghapus garis bingkai fokus bawaan browser di file CSS karena dianggap "mengganggu estetika". Akibatnya, pengguna keyboard yang menekan tombol Tab tidak dapat melihat posisi kursor navigasi mereka.

### Broken Code
```html
<head>
  <style>
    /* Bencana Aksesibilitas Keyboard */
    *:focus {
      outline: none !important;
    }
  </style>
</head>
<body>
  <nav>
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
    <a href="#kontak">Kontak</a>
  </nav>
</body>
```

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<head>
  <style>
    /* Ganti garis fokus bawaan dengan gaya kustom kontras tinggi */
    :focus-visible {
      outline: 3px solid #0ea5e9;
      outline-offset: 3px;
      border-radius: 2px;
    }
  </style>
</head>
<body>
  <nav aria-label="Navigasi utama">
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
    <a href="#kontak">Kontak</a>
  </nav>
</body>
```

**Alasan Teknis**:
Menghapus `outline` pada kondisi `:focus` tanpa memberikan visual pengganti membuat pengguna keyboard "buta" terhadap posisi fokus mereka saat bernavigasi menggunakan tombol `Tab`. Standar modern menggunakan pseudo-class **`:focus-visible`** yang hanya menampilkan garis fokus saat pengguna bernavigasi menggunakan **keyboard** (tidak muncul saat diklik mouse).

---

**[Lanjut: The Ultimate Boss Challenge →](/bab14/boss-challenge/)**
