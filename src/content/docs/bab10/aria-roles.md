---
title: "ARIA Roles"
description: Memahami kapan dan bagaimana menggunakan ARIA roles dan attributes untuk aksesibilitas — prinsip Native HTML First, kesalahan umum ARIA, dan daftar role yang aman digunakan.
---

Di BAB 7 dan BAB 8, kita sudah berkenalan singkat dengan **ARIA** (Accessible Rich Internet Applications). Di halaman ini, kita akan membahas **filosofi dan aturan main ARIA** secara lebih mendalam.

ARIA adalah alat yang sangat kuat untuk aksesibilitas — tetapi seperti alat berdaya tinggi lainnya, ia bisa membahayakan jika digunakan tanpa pemahaman.

---

## 📜 Aturan Pertama ARIA (First Rule of ARIA)

Dokumen resmi W3C tentang ARIA secara eksplisit menyatakan:

> **Aturan Pertama ARIA:** Jika kamu bisa menggunakan elemen HTML native yang sudah memiliki fungsi dan semantik yang kamu butuhkan, **gunakan elemen HTML native tersebut** daripada mengubah elemen lain menggunakan ARIA.

```
NATIVE HTML FIRST
```

### Mengapa Native HTML Selalu Lebih Baik?

Elemen HTML native seperti `<button>`, `<a>`, `<input>`, `<select>`, `<details>` membawa tiga hal secara gratis:
1. **Semantik bawaan** — browser dan screen reader langsung tahu ini elemen apa.
2. **Keyboard support bawaan** — `<button>` bisa ditekan via `Enter` dan `Space` tanpa kode tambahan.
3. **Focus state bawaan** — browser secara otomatis mengelola urutan Tab dan indikator fokus.

Jika kamu membuat tombol dari `<div>`:
```html
<!-- ❌ Membuat tombol dari div — kamu harus menulis Ulang SEMUA perilaku bawaan: -->
<div 
  class="btn" 
  role="button" 
  tabindex="0" 
  onclick="submit()" 
  onkeydown="if(event.key==='Enter'||event.key===' ') submit()"
>
  Kirim
</div>
```

```html
<!-- ✅ Native HTML — semua sudah bekerja secara otomatis: -->
<button type="submit" class="btn">Kirim</button>
```

---

## 🎭 Memahami ARIA Roles

Atribut `role` memberikan "identitas semantik" kepada elemen yang tidak memilikinya.

### Roles yang Paling Sering Digunakan:

```html
<!-- Landmark Roles: mendefinisikan wilayah halaman -->
<div role="banner">...</div>        <!-- setara <header> -->
<div role="navigation">...</div>    <!-- setara <nav> -->
<div role="main">...</div>          <!-- setara <main> -->
<div role="contentinfo">...</div>   <!-- setara <footer> -->
<div role="search">...</div>        <!-- area pencarian -->

<!-- Widget Roles: mendefinisikan komponen interaktif -->
<div role="button">...</div>        <!-- setara <button> -->
<div role="dialog">...</div>        <!-- modal dialog -->
<div role="alert">...</div>         <!-- pesan peringatan penting -->
<div role="tooltip">...</div>       <!-- tooltip -->

<!-- Document Structure Roles -->
<div role="article">...</div>       <!-- setara <article> -->
<div role="region">...</div>        <!-- seksi berkategori -->
```

Sekali lagi: **jika elemen HTML semantik setara ada, gunakan elemen HTML tersebut!** Gunakan `role="..."` hanya jika kamu terpaksa menggunakan `<div>`/`<span>` karena keterbatasan framework atau styling tertentu.

---

## 🚨 Kesalahan-Kesalahan Fatal ARIA

### 1. ARIA Redundan (Menambahkan ARIA pada Elemen yang Sudah Semantik)

```html
<!-- ❌ SALAH: redundan — button sudah punya role button secara alami -->
<button role="button">Kirim</button>
<nav role="navigation">...</nav>
<main role="main">...</main>
<a href="/home" role="link">Beranda</a>
```

Menambahkan ARIA redundan tidak langsung merusak fungsionalitas, tapi membuat kode lebih kotor dan menunjukkan ketidakpahaman tentang HTML semantik.

### 2. ARIA yang Merusak Semantik Asli

```html
<!-- ❌ SANGAT SALAH: mengubah h1 menjadi paragraf -->
<h1 role="paragraph">Judul Halaman</h1>

<!-- ❌ SANGAT SALAH: mengubah button menjadi heading -->
<button role="heading" aria-level="2">Klik Saya</button>
```

Ini benar-benar membingungkan screen reader dan pengguna yang mengandalkannya.

### 3. ARIA Tanpa Keyboard Support

```html
<!-- ❌ SALAH: memberi role="button" tapi tidak bisa difokus keyboard -->
<div role="button" onclick="kirimForm()">Kirim</div>
<!-- Pengguna keyboard TIDAK BISA menekan tombol ini karena tidak ada tabindex="0" dan handler Enter/Space -->
```

Jika kamu memberi `role="button"`, kamu bertanggung jawab penuh untuk menambahkan `tabindex="0"` dan mendengarkan event keyboard.

### 4. Mengira ARIA Mengubah Tampilan Visual atau Perilaku

```html
<!-- ARIA TIDAK mengubah tampilan dan TIDAK menambahkan aksi JavaScript! -->
<div role="button">Tombol ini TIDAK bisa diklik secara otomatis</div>
```

ARIA **hanya memberikan informasi kepada assistive technology** — ia tidak mengubah styling CSS, tidak memicu aksi click, dan tidak membuat elemen otomatis bisa di-Tab.

---

## ✅ Kapan ARIA BENAR-BENAR Dibutuhkan?

ADA situasi di mana ARIA memang diperlukan dan merupakan cara terbaik:

### 1. Tombol Hanya Berisi Ikon (Icon-Only Button)
```html
<button aria-label="Tutup menu navigasi">
  <span aria-hidden="true">✕</span>
</button>
```

### 2. Komponen Modal Dialog
HTML `<dialog>` sudah ada, tapi untuk kompatibilitas lebih luas atau custom modal:
```html
<div role="dialog" aria-modal="true" aria-labelledby="judul-modal">
  <h2 id="judul-modal">Konfirmasi Hapus</h2>
  <p>Apakah kamu yakin?</p>
  <button type="button">Hapus</button>
  <button type="button">Batal</button>
</div>
```

### 3. Pengumuman Konten Dinamis (Live Regions)
```html
<div aria-live="polite" id="status-pesan">
  <!-- Ketika JavaScript mengisi teks di sini, screen reader mengumumkannya -->
</div>
```

### 4. Komponen Accordion / Dropdown (Status Terbuka/Tertutup)
```html
<button aria-expanded="false" aria-controls="konten-faq-1">
  Apakah course ini gratis?
</button>
<div id="konten-faq-1" hidden>
  Ya, 100% gratis.
</div>
```

---

## 📊 Matriks Keputusan: Perlu ARIA atau Tidak?

| Situasi | Solusi Terbaik | Perlu ARIA? |
|---|---|---|
| Membuat tombol biasa | `<button type="button">Kirim</button>` | ❌ Tidak |
| Membuat link navigasi | `<a href="/about">Tentang</a>` | ❌ Tidak |
| Tombol berisi ikon tanpa teks | `<button aria-label="Cari">🔍</button>` | ✅ Ya (`aria-label`) |
| Ikon dekoratif dalam tombol | `<button><span aria-hidden="true">📧</span> Email</button>` | ✅ Ya (`aria-hidden`) |
| Menu dropdown (terbuka/tutup) | Update `aria-expanded="true/false"` via JS | ✅ Ya (`aria-expanded`) |
| Area pesan sukses form | `<div aria-live="polite">...</div>` | ✅ Ya (`aria-live`) |

---

**[Lanjut: Keyboard Navigation →](/bab10/keyboard-navigation/)**
