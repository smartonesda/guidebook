---
title: "Penamaan & Struktur File"
description: Mengorganisir folder proyek web profesional — konvensi penamaan file (kebab-case), struktur direktori aset, dan penamaan class/id yang konsisten.
---

Ketika proyek web bertumbuh dari 1 halaman menjadi 10 halaman dengan puluhan gambar dan file pendukung, proyek akan cepat menjadi kacau jika tidak diorganisir dari awal.

---

## 📁 Struktur Folder Proyek Standar

Sebuah proyek web statis yang rapi harus memisahkan file HTML utama di root folder dan mengelompokkan aset pendukung ke dalam direktori khusus.

```
my-portfolio/
├── index.html              ← Halaman Utama / Beranda
├── projects.html           ← Halaman Daftar Proyek
├── assets/                 ← Folder Utama Aset Pendukung
│   ├── css/
│   │   └── style.css       ← File CSS Eksternal
│   ├── js/
│   │   └── main.js         ← File JavaScript
│   ├── images/             ← Semua File Gambar
│   │   ├── hero/
│   │   └── projects/
│   └── docs/               ← Berkas Unduhan (PDF, dsb.)
│       └── resume.pdf
└── favicon.ico             ← Favicon Root
```

### Prinsip Utama Struktur File:
1. **`index.html` selalu di root folder**: Web server secara otomatis mencari `index.html` ketika seseorang mengakses URL utama domain.
2. **Semua aset di dalam folder `assets/`**: Gambar, CSS, JS, dan dokumen dipisahkan dengan rapi.
3. **Gunakan jalur relatif (relative path) yang benar**:
   - `assets/images/foto.jpg` dari `index.html`
   - `../images/foto.jpg` jika dipanggil dari dalam `assets/css/style.css`

---

## 🏷️ Konvensi Penamaan File: Kebab-Case

Selalu gunakan format **kebab-case** (huruf kecil semua dipisahkan tanda hubung `-`) untuk penamaan file dan folder di web.

```
✅ BENAR:
tentang-kami.html
proyek-sekolah.jpg
style-main.css

❌ HINDARI:
TentangKami.html     (CamelCase / PascalCase)
tentang_kami.html     (snake_case - kurang disukai Google)
tentang kami.html     (mengandung SPASI! Sangat berbahaya di URL)
TENTANG.HTML          (UPPERCASE)
```

### Mengapa Spasi dan Huruf Besar Berbahaya di URL?
- Server berbasis Linux/Unix bersifat **case-sensitive**: `Tentang.html` dan `tentang.html` dianggab dua file berbeda.
- Spasi pada nama file akan diubah browser menjadi `%20` (contoh: `tentang%20kami.html`), membuat URL terlihat kotor dan rentan broken link.

---

## 🎨 Konvensi Penamaan Class & ID

Sama seperti nama file, penamaan atribut `class` dan `id` juga harus mengikuti standar yang konsisten.

### 1. Penamaan Class (Metode Kebab-Case & BEM Sederhana)
Gunakan nama class yang mendeskripsikan **makna/fungsi elemen**, bukan tampilannya.

```html
<!-- ❌ SALAH: Nama class mendeskripsikan visual/tampilan -->
<div class="box-biru-tebal">...</div>
<button class="tombol-merah-besar">...</button>

<!-- ✅ BENAR: Nama class mendeskripsikan fungsi/komponen -->
<div class="card-feature">...</div>
<button class="btn btn-danger btn-lg">...</button>
```

### 2. Memahami BEM (Block, Element, Modifier) Sederhana
BEM adalah metodologi penamaan class yang sangat populer di industri frontend:

- **Block**: Komponen mandiri (`.card`, `.nav`, `.form`)
- **Element**: Bagian di dalam block (`.card__title`, `.nav__item`)
- **Modifier**: Variasi status/tampilan (`.card--featured`, `.btn--primary`)

```html
<!-- Contoh Struktur BEM dalam HTML -->
<article class="card card--featured">
  <h3 class="card__title">Website SMK</h3>
  <p class="card__desc">Deskripsi proyek...</p>
  <button class="btn btn--primary">Lihat Demo</button>
</article>
```

---

## 📊 Ringkasan Penamaan & Struktur

| Jenis | Konvensi Standar | Contoh Benar | Contoh Salah |
|---|---|---|---|
| **Nama File HTML** | `kebab-case.html` | `projects.html` | `MyProjects.html` |
| **Nama Folder** | `kebab-case` | `assets/images/` | `Assets/My Images/` |
| **Atribut ID** | `kebab-case` | `id="form-kontak"` | `id="formKontak"` |
| **Atribut Class** | `kebab-case` / BEM | `class="btn-primary"` | `class="btn_primary"` |

---

**[Lanjut: Validasi W3C & Linting →](/bab11/validasi-linting/)**
