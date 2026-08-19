---
title: "Error Corner"
description: Kesalahan umum dalam aksesibilitas web — dari menghapus focus outline hingga kesalahan penulisan alt text, penyalahgunaan ARIA, dan form tanpa label.
---

Aksesibilitas sering kali rusak bukan karena pengembang berniat buruk, melainkan karena **kebiasaan coding yang tidak disadari dampaknya**.

Halaman ini merangkum kesalahan aksesibilitas paling umum beserta solusinya.

---

## ❌ Kesalahan 1: Menghapus Focus Outline di CSS

```css
/* ❌ SANGAT DILARANG: menghapus garis fokus keyboard */
*:focus {
  outline: none;
}
```

```css
/* ✅ BENAR: perbaiki tampilan fokus tanpa menghapusnya */
:focus-visible {
  outline: 3px solid #0ea5e9;
  outline-offset: 2px;
}
```

**Mengapa ini fatal:** Menghapus outline fokus membuat pengguna keyboard tidak bisa melihat elemen mana yang sedang mereka pilih. Ini seperti mematikan pointer mouse saat bernavigasi.

---

## ❌ Kesalahan 2: Gambar Tanpa Atribut `alt` Sama Sekali

```html
<!-- ❌ SALAH: lupa atribut alt -->
<img src="foto-profil.jpg" />
<!-- Screen reader akan membacakan nama file: "foto-profil.jpg" -->
```

```html
<!-- ✅ BENAR (jika informatif): berikan alt deskriptif -->
<img src="foto-profil.jpg" alt="Foto profil Rizki Pratama, Junior Web Developer" />

<!-- ✅ BENAR (jika dekoratif): berikan alt kosong -->
<img src="hiasan-garis.png" alt="" />
```

**Mengapa ini fatal:** Tanpa `alt`, screen reader terpaksa membacakan nama file gambar (yang sering kali berisi angka acak seperti `IMG_98231.JPG`), mengganggu alur pembacaan.

---

## ❌ Kesalahan 3: Alt Text Redundan ("Gambar dari...", "Foto...")

```html
<!-- ❌ SALAH: kata "gambar" atau "foto" redundan -->
<img src="foto.jpg" alt="Gambar foto dari Rizki Pratama" />
```

```html
<!-- ✅ BENAR: langsung jelaskan subjeknya -->
<img src="foto.jpg" alt="Foto potret Rizki Pratama, Junior Web Developer" />
```

**Mengapa ini bermasalah:** Screen reader sudah mengumumkan *"Graphic"* atau *"Image"* sebelum membaca alt text. Menulis *"Gambar dari..."* membuat screen reader membaca: *"Graphic, gambar dari..."* — pengulangan yang tidak perlu.

---

## ❌ Kesalahan 4: Menggunakan `<div>` atau `<span>` sebagai Tombol

```html
<!-- ❌ SALAH: div dipaksa jadi tombol -->
<div class="btn" onclick="simpanData()">Simpan</div>
```

```html
<!-- ✅ BENAR: gunakan elemen native button -->
<button type="button" class="btn" onclick="simpanData()">Simpan</button>
```

**Mengapa ini fatal:** `<div>` tidak bisa difokus menggunakan tombol `Tab`, dan tidak bisa diaktifkan menggunakan `Enter` atau `Space` dari keyboard.

---

## ❌ Kesalahan 5: Input Form Tanpa `<label>`

```html
<!-- ❌ SALAH: hanya mengandalkan placeholder -->
<input type="email" placeholder="Masukkan Email Anda" />
```

```html
<!-- ✅ BENAR: selalu pasangkan dengan label yang terhubung -->
<label for="input-email">Alamat Email:</label>
<input type="email" id="input-email" name="email" placeholder="nama@domain.com" />
```

**Mengapa ini fatal:** Teks `placeholder` hilang saat pengguna mulai mengetik, sehingga pengguna bisa lupa kolom apa yang sedang diisi. Selain itu, screen reader tidak selalu membacakan placeholder sebagai deskripsi input.

---

## ❌ Kesalahan 6: Link Eksternal Tanpa Penjelasan "Tab Baru"

```html
<!-- ❌ SALAH: membuka tab baru tanpa memberi tahu pengguna -->
<a href="https://github.com/rizki" target="_blank">GitHub</a>
```

```html
<!-- ✅ BENAR: beri tahu pengguna via aria-label -->
<a 
  href="https://github.com/rizki" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Profil GitHub Rizki Pratama (terbuka di tab baru)"
>
  GitHub
</a>
```

**Mengapa ini penting:** Ketika link membuka window/tab baru secara tiba-tiba tanpa pemberitahuan, pengguna screen reader atau orang dengan keterbatasan kognitif bisa kebingungan karena tombol `Back` di browser tidak berfungsi seperti yang mereka harapkan.

---

## ❌ Kesalahan 7: Menyalahgunakan `tabindex` Positif

```html
<!-- ❌ SALAH: merusak alur navigasi alami -->
<input type="text" tabindex="2" />
<button tabindex="1">Kirim</button>
```

```html
<!-- ✅ BENAR: biarkan alur Tab alami sesuai urutan HTML -->
<button>Kirim</button>
<input type="text" />
```

**Mengapa ini bermasalah:** Atribut `tabindex` bernilai positif (`1`, `2`, dst.) memaksa browser melompati urutan pembacaan alami halaman, membingungkan pengguna keyboard yang mengharapkan fokus bergerak dari atas ke bawah.

---

## ❌ Kesalahan 8: Penggunaan ARIA yang Redundan atau Berlebihan

```html
<!-- ❌ SALAH: menambahkan role yang sudah ada secara alami -->
<button role="button">Simpan</button>
<nav role="navigation">...</nav>
```

```html
<!-- ✅ BENAR: biarkan semantik native bekerja tanpa ARIA ekstra -->
<button type="button">Simpan</button>
<nav>...</nav>
```

**Mengapa ini bermasalah:** ARIA yang tidak perlu mengotori kode dan berisiko konflik dengan semantik bawaan browser.

---

## ❌ Kesalahan 9: Mengabaikan Kontras Warna Teks

```html
<!-- ❌ SALAH: teks abu-abu muda di atas background putih (kontras rendah) -->
<p style="color: #ccc; background-color: #fff;">Teks ini sulit dibaca.</p>
```

```html
<!-- ✅ BENAR: pastikan kontras warna cukup tinggi (rasio minimal 4.5:1) -->
<p style="color: #333; background-color: #fff;">Teks ini mudah dibaca oleh semua orang.</p>
```

**Mengapa ini penting:** Teks dengan kontras rendah sulit dibaca oleh orang dengan gangguan penglihatan ringan, orang tua, atau siapa pun yang menggunakan smartphone di bawah terik matahari.

---

**[Lanjut: Ringkasan →](/bab10/ringkasan/)**
