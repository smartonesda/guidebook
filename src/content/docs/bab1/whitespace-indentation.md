---
title: "Whitespace & Indentasi"
description: Memahami bagaimana browser memperlakukan spasi, tab, dan baris kosong di HTML — sumber kebingungan umum yang wajib dipahami.
---

Apakah kamu pernah menambahkan banyak spasi di HTML tapi hasilnya di browser tetap sama? Atau mengetik teks di beberapa baris tapi tampilannya jadi satu baris? Itu bukan bug — itu adalah cara kerja HTML yang by design.

---

## 🎯 Tujuan Pembelajaran

- Memahami aturan whitespace HTML yang berlaku di browser
- Menjelaskan mengapa indentasi tidak mempengaruhi tampilan
- Mengetahui pengecualian: elemen `<pre>` dan `<textarea>`
- Menerapkan konvensi indentasi 2-spasi yang profesional
- Menggunakan HTML entities untuk karakter spesial
- Memahami whitespace di antara inline elements

---

## 🧠 Teori: Aturan Whitespace Browser

Browser mengikuti satu aturan sederhana yang mengubah segalanya:

> **Semua rangkaian whitespace (spasi, tab, baris baru) diubah menjadi satu spasi tunggal.**

Aturan ini disebut **whitespace collapsing** (pelipatan whitespace).

---

## 🌍 Analogi: Editor Teks vs Pencetak Buku

Bayangkan kamu mengirim naskah ke percetakan:

```
NASKAH YANG KAMU TULIS:
"Pada     zaman       dahulu,
kala...

ada seorang     raja."

BUKU YANG DICETAK:
"Pada zaman dahulu, kala... ada seorang raja."
```

Percetakan menghilangkan spasi berlebih dan menggabungkan baris — persis seperti yang browser lakukan dengan whitespace di HTML.

---

## 🖥 Diagram: Whitespace Collapsing

```
HTML yang kamu tulis:

<p>
  Kata    pertama    kedua
  ketiga.
</p>

                     ↓ Browser memproses

Whitespace setelah tag <p>  → diabaikan
Banyak spasi antar kata      → jadi 1 spasi
Baris baru                   → jadi 1 spasi
Whitespace sebelum tag </p>  → diabaikan

                     ↓ Hasilnya:

Kata pertama kedua ketiga.
```

---

## 💻 Demonstrasi Whitespace Collapsing

Coba sendiri — semua contoh di bawah menghasilkan tampilan yang **identik**:

```html
<!-- Versi 1: Satu baris -->
<p>Halo Dunia! Ini adalah teks HTML.</p>

<!-- Versi 2: Spasi berlebih -->
<p>Halo   Dunia!   Ini   adalah   teks   HTML.</p>

<!-- Versi 3: Baris terpisah -->
<p>
Halo Dunia!
Ini adalah teks HTML.
</p>

<!-- Versi 4: Indentasi dalam -->
<p>
  Halo Dunia!
  Ini adalah teks HTML.
</p>

<!-- Versi 5: Tab dan spasi campur -->
<p>	Halo	Dunia!
		Ini adalah teks HTML.</p>
```

**Semua menampilkan:** `Halo Dunia! Ini adalah teks HTML.`

---

## 💻 Konsekuensi Penting

### 1. Baris Baru ≠ Baris Baru di Tampilan

```html
<!-- ❌ Ini TIDAK menghasilkan dua baris di browser -->
<p>
  Baris pertama.
  Baris kedua.
</p>

<!-- ✅ Gunakan <br> untuk baris baru dalam paragraf -->
<p>
  Baris pertama.<br />
  Baris kedua.
</p>

<!-- ✅ Atau paragraf terpisah untuk konten yang benar-benar berbeda -->
<p>Baris pertama.</p>
<p>Baris kedua.</p>
```

### 2. Indentasi Tidak Mempengaruhi Tampilan

Ini berarti kamu **bebas** menggunakan indentasi sesuka hati untuk membuat kode lebih mudah dibaca — tanpa mengubah tampilan:

```html
<!-- Keduanya menghasilkan tampilan yang SAMA -->

<!-- Tanpa indentasi — susah dibaca -->
<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>

<!-- Dengan indentasi — mudah dibaca -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### 3. Whitespace di Antara Inline Elements

Ini adalah perilaku yang sering mengejutkan:

```html
<!-- Ada baris baru/spasi di antara link -->
<a href="/">Beranda</a>
<a href="/tentang">Tentang</a>
<a href="/kontak">Kontak</a>

<!-- Tampilan: "Beranda Tentang Kontak" — ada spasi di antara! -->
```

```html
<!-- Tidak ada whitespace di antara link -->
<a href="/">Beranda</a><a href="/tentang">Tentang</a><a href="/kontak">Kontak</a>

<!-- Tampilan: "BerandaTentangKontak" — tidak ada spasi! -->
```

Whitespace antar inline elements **dipertahankan sebagai satu spasi** — berbeda dari whitespace dalam teks biasa.

---

## 💻 Pengecualian: `<pre>` dan `<textarea>`

Dua elemen HTML yang **mempertahankan whitespace** persis seperti yang ditulis:

### `<pre>` — Preformatted Text

```html
<pre>
  function halo() {
    console.log("Halo Dunia!");
    
    for (let i = 0; i < 3; i++) {
      console.log(i);
    }
  }
</pre>
```

Browser menampilkan ini **persis** seperti yang ditulis — termasuk indentasi, spasi berlebih, dan baris kosong. `<pre>` biasanya ditampilkan dengan font monospace.

### Kombinasi `<pre>` + `<code>`

```html
<!-- Best practice untuk menampilkan kode -->
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;title&gt;Contoh&lt;/title&gt;
  &lt;/head&gt;
&lt;/html&gt;
</code></pre>
```

:::tip
Perhatikan: jika konten `<pre>` dimulai tepat setelah `<pre>` (tanpa baris baru), baris kosong di awal tidak ditampilkan. Tapi jika ada baris baru setelah `<pre>`, baris kosong tersebut ikut ditampilkan!
:::

---

## 💻 HTML Entities — Karakter Spesial

Beberapa karakter memiliki arti khusus di HTML dan tidak bisa ditulis langsung. Gunakan **HTML entities**:

| Karakter | Entity Nama | Entity Angka | Penggunaan |
|---|---|---|---|
| Spasi non-breaking | `&nbsp;` | `&#160;` | Spasi yang tidak bisa dipecah |
| `<` (lebih kecil) | `&lt;` | `&#60;` | Tampilkan tanda `<` sebagai teks |
| `>` (lebih besar) | `&gt;` | `&#62;` | Tampilkan tanda `>` sebagai teks |
| `&` (ampersand) | `&amp;` | `&#38;` | Tampilkan `&` sebagai teks |
| `"` (tanda kutip) | `&quot;` | `&#34;` | Dalam nilai atribut |
| `'` (apostrof) | `&apos;` | `&#39;` | Dalam nilai atribut |
| © | `&copy;` | `&#169;` | Simbol hak cipta |
| ® | `&reg;` | `&#174;` | Simbol merek dagang terdaftar |
| ™ | `&trade;` | `&#8482;` | Simbol trademark |
| → | `&rarr;` | `&#8594;` | Panah kanan |
| ← | `&larr;` | `&#8592;` | Panah kiri |
| × | `&times;` | `&#215;` | Simbol perkalian |
| ÷ | `&divide;` | `&#247;` | Simbol pembagian |
| Rp | (gunakan langsung jika UTF-8) | | Rupiah bisa langsung |

### Penggunaan Praktis

```html
<!-- Menampilkan kode HTML sebagai teks biasa -->
<p>Tag paragraf ditulis sebagai <code>&lt;p&gt;</code>.</p>
<!-- Tampil: Tag paragraf ditulis sebagai <p>. -->

<!-- Hak cipta di footer -->
<footer>
  <p>&copy; 2026 HTML Guidebook. Semua hak dilindungi.</p>
</footer>
<!-- Tampil: © 2026 HTML Guidebook. Semua hak dilindungi. -->

<!-- Spasi non-breaking: "HTML5" tidak akan dipecah di baris baru -->
<p>Belajar&nbsp;HTML5 sekarang!</p>

<!-- Tanda kutip di nilai atribut -->
<p title="Dia berkata, &quot;Selamat!&quot;">Hover untuk melihat pesan</p>
```

---

## 💻 Konvensi Indentasi HTML

Indentasi tidak mempengaruhi tampilan, tapi sangat mempengaruhi keterbacaan kode. Ikuti konvensi ini:

### 2 Spasi Per Level (Direkomendasikan)

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <title>Judul</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="/">Beranda</a></li>
          <li><a href="/tentang">Tentang</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <h1>Judul Artikel</h1>
        <p>Isi paragraf.</p>
        <blockquote>
          <p>Sebuah kutipan panjang yang bermakna.</p>
        </blockquote>
      </article>
    </main>
  </body>
</html>
```

### Aturan Indentasi

| Situasi | Aturan |
|---|---|
| Elemen anak lebih dalam dari elemen induk | Ya, selalu |
| Tag pembuka dan penutup di level yang sama | Ya |
| Atribut panjang | Boleh dipecah ke baris baru, sejajar dengan atribut pertama |
| Inline elements | Biasanya dalam satu baris dengan konten |

### Memecah Atribut Panjang

```html
<!-- Satu baris — OK untuk atribut sedikit -->
<input type="email" placeholder="email@contoh.com" required />

<!-- Dipecah — lebih mudah dibaca untuk atribut banyak -->
<input
  type="email"
  name="user-email"
  id="email-field"
  placeholder="email@contoh.com"
  autocomplete="email"
  required
/>
```

### Konfigurasi VS Code untuk Indentasi

1. Buka Settings: `Ctrl+,` (Windows) / `Cmd+,` (Mac)
2. Cari "Tab Size" → set ke `2`
3. Cari "Insert Spaces" → aktifkan (gunakan spasi, bukan tab)
4. Install ekstensi **Prettier** untuk auto-format otomatis

**Prettier config** (`prettier.config.js`):
```javascript
export default {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  htmlWhitespaceSensitivity: 'css',
};
```

---

## ⚠ Kesalahan Umum

### 1. Menggunakan `<br>` Berlebihan

```html
<!-- ❌ SALAH: br untuk membuat spasi vertikal -->
<p>Judul Artikel</p>
<br />
<br />
<br />
<p>Konten artikel</p>

<!-- ✅ BENAR: gunakan CSS margin/padding -->
<h1>Judul Artikel</h1>
<p>Konten artikel</p>
<!-- Atur jarak di CSS: h1 { margin-bottom: 1.5rem; } -->
```

### 2. Menggunakan `&nbsp;` untuk Layout

```html
<!-- ❌ SALAH: nbsp untuk membuat indentasi atau spasi layout -->
<p>&nbsp;&nbsp;&nbsp;&nbsp;Teks yang diindentasi dengan nbsp</p>
<p>Kolom 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kolom 2</p>

<!-- ✅ BENAR: gunakan CSS untuk spacing -->
<p class="indented">Teks yang diindentasi</p>
<div class="columns">
  <span>Kolom 1</span>
  <span>Kolom 2</span>
</div>
```

### 3. Menulis `<` atau `>` Langsung dalam Teks

```html
<!-- ❌ SALAH: browser bisa menginterpretasi sebagai tag -->
<p>Jika nilai a > 10 dan b < 20, maka...</p>

<!-- ✅ BENAR: gunakan entities -->
<p>Jika nilai a &gt; 10 dan b &lt; 20, maka...</p>

<!-- ✅ Atau gunakan elemen <code> -->
<p>Jika nilai <code>a &gt; 10</code> dan <code>b &lt; 20</code>, maka...</p>
```

---

## ✨ Best Practice

- ✅ Gunakan **2 spasi** per level indentasi secara konsisten
- ✅ Gunakan HTML entities untuk karakter spesial (`&lt;`, `&amp;`, `&copy;`)
- ✅ Gunakan `<br>` hanya untuk baris baru dalam konten (puisi, alamat) — bukan untuk layout
- ✅ Gunakan CSS untuk spacing dan layout, bukan `&nbsp;`
- ✅ Install Prettier di VS Code untuk format otomatis
- ❌ Jangan gunakan Tab jika tim menggunakan Spaces (atau sebaliknya) — konsisten!
- ❌ Jangan tulis `<` atau `>` langsung dalam teks — gunakan `&lt;` dan `&gt;`

---

## 🎯 Mini Challenge

**Tugas 1:** Prediksi output di browser untuk setiap kode:

```html
<!-- Prediksi A -->
<p>Kata1    Kata2    Kata3</p>

<!-- Prediksi B -->
<p>
Baris1
Baris2
Baris3
</p>

<!-- Prediksi C -->
<pre>
Baris1
  Baris2 (diindentasi)
    Baris3 (lebih dalam)
</pre>

<!-- Prediksi D -->
<p>Tanda &lt; dan &gt; dan &amp;</p>
```

**Tugas 2:** Perbaiki indentasi kode berikut menggunakan konvensi 2 spasi:

```html
<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8" /><title>Test</title></head><body><header><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li></ul></nav></header><main><h1>Hello</h1><p>World</p></main></body></html>
```

---

## 🧪 Quiz

**1.** Apa yang terjadi jika kamu menulis banyak spasi di antara kata dalam tag `<p>`?
- A. Semua spasi ditampilkan
- B. Browser melipat semua whitespace menjadi satu spasi ✅
- C. Browser menampilkan error
- D. Tag `<p>` tidak bisa mengandung spasi

**2.** Elemen HTML mana yang MEMPERTAHANKAN whitespace persis seperti ditulis?
- A. `<p>`
- B. `<div>`
- C. `<pre>` ✅
- D. `<span>`

**3.** Untuk menampilkan simbol `<` sebagai teks di halaman web, kamu harus menulis...
- A. `<` langsung
- B. `&lt;` ✅
- C. `(less than)`
- D. `\<`

**4.** Mengapa menggunakan `&nbsp;` berulang kali untuk layout adalah praktik yang buruk?
- A. `&nbsp;` tidak valid di HTML5
- B. Karena CSS adalah cara yang tepat untuk mengatur spacing dan layout ✅
- C. `&nbsp;` memperlambat browser
- D. `&nbsp;` tidak tersedia di semua browser

---

## 📚 Ringkasan

| Konsep | Detail |
|---|---|
| **Whitespace collapsing** | Semua whitespace berurutan → 1 spasi |
| **Pengecualian** | `<pre>` dan `<textarea>` mempertahankan whitespace |
| **Baris baru** | Gunakan `<br>` untuk baris baru dalam konten |
| **Layout spacing** | Gunakan CSS, bukan `&nbsp;` |
| **HTML entities** | `&lt;` `&gt;` `&amp;` `&nbsp;` `&copy;` |
| **Indentasi** | 2 spasi per level, konsisten di seluruh file |
| **Tools** | Prettier untuk auto-format |

---

## ➡ Pelajaran Berikutnya

Kamu sudah memahami bagaimana browser memperlakukan kode yang kamu tulis. Tapi bagaimana kamu tahu apakah kode HTML yang kamu tulis **benar** menurut standar? Jawabannya ada di pelajaran berikutnya.

**[Lanjut: HTML Validator →](/bab1/html-validator/)**
