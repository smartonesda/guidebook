---
title: "Global Attributes"
description: Memahami attribute-attribute yang bisa digunakan pada semua element HTML — id, class, style, title, lang, dir, tabindex, hidden, contenteditable, dan spellcheck.
---

Ada dua kategori attribute di HTML:

1. **Attribute spesifik element** — hanya berlaku di element tertentu. Contoh: `href` hanya untuk `<a>`, `src` hanya untuk `<img>` dan `<script>`, `action` hanya untuk `<form>`.

2. **Global attributes** — bisa digunakan di **semua element HTML**, tidak peduli jenis elementnya.

Di halaman ini, kita akan membahas global attributes yang paling penting dan paling sering digunakan.

---

## 🌐 Daftar Global Attributes Utama

### 1. `id` — Identitas Unik Element

Attribute `id` memberikan **identitas unik** kepada sebuah element di dalam satu halaman.

```html
<h2 id="tentang-saya">Tentang Saya</h2>
<section id="kontak">...</section>
<input id="nama-pengirim" type="text" />
```

**Aturan `id` yang wajib diikuti:**
- Nilainya **harus unik** di seluruh halaman — tidak boleh ada dua element dengan `id` yang sama.
- Tidak boleh mengandung spasi.
- Sebaiknya dimulai dengan huruf, bukan angka.
- Case-sensitive: `id="Nama"` berbeda dari `id="nama"`.

**Siapa yang menggunakan `id`?**

| Pengguna | Cara Menggunakan | Contoh |
|---|---|---|
| **CSS** | Selektor `#id` | `#kontak { background: blue; }` |
| **JavaScript** | `getElementById()` | `document.getElementById("kontak")` |
| **HTML anchor** | URL hash `#id` | `<a href="#kontak">` |
| **Label form** | Atribut `for` | `<label for="nama-pengirim">` |

**Kapan menggunakan `id`?**
- Saat kamu butuh target yang benar-benar unik (satu elemen spesifik).
- Untuk navigasi dalam halaman (anchor link `#`).
- Untuk menghubungkan `<label>` dengan `<input>`.
- Untuk JavaScript yang perlu menemukan satu elemen spesifik.

---

### 2. `class` — Label Kategori Element

Attribute `class` memberikan satu atau lebih **label kategori** kepada sebuah element.

```html
<p class="teks-intro">Selamat datang...</p>
<button class="btn btn-primary">Kirim</button>
<article class="card card-proyek featured">...</article>
```

**Karakteristik `class`:**
- Satu element bisa memiliki **banyak class sekaligus** — dipisahkan spasi.
- Banyak element boleh memiliki **class yang sama**.
- Tidak perlu unik seperti `id`.

**Satu element, banyak class:**
```html
<button class="btn btn-primary large rounded">Kirim Pesan</button>
```
Element ini punya 4 class: `btn`, `btn-primary`, `large`, `rounded`. CSS bisa menargetnya dengan salah satu atau kombinasi class ini.

**Siapa yang menggunakan `class`?**

| Pengguna | Cara Menggunakan |
|---|---|
| **CSS** | Selektor `.class` |
| **JavaScript** | `getElementsByClassName()`, `querySelector()` |

**Kapan menggunakan `class`?**
- Untuk styling CSS yang diterapkan ke banyak element sekaligus.
- Untuk mengelompokkan element berdasarkan jenis atau fungsinya.
- Untuk komponen UI yang berulang (card, button, badge, dsb.).

---

### 3. `style` — Inline Styling

Attribute `style` memungkinkan kita menulis CSS **langsung di dalam element** tanpa file CSS terpisah.

```html
<p style="color: red; font-size: 18px; margin-top: 20px;">
  Teks ini berwarna merah.
</p>
```

**Kapan menggunakan `style`?**
- Styling yang benar-benar unik dan tidak akan dipakai di tempat lain.
- Prototyping cepat atau testing.
- Email HTML (di mana file CSS eksternal tidak bisa digunakan).

**Kapan JANGAN menggunakan `style`?**
- Untuk styling yang berulang — gunakan CSS class.
- Untuk tema atau design system — gunakan CSS eksternal.
- Ketika kamu punya file `.css` — `style` inline lebih sulit di-maintain.

```html
<!-- ❌ Hindari: styling berulang via inline style -->
<p style="color: blue; font-weight: bold;">Paragraf 1</p>
<p style="color: blue; font-weight: bold;">Paragraf 2</p>
<p style="color: blue; font-weight: bold;">Paragraf 3</p>

<!-- ✅ Lebih baik: gunakan class -->
<p class="teks-penting">Paragraf 1</p>
<p class="teks-penting">Paragraf 2</p>
<p class="teks-penting">Paragraf 3</p>
```

> **Catatan:** Inline style memiliki **spesifisitas (specificity) tertinggi** dalam CSS — artinya ia akan mengalahkan class CSS manapun. Ini bisa menyebabkan bug styling yang sulit dilacak.

---

### 4. `title` — Tooltip Informasi

Attribute `title` menampilkan **teks tooltip** ketika pengguna mengarahkan kursor ke atas element (hover).

```html
<abbr title="Rekayasa Perangkat Lunak">RPL</abbr>

<a href="/proyek" title="Lihat semua proyek web saya">Proyek</a>

<button title="Hapus item ini dari daftar">🗑️</button>
```

**Kapan menggunakan `title`?**
- Untuk memberikan informasi tambahan tanpa memenuhi layout.
- Untuk menjelaskan singkatan (dikombinasikan dengan `<abbr>`).
- Untuk icon atau tombol yang tidak memiliki teks label — sebagai fallback.

**Keterbatasan `title`:**
- Tidak muncul di perangkat touch (HP/tablet) — pengguna tidak bisa "hover" di layar sentuh.
- Screen reader tidak selalu membacanya secara konsisten.
- Jangan mengandalkan `title` untuk informasi yang krusial.

---

### 5. `lang` — Bahasa Konten

Attribute `lang` memberitahu browser dan alat bantu bahasa apa yang digunakan dalam element tersebut.

```html
<!-- Di tag <html> — bahasa utama dokumen -->
<html lang="id">

<!-- Override untuk bagian tertentu -->
<p lang="en">This paragraph is written in English.</p>
<p lang="ja">これは日本語のテキストです。</p>
```

**Kapan menggunakan `lang`?**
- Selalu di tag `<html>` — menentukan bahasa default seluruh dokumen.
- Ketika ada teks dalam bahasa yang berbeda dari bahasa utama.

**Mengapa penting?**
- Browser tahu font mana yang tepat untuk karakter tertentu.
- Screen reader tahu aksen/pengucapan yang benar.
- Search engine memahami bahasa konten untuk indexing yang tepat.
- Fitur translate browser berfungsi lebih akurat.

---

### 6. `dir` — Arah Teks

Attribute `dir` menentukan arah penulisan teks.

```html
<p dir="ltr">Teks kiri ke kanan (Latin, default)</p>
<p dir="rtl">نص عربي من اليمين إلى اليسار</p>
<p dir="auto">Teks dengan arah otomatis berdasarkan konten</p>
```

Nilai yang valid: `ltr` (left-to-right), `rtl` (right-to-left), `auto`.

Untuk bahasa Indonesia dan sebagian besar bahasa Eropa, kamu tidak perlu menentukan `dir` karena defaultnya sudah `ltr`.

---

### 7. `tabindex` — Urutan Navigasi Keyboard

Attribute `tabindex` mengontrol **urutan fokus keyboard** (tombol Tab) pada element di halaman.

```html
<!-- Ikut urutan alami DOM (default) -->
<input tabindex="0" type="text" />

<!-- Dilewati saat Tab -->
<div tabindex="-1">Tidak bisa difokus via Tab</div>

<!-- ⚠️ HINDARI: urutan tab kustom -->
<button tabindex="3">Tombol 3</button>
<button tabindex="1">Tombol 1</button>
<button tabindex="2">Tombol 2</button>
```

**Nilai `tabindex`:**
- `0` — element masuk ke urutan tab alami (posisi dalam DOM).
- `-1` — element tidak masuk ke urutan tab, tapi masih bisa difokus via JavaScript (`element.focus()`).
- Angka positif (`1`, `2`, `3`, ...) — **hindari!** Membuat urutan tab kustom yang membingungkan dan sulit di-maintain.

**Kapan menggunakan `tabindex`?**
- `tabindex="0"` — untuk element non-interaktif yang perlu bisa difokus keyboard (misal: card yang bisa diklik via JavaScript).
- `tabindex="-1"` — untuk element yang perlu difokus secara programatik via JavaScript (misal: modal dialog yang muncul).
- Angka positif — hampir tidak pernah.

---

### 8. `hidden` — Menyembunyikan Element

Attribute `hidden` menyembunyikan element dari tampilan dan dari screen reader.

```html
<div hidden>
  Konten ini tidak tampak di halaman.
</div>

<!-- JavaScript bisa menampilkannya kembali: -->
<!-- element.removeAttribute('hidden') -->
```

Berbeda dengan `display: none` di CSS, `hidden` adalah attribute HTML yang memberikan makna semantik: "konten ini memang tidak relevan saat ini."

---

### 9. `contenteditable` — Konten yang Bisa Diedit

Membuat konten element bisa diedit langsung oleh pengguna di browser, seperti editor teks sederhana.

```html
<div contenteditable="true">
  Klik di sini dan kamu bisa mengedit teks ini langsung di browser!
</div>
```

Nilai: `"true"` atau `"false"`. Digunakan untuk rich text editor, note-taking app, dan interaksi edit-in-place.

---

### 10. `spellcheck` — Pemeriksaan Ejaan

Mengaktifkan atau menonaktifkan pemeriksaan ejaan bawaan browser.

```html
<!-- Aktif (default untuk textarea dan contenteditable) -->
<textarea spellcheck="true"></textarea>

<!-- Nonaktif (berguna untuk input kode atau kata teknis) -->
<textarea spellcheck="false" placeholder="Tulis kode HTML di sini..."></textarea>
```

---

## 📊 Ringkasan Global Attributes

| Attribute | Nilai Umum | Fungsi |
|---|---|---|
| `id` | Teks unik | Identitas unik element di halaman |
| `class` | Satu/banyak nama | Label kategori untuk CSS & JS |
| `style` | Deklarasi CSS | Inline styling langsung |
| `title` | Teks bebas | Tooltip saat hover |
| `lang` | Kode bahasa (`id`, `en`, `ja`) | Bahasa konten element |
| `dir` | `ltr`, `rtl`, `auto` | Arah penulisan teks |
| `tabindex` | `-1`, `0`, angka positif | Urutan fokus keyboard |
| `hidden` | (boolean) | Menyembunyikan element |
| `contenteditable` | `true`, `false` | Konten bisa diedit pengguna |
| `spellcheck` | `true`, `false` | Pemeriksaan ejaan |

---

Di halaman berikutnya, kita akan membahas perbedaan mendasar antara `id` dan `class` — dua attribute yang paling sering digunakan tapi juga paling sering tertukar.

**[Lanjut: id vs class →](/bab7/attribute-id-class/)**
