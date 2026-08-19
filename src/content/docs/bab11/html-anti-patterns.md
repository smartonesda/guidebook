---
title: "HTML Anti-Patterns"
description: Membedah 10 pola buruk (anti-patterns) penulisan HTML yang paling sering dilakukan pemula beserta analisis dampak dan solusi perbaikannya.
---

**Anti-Pattern** adalah pola penulisan kode yang kelihatan seperti solusi praktis saat dibuat, tetapi sebenarnya memicu masalah besar di kemudian hari (bug, masalah performa, atau sulit dirawat).

Berikut adalah 10 Anti-Pattern HTML yang paling sering dijumpai beserta perbaikannya:

---

## 🚫 1. Div-Soup (Membungkus Semua Hal dengan `<div>`)

```html
<!-- ❌ ANTI-PATTERN: Terlalu banyak div tanpa makna -->
<div class="header-box">
  <div class="menu-outer">
    <div class="menu-item"><a href="/">Home</a></div>
  </div>
</div>

<!-- ✅ BEST PRACTICE: Gunakan elemen semantik -->
<header>
  <nav aria-label="Navigasi utama">
    <a href="/">Home</a>
  </nav>
</header>
```

---

## 🚫 2. Heading Level Hopping (Melompati Tingkatan Heading)

```html
<!-- ❌ ANTI-PATTERN: Loncat dari h1 ke h4 karena ingin ukuran teks lebih kecil -->
<h1>Judul Utama</h1>
<h4>Sub Judul</h4>

<!-- ✅ BEST PRACTICE: Jaga urutan hierarki, ubah ukuran visual via CSS -->
<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
```

---

## 🚫 3. Inline Styling Berlebihan

```html
<!-- ❌ ANTI-PATTERN: Mengotorkan HTML dengan atribut style -->
<p style="color: red; font-size: 18px; margin-top: 20px; font-weight: bold;">Pesan Error</p>

<!-- ✅ BEST PRACTICE: Pisahkan tampilan ke file CSS -->
<p class="error-message">Pesan Error</p>
```

---

## 🚫 4. Tombol Semu menggunakan Link Kosong (`href="#"`)

```html
<!-- ❌ ANTI-PATTERN: Menggunakan link untuk memicu fungsi JavaScript -->
<a href="#" onclick="bukaModal()">Buka Dialog</a>

<!-- ✅ BEST PRACTICE: Gunakan elemen button asli -->
<button type="button" onclick="bukaModal()">Buka Dialog</button>
```

---

## 🚫 5. Mengabaikan Atribut `alt` pada Gambar

```html
<!-- ❌ ANTI-PATTERN: Lupa atribut alt atau menyisakan nama file acak -->
<img src="banner.jpg" />
<img src="foto.jpg" alt="IMG_10293.JPG" />

<!-- ✅ BEST PRACTICE: Sertakan deskripsi makna gambar atau alt="" jika hiasan -->
<img src="banner.jpg" alt="Promo Diskon Magang RPL 2026" />
<img src="hiasan.png" alt="" />
```

---

## 🚫 6. Duplicate ID dalam Satu Halaman

```html
<!-- ❌ ANTI-PATTERN: Menggunakan ID yang sama di beberapa elemen -->
<input id="nama" type="text" />
<input id="nama" type="text" />

<!-- ✅ BEST PRACTICE: ID wajib unik per halaman -->
<input id="nama-depan" type="text" />
<input id="nama-belakang" type="text" />
```

---

## 🚫 7. Membungkus Blok Besar di dalam Elemen Inline

```html
<!-- ❌ ANTI-PATTERN: Membungkus elemen block (div, h2) di dalam tag p/span -->
<p>
  <div>Teks di dalam div di dalam paragraf</div>
</p>

<!-- ✅ BEST PRACTICE: Patuhi aturan nesting HTML -->
<div>
  <p>Teks paragraf yang benar.</p>
</div>
```

---

## 🚫 8. Lupa Atribut `type` pada Tombol di dalam Form

```html
<!-- ❌ ANTI-PATTERN: Button tanpa type dianggap type="submit" secara default -->
<form>
  <button onclick="bukaPreview()">Preview</button> <!-- Akan tidak sengaja submit form! -->
  <button type="submit">Kirim</button>
</form>

<!-- ✅ BEST PRACTICE: Berikan type tegas pada setiap button -->
<form>
  <button type="button" onclick="bukaPreview()">Preview</button>
  <button type="submit">Kirim</button>
</form>
```

---

## 🚫 9. Menggunakan Placeholder sebagai Pengganti Label

```html
<!-- ❌ ANTI-PATTERN: Placeholder hilang saat diketik, merusak aksesibilitas -->
<input type="text" placeholder="Nama Lengkap" />

<!-- ✅ BEST PRACTICE: Selalu sandingkan dengan label resmi -->
<label for="input-nama">Nama Lengkap:</label>
<input type="text" id="input-nama" placeholder="Contoh: Budi Santoso" />
```

---

## 🚫 10. Membuka Link Baru (`target="_blank"`) Tanpa `rel` Keamanan

```html
<!-- ❌ ANTI-PATTERN: Rentan serangan Reverse Tabnapping -->
<a href="https://google.com" target="_blank">Buka Google</a>

<!-- ✅ BEST PRACTICE: Selalu pasangkan dengan rel="noopener noreferrer" -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Buka Google</a>
```

---

**[Lanjut: Performa Dasar HTML →](/bab11/html-performance/)**
