---
title: "Clean HTML & Indentasi"
description: Aturan emas penulisan Clean HTML — standar indentasi 2 spasi, penggunaan huruf kecil, tanda kutip ganda, penutupan tag, dan keterbacaan kode.
---

Kode HTML adalah komunikasi dua arah: kepada **browser** agar halaman tampil dengan benar, dan kepada **sesama pengembang (termasuk dirimu di masa depan)** agar kode mudah dibaca dan dirawat.

---

## 🧹 Apa Itu Clean HTML?

Clean HTML adalah kode yang ditulis dengan aturan format yang konsisten, rapi, dan mudah ditelusuri alur hierarkinya.

Perhatikan perbandingan berikut:

```html
<!-- ❌ BAD: Tidak ada indentasi, bercampur huruf besar/kecil, tanpa quotes -->
<!DOCTYPE HTML>
<html>
<HEAD><TITLE>My Page</TITLE></HEAD>
<BODY>
<DIV CLASS=container>
<H1>Judul Halaman</H1>
<P>Paragraf teks yang sangat panjang tanpa struktur yang rapi sama sekali.</P>
<UL><LI>Item 1<LI>Item 2</UL>
</DIV>
</BODY>
</html>
```

```html
<!-- ✅ CLEAN: Indentasi 2 spasi, lowercase, double quotes, hierarki jelas -->
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Judul Halaman</title>
  </head>
  <body>
    <div class="container">
      <h1>Judul Halaman</h1>
      <p>Paragraf teks yang terstruktur dengan rapi.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  </body>
</html>
```

---

## 📏 6 Aturan Emas Clean HTML

### 1. Indentasi Konsisten (Gunakan 2 Spasi)
Indentasi menunjukkan **hubungan induk-anak (parent-child)** dalam pohon DOM. Setiap kali sebuah tag dibuka di dalam tag lain, geser 2 spasi ke dalam.

```html
<!-- ✅ BENAR: Hierarki terlihat jelas -->
<main>
  <section>
    <h2>Judul Section</h2>
    <p>Isi section...</p>
  </section>
</main>
```

> **Hindari menggunakan Tombol Tab fisik** jika ukuran Tab tidak dikonfigurasi 2 spasi di editor. Di VS Code, set `Tab Size: 2` dan `Insert Spaces: true`.

---

### 2. Gunakan Huruf Kecil (Lowercase) untuk Tag dan Atribut
Meskipun HTML tidak case-sensitive, konsensi standar industri adalah menggunakan **lowercase murni**.

```html
<!-- ❌ SALAH -->
<DIV CLASS="CARD">
  <IMG SRC="foto.jpg" ALT="Foto" />
</DIV>

<!-- ✅ BENAR -->
<div class="card">
  <img src="foto.jpg" alt="Foto" />
</div>
```

---

### 3. Selalu Gunakan Tanda Kutip Ganda (`"..."`) untuk Atribut
Selalu bungkus nilai atribut dengan tanda kutip ganda ganda (*double quotes*).

```html
<!-- ❌ SALAH -->
<input type=text id=nama required>
<a href='index.html' class='link'>Home</a>

<!-- ✅ BENAR -->
<input type="text" id="nama" required />
<a href="index.html" class="link">Home</a>
```

---

### 4. Selalu Tutup Tag Pasangan
Browser mungkin tetap menampilkan halaman meskipun kamu lupa menutup `</p>` atau `</li>`, tetapi ini bisa memicu bug layout yang sangat sulit dilacak.

```html
<!-- ❌ SALAH: Lupa tag penutup -->
<ul>
  <li>Item 1
  <li>Item 2
</ul>

<!-- ✅ BENAR -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

---

### 5. Format Atribut Panjang Satu per Baris
Jika sebuah elemen memiliki banyak atribut (seperti input form atau gambar), pecah menjadi beberapa baris agar tidak melampaui lebar layar (maksimal 80–100 karakter per baris).

```html
<!-- ❌ SALAH: Terlalu panjang ke kanan -->
<input type="email" id="email-pengirim" name="email_pengirim" class="form-input form-input--large" placeholder="nama@domain.com" autocomplete="email" required aria-required="true" />

<!-- ✅ BENAR: Format multi-baris yang mudah dibaca -->
<input
  type="email"
  id="email-pengirim"
  name="email_pengirim"
  class="form-input form-input--large"
  placeholder="nama@domain.com"
  autocomplete="email"
  required
  aria-required="true"
/>
```

---

### 6. Berikan Komentar Struktur yang Bermakna
Gunakan komentar HTML untuk menandai seksi utama dalam halaman yang panjang, tetapi jangan berlebihan sampai mengotori kode.

```html
<!-- ✅ BENAR: Komentar seksi utama -->
<!-- ============================================ -->
<!-- NAVIGASI UTAMA                               -->
<!-- ============================================ -->
<nav aria-label="Navigasi utama">
  ...
</nav>

<!-- ❌ HINDARI: Komentar tidak berguna pada tag biasa -->
<!-- Ini tombol submit -->
<button type="submit">Kirim</button>
```

---

**[Lanjut: Penamaan & Struktur File →](/bab11/naming-struktur/)**
