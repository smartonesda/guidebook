---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat menggunakan HTML Attributes — dari yang membingungkan hingga yang benar-benar merusak fungsionalitas.
---

Attribute adalah tempat di mana banyak "kesalahan diam" bersembunyi — kode tetap berjalan, tidak ada error merah di console, tapi sesuatu yang krusial tidak berfungsi dengan benar.

Inilah daftar kesalahan yang paling sering ditemukan.

---

## ❌ Kesalahan 1: Menganggap `id` dan `class` Sama

```html
<!-- ❌ Menggunakan id untuk elemen yang berulang -->
<article id="card">Proyek 1</article>
<article id="card">Proyek 2</article>  <!-- id duplikat! -->
<article id="card">Proyek 3</article>  <!-- id duplikat! -->
```

```html
<!-- ✅ Benar: class untuk elemen berulang, id untuk yang unik -->
<article class="card" id="card-1">Proyek 1</article>
<article class="card" id="card-2">Proyek 2</article>
<article class="card" id="card-3">Proyek 3</article>
```

**Mengapa berbahaya:** `id` duplikat menyebabkan:
- `document.getElementById()` hanya menemukan element pertama.
- Anchor link `href="#card"` hanya melompat ke element pertama.
- Validator HTML melaporkan error.
- CSS `#card` masih bekerja tapi hasilnya tidak terduga.

---

## ❌ Kesalahan 2: Menganggap `name` dan `id` Sama

```html
<!-- ❌ Salah: menyamakan name dan id -->
<label for="email">Email:</label>
<input id="email" name="email" />
<!-- Ini kebetulan sama, tapi tidak selalu harus sama! -->

<!-- Lebih buruk: -->
<label for="nama_lengkap">Nama:</label>
<input id="input-nama" name="nama_lengkap" />
<!-- for harus sama dengan id, bukan name! -->
```

```html
<!-- ✅ Benar -->
<label for="input-nama">Nama:</label>
<input id="input-nama" name="nama_lengkap" />
<!-- for=input-nama → id=input-nama ✓ -->
<!-- name=nama_lengkap → untuk server ✓ -->
```

`for` pada label selalu menunjuk ke `id` input — bukan ke `name`. Keduanya bisa berbeda nilai.

---

## ❌ Kesalahan 3: Menulis `required="false"` atau `disabled="false"`

```html
<!-- ❌ SALAH: ini TIDAK menonaktifkan required! -->
<input type="text" required="false" />
<input type="text" required="0" />
<input type="text" required="no" />
<button disabled="false">Kirim</button>
```

```html
<!-- ✅ BENAR: untuk menonaktifkan, hapus attribute-nya -->
<input type="text" />              <!-- tidak required -->
<input type="text" required />    <!-- required -->
<button>Kirim</button>            <!-- aktif -->
<button disabled>Kirim</button>   <!-- dinonaktifkan -->
```

Boolean attribute bekerja berdasarkan **keberadaan** attribute, bukan nilainya. Browser mengabaikan nilai `"false"` — yang dilihat hanyalah "ada atau tidak ada".

---

## ❌ Kesalahan 4: Menggunakan `style` Inline untuk Semua Styling

```html
<!-- ❌ Hindari: CSS via inline style untuk semua elemen -->
<h1 style="font-size: 2rem; color: #1a1a1a; margin-bottom: 16px; font-weight: 700;">Judul</h1>
<p style="font-size: 1rem; line-height: 1.6; color: #333; margin-bottom: 12px;">Paragraf</p>
<button style="background: blue; color: white; padding: 8px 16px; border-radius: 4px; border: none; cursor: pointer;">Kirim</button>
```

**Masalah:**
- Sulit di-maintain — untuk mengubah satu warna, harus cari dan edit di seluruh file.
- Tidak bisa reuse — setiap element harus ditulis ulang.
- Inline style punya spesifisitas tertinggi — bisa memblokir override CSS class.
- Tidak bisa dibuat responsive dengan mudah.
- Membuat HTML sulit dibaca.

```html
<!-- ✅ Lebih baik: gunakan class -->
<h1 class="heading-primary">Judul</h1>
<p class="body-text">Paragraf</p>
<button class="btn btn-primary">Kirim</button>
```

---

## ❌ Kesalahan 5: Menggunakan `data-*` untuk Menggantikan Attribute Standar

```html
<!-- ❌ SALAH: ada attribute standar yang lebih tepat -->
<a data-href="/tentang">Tentang Kami</a>    <!-- gunakan href -->
<img data-src="foto.jpg" data-alt="Foto" /> <!-- gunakan src dan alt -->
<input data-type="email" />                  <!-- gunakan type -->
<form data-action="/submit" data-method="post"> <!-- gunakan action dan method -->
```

```html
<!-- ✅ BENAR: gunakan attribute standar, data-* untuk tambahan kustom -->
<a href="/tentang" data-section="nav">Tentang Kami</a>
<img src="foto.jpg" alt="Foto" data-original="foto-hd.jpg" />
<input type="email" data-validate="email" />
```

`data-*` untuk data kustom yang tidak ada attribute standarnya — bukan untuk menggantikan yang sudah ada.

---

## ❌ Kesalahan 6: ARIA yang Berlebihan atau Redundan

```html
<!-- ❌ SALAH: ARIA redundan pada element yang sudah semantik -->
<button role="button">Kirim</button>         <!-- button sudah punya role button -->
<nav role="navigation">...</nav>             <!-- nav sudah punya role navigation -->
<h1 role="heading" aria-level="1">Judul</h1> <!-- h1 sudah heading level 1 -->
<a href="/home" role="link">Beranda</a>      <!-- a sudah punya role link -->
```

```html
<!-- ✅ BENAR: gunakan element semantik, ARIA hanya untuk yang tidak ada element-nya -->
<button>Kirim</button>
<nav>...</nav>
<h1>Judul</h1>
<a href="/home">Beranda</a>
```

ARIA yang duplikat tidak berbahaya secara fungsional, tapi mempersulit pemahaman kode.

---

## ❌ Kesalahan 7: `aria-hidden="true"` pada Element yang Bisa Difokus

```html
<!-- ❌ SANGAT BERBAHAYA: menyembunyikan link dari screen reader tapi masih bisa difokus keyboard -->
<a href="/login" aria-hidden="true">Login</a>

<!-- Pengguna keyboard bisa Tab ke link ini, tapi screen reader tidak mengumumkannya -->
<!-- Pengguna buta yang pakai keyboard akan sangat kebingungan -->
```

```html
<!-- ✅ Jika memang harus disembunyikan dari semua pengguna: -->
<a href="/login" hidden>Login</a>  <!-- tersembunyi dari visual DAN screen reader DAN keyboard -->
```

`aria-hidden="true"` hanya untuk element yang **tidak bisa difokus** dan murni dekoratif. Jangan pernah gunakan pada link, tombol, atau input.

---

## ❌ Kesalahan 8: `tabindex` Positif Tanpa Alasan

```html
<!-- ❌ Hindari: urutan tab kustom yang membingungkan -->
<button tabindex="3">Tombol C</button>
<input tabindex="1" type="text" />  <!-- Tab 1 -->
<button tabindex="2">Tombol B</button>
<button tabindex="4">Tombol D</button>
```

Pengguna keyboard menekan Tab berulang — urutannya: input → Tombol B → Tombol C → Tombol D. Tapi secara visual, urutan di layar mungkin berbeda. Ini sangat membingungkan.

```html
<!-- ✅ Biarkan urutan Tab mengikuti urutan DOM -->
<input type="text" />   <!-- Tab 1 (sesuai posisi di HTML) -->
<button>Tombol B</button>  <!-- Tab 2 -->
<button>Tombol C</button>  <!-- Tab 3 -->
<button>Tombol D</button>  <!-- Tab 4 -->
```

Gunakan `tabindex="0"` hanya jika perlu menambahkan elemen non-interaktif ke urutan tab. Gunakan `tabindex="-1"` untuk elemen yang perlu difokus via JavaScript. Hindari angka positif.

---

## ❌ Kesalahan 9: Tidak Memasang `rel="noopener noreferrer"` pada Link Eksternal

```html
<!-- ❌ Berbahaya: link eksternal di tab baru tanpa rel -->
<a href="https://external-site.com" target="_blank">Kunjungi</a>
```

Tanpa `rel="noopener"`, halaman yang dibuka di tab baru bisa mengakses `window.opener` — referensi ke tab asalmu — dan berpotensi memanipulasi halaman aslimu (serangan "reverse tabnapping").

```html
<!-- ✅ BENAR: selalu pasangkan rel untuk link eksternal di tab baru -->
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
  Kunjungi
</a>
```

**Aturan sederhana:** `target="_blank"` selalu diikuti `rel="noopener noreferrer"`.

---

## ❌ Kesalahan 10: Menganggap Semua Attribute Berlaku di Semua Element

```html
<!-- ❌ SALAH: attribute yang tidak berlaku di element ini -->
<p href="/home">Teks paragraf</p>         <!-- href hanya untuk <a> -->
<div required>Konten</div>                <!-- required hanya untuk form elements -->
<span src="foto.jpg">Teks</span>          <!-- src hanya untuk <img>, <script>, dll. -->
```

Browser akan mengabaikan attribute yang tidak dikenali atau tidak berlaku — tidak ada error, tapi fungsinya juga tidak bekerja. Ini adalah "silent bug" yang membingungkan.

Selalu periksa: apakah attribute yang kamu tulis memang berlaku untuk element tersebut?

---

## ❌ Kesalahan 11: Lupa Bahwa `class` Bisa Memuat Banyak Nilai

```html
<!-- ❌ Salah: menumpuk banyak class attribute -->
<div class="card" class="featured" class="active">...</div>
<!-- Hanya class pertama yang dibaca browser! -->
```

```html
<!-- ✅ BENAR: semua class dalam satu attribute, dipisahkan spasi -->
<div class="card featured active">...</div>
```

Satu element hanya boleh punya **satu** attribute `class` — tapi nilainya bisa berisi banyak class yang dipisahkan spasi.

---

**[Lanjut: Ringkasan →](/bab7/ringkasan/)**
