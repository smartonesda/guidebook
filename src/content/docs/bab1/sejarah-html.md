---
title: "Sejarah HTML"
description: Perjalanan HTML dari garasi peneliti CERN 1989 hingga HTML5 Living Standard — mengapa sejarah ini relevan untuk developer modern.
---

> *"Saya hanya perlu membuat cara agar ilmuwan di CERN bisa berbagi dokumen penelitian. Saya tidak menyangka ini akan mengubah dunia."*
> — Tim Berners-Lee, Pencipta HTML

Memahami sejarah HTML bukan sekadar pengetahuan umum. Ini akan membantumu mengerti **mengapa** HTML dirancang seperti sekarang, mengapa beberapa hal terasa tidak konsisten, dan mengapa standar HTML terus berkembang.

---

## 🎯 Tujuan Pembelajaran

- Menceritakan sejarah HTML dari 1989 hingga hari ini
- Memahami mengapa HTML berevolusi pada setiap versinya
- Menjelaskan masalah "Browser Wars" dan dampaknya
- Memahami siapa yang mengelola standar HTML saat ini

---

## 🧠 Teori: Kelahiran Web dan HTML

### 1989: Masalah yang Melahirkan Solusi

Tahun 1989. Tim Berners-Lee, seorang ilmuwan komputer berusia 33 tahun, bekerja di **CERN** — laboratorium fisika partikel terbesar di dunia, berlokasi di perbatasan Swiss-Prancis.

CERN memiliki ribuan peneliti dari seluruh dunia. Mereka menghadapi masalah yang terdengar sederhana tapi sangat menyiksa:

> *"Bagaimana cara kita berbagi dokumen penelitian antar departemen, antar komputer yang berbeda sistem operasi, tanpa kehilangan format dan tanpa harus kirim disket fisik?"*

Pada **Maret 1989**, Tim mengajukan proposal berjudul *"Information Management: A Proposal"* kepada atasannya, Mike Sendall.

Respons Mike legendaris: ia menulis di halaman pertama proposal itu, **"Vague but exciting"** — *"Tidak jelas tapi menarik."*

Tim tidak menyerah.

---

## 🖥 Diagram: Timeline HTML

```
1989 ──► Tim Berners-Lee ajukan proposal di CERN
         │
1990 ──► Tiga teknologi fundamental diciptakan:
         ├── HTML  (bahasa dokumen)
         ├── HTTP  (protokol transfer)
         └── URL   (sistem alamat)
         │
1991 ──► Website PERTAMA di dunia: info.cern.ch
         │
1993 ──► HTML 1.0 — 18 tag dasar
         │
1994 ──► Netscape Navigator lahir → Browser Wars dimulai
         │
1995 ──► HTML 2.0 — standar formal pertama
         │
1996 ──► Internet Explorer vs Netscape — fragmentasi standar
         │
1997 ──► HTML 3.2 — W3C mulai mengambil kendali
         │
1997 ──► HTML 4.0 — pemisahan struktur dan presentasi
         │
1999 ──► HTML 4.01 — revisi stabil, digunakan 15+ tahun
         │
2000 ──► XHTML 1.0 — XML-based HTML yang lebih ketat
         │
2004 ──► WHATWG dibentuk (Apple, Mozilla, Opera)
         │
2008 ──► HTML5 draft pertama dipublikasikan
         │
2014 ──► HTML5 menjadi rekomendasi resmi W3C
         │
2019 ──► W3C & WHATWG sepakat: HTML Living Standard
         │
Kini ──► HTML terus berkembang sebagai Living Standard
```

---

## 🌍 Analogi: Evolusi Bahasa Manusia

HTML berevolusi seperti bahasa manusia. Bahasa Indonesia pada 1945 berbeda dari yang kita gunakan hari ini — ada kata-kata baru, aturan yang disederhanakan, dan beberapa kata lama yang tidak lagi digunakan.

Begitu pula HTML:
- Tag lama seperti `<font>`, `<center>`, `<blink>` tidak lagi digunakan
- Tag baru seperti `<header>`, `<article>`, `<canvas>` ditambahkan
- Standar diperketat untuk konsistensi antar browser

---

## 📖 Setiap Era HTML — Penjelasan Mendalam

### Era 1: HTML 1.0 — 1993

HTML pertama yang terdokumentasi secara formal hanya memiliki **18 tag**. Tidak ada gambar, tidak ada tabel, tidak ada form, tidak ada CSS.

```html
<!-- HTML 1.0 era — sesederhana ini -->
<title>Dokumen Pertama</title>
<h1>Penelitian Fisika Partikel</h1>
<p>Hasil percobaan menunjukkan...</p>
<a href="referensi.html">Lihat referensi</a>
```

Menariknya: tidak ada `<!DOCTYPE>`, tidak ada `<html>`, `<head>`, atau `<body>`. Hanya teks dengan beberapa tag.

### Era 2: Browser Wars — 1994-1998

Netscape Navigator muncul pada 1994 dan mengubah segalanya. Tiba-tiba, web bukan hanya untuk ilmuwan — semua orang bisa mengaksesnya.

Netscape dan Microsoft (dengan Internet Explorer) mulai menambahkan tag HTML **sendiri** yang tidak ada di standar:
- Netscape memperkenalkan `<blink>` (teks berkedip)
- IE memperkenalkan `<marquee>` (teks berjalan)
- Keduanya mengimplementasikan CSS dengan cara yang berbeda

Akibatnya: developer harus menulis kode berbeda untuk setiap browser. Ini adalah era paling frustrasi dalam sejarah web development.

:::caution
**Dampak Browser Wars yang masih terasa hari ini:**

Alasan mengapa ada banyak CSS prefix seperti `-webkit-`, `-moz-`, `-ms-` adalah warisan Browser Wars — setiap browser mengimplementasikan fitur baru dengan prefix mereka sendiri sebelum menjadi standar.
:::

### Era 3: HTML 4.01 — 1999

W3C (World Wide Web Consortium) — organisasi standar web yang didirikan Tim Berners-Lee sendiri — akhirnya berhasil mengkonsolidasi standar.

HTML 4.01 memperkenalkan konsep paling penting: **pemisahan struktur dan presentasi**.

```html
<!-- HTML 4.01 mulai mendorong ini: -->
<!-- ❌ Jangan: tampilan di HTML -->
<font color="red" size="5"><b>Judul</b></font>

<!-- ✅ Lakukan: struktur di HTML, tampilan di CSS -->
<h1 class="judul-utama">Judul</h1>
/* CSS: .judul-utama { color: red; font-size: 2rem; } */
```

### Era 4: XHTML — 2000-2010

XHTML adalah upaya membuat HTML lebih "ketat" dengan mengikuti aturan XML:
- Semua tag **harus** ditutup: `<br />`, `<img />`
- Semua atribut **harus** menggunakan tanda kutip
- Tag harus ditulis huruf kecil semua

XHTML melatih developer untuk menulis HTML yang lebih rapi, tapi terlalu kaku dan akhirnya digantikan oleh HTML5.

### Era 5: WHATWG dan Kelahiran HTML5 — 2004-2014

Pada 2004, Apple, Mozilla, dan Opera menganggap W3C terlalu fokus pada XHTML dan mengabaikan kebutuhan web yang berkembang pesat (khususnya web apps).

Mereka membentuk **WHATWG** (Web Hypertext Application Technology Working Group) dan mulai mengembangkan HTML5 secara independen.

Draft pertama HTML5 dipublikasikan pada 2008, dan pada **28 Oktober 2014**, HTML5 menjadi rekomendasi resmi W3C.

---

## 💻 Perbandingan: Sebelum dan Sesudah HTML5

```html
<!-- ❌ Sebelum HTML5: Semua adalah div -->
<div id="header">
  <div id="navigation">
    <ul>
      <li><a href="/">Beranda</a></li>
    </ul>
  </div>
</div>
<div id="main-content">
  <div class="article">
    <div class="article-title">...</div>
  </div>
</div>
<div id="footer">...</div>

<!-- ✅ HTML5: Tag semantik yang bermakna -->
<header>
  <nav>
    <ul>
      <li><a href="/">Beranda</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>...</h1>
  </article>
</main>
<footer>...</footer>
```

---

## 🔍 HTML Living Standard — Standar Saat Ini

Sejak 2019, ada kesepakatan bersejarah:

| | WHATWG | W3C |
|---|---|---|
| **Produk** | HTML Living Standard | (mengikuti WHATWG) |
| **Sifat** | Terus diperbarui | Snapshot stabil |
| **Otoritas** | Otoritatif ✅ | Mengacu ke WHATWG |
| **URL** | html.spec.whatwg.org | — |

"Living Standard" artinya HTML tidak lagi dirilis sebagai versi terpisah (HTML 6, HTML 7) — ia terus berkembang secara berkesinambungan, seperti perangkat lunak yang mendapat update rutin.

---

## 🔍 Tag Explorer: Tag yang Deprecated (Usang)

Tag-tag ini ada di HTML lama tapi **tidak boleh digunakan** di HTML modern:

| Tag Lama | Masalah | Pengganti Modern |
|---|---|---|
| `<font>` | Tampilan di HTML | CSS `font-family`, `color` |
| `<center>` | Tampilan di HTML | CSS `text-align: center` |
| `<b>` | Sekarang: gunakan hanya untuk perhatian tanpa penekanan semantik | `<strong>` untuk penekanan semantik |
| `<i>` | Sekarang: digunakan untuk istilah teknis/asing | `<em>` untuk penekanan editorial |
| `<blink>` | Tidak pernah jadi standar | Tidak ada pengganti — jangan buat teks berkedip |
| `<marquee>` | Tidak pernah jadi standar | CSS animation |
| `<frame>` | Keamanan dan aksesibilitas buruk | `<iframe>` dengan pembatasan ketat |

---

## ⚠ Kesalahan Umum

### Kesalahan: Menggunakan tag lama karena "masih berjalan di browser"

```html
<!-- ❌ Masih berjalan tapi JANGAN digunakan -->
<center>
  <font color="red" size="5">
    <b>Selamat Datang!</b>
  </font>
</center>
```

Browser modern masih merender ini (untuk kompatibilitas mundur), tapi:
- Ini adalah HTML yang tidak valid
- Akan deprecated sepenuhnya suatu hari
- Tidak accessible
- Tidak maintainable

```html
<!-- ✅ HTML5 yang benar -->
<h1 class="welcome-title">Selamat Datang!</h1>
<!-- Di CSS: .welcome-title { color: red; font-size: 2rem; text-align: center; } -->
```

---

## ✨ Best Practice

- ✅ Selalu tulis HTML5 — bukan XHTML, bukan HTML 4
- ✅ Hindari semua tag yang sudah deprecated
- ✅ Pelajari **mengapa** HTML berkembang seperti ini — bukan hanya **apa** yang berubah
- ✅ Ikuti spesifikasi di [html.spec.whatwg.org](https://html.spec.whatwg.org) untuk referensi resmi
- ❌ Jangan menggunakan `<font>`, `<center>`, `<blink>`, `<marquee>`

---

## 🎯 Mini Challenge

Lihat kode HTML lama ini dan **modernkan** menggunakan HTML5:

```html
<!-- Kode HTML lama — modernkan ini -->
<html>
<head><title>Halaman Lama</title></head>
<body bgcolor="#ffffff">
  <center>
    <font face="Arial" size="6" color="#ff0000">
      <b>Selamat Datang di Website Kami!</b>
    </font>
  </center>
  <hr>
  <div id="content">
    <font size="3">Ini adalah konten halaman kami.</font>
  </div>
  <div id="footer">
    <center>&copy; 2010 Website Lama</center>
  </div>
</body>
</html>
```

**Tugas:**
1. Tambahkan `<!DOCTYPE html>` yang benar
2. Tambahkan `lang` attribute
3. Tambahkan `<meta charset>` dan `<meta viewport>`
4. Ganti semua tag deprecated dengan HTML5 yang tepat
5. Hapus semua atribut presentasi (bgcolor, color, face, size)

---

## 🧪 Quiz

**1.** Siapa yang menciptakan HTML?
- A. Bill Gates
- B. Tim Berners-Lee ✅
- C. Steve Jobs
- D. Linus Torvalds

**2.** Pada tahun berapa website pertama di dunia diluncurkan?
- A. 1989
- B. 1990
- C. 1991 ✅
- D. 1993

**3.** Apa yang dimaksud dengan "Browser Wars"?
- A. Game berbasis browser
- B. Persaingan antara Netscape dan IE yang menyebabkan fragmentasi standar HTML ✅
- C. Perang antara W3C dan WHATWG
- D. Persaingan Google Chrome vs Firefox

**4.** Apa yang dimaksud dengan "HTML Living Standard"?
- A. HTML versi terbaru yang sudah final
- B. Standar HTML yang terus diperbarui secara berkesinambungan tanpa nomor versi ✅
- C. HTML yang hanya berlaku selama 2 tahun
- D. HTML untuk website yang masih aktif

**5.** Tag mana yang SUDAH TIDAK BOLEH digunakan di HTML modern?
- A. `<strong>`
- B. `<article>`
- C. `<font>` ✅
- D. `<section>`

---

## 📚 Ringkasan

| Tahun | Milestone |
|---|---|
| 1989 | Tim Berners-Lee mengajukan proposal di CERN |
| 1991 | Website pertama di dunia (info.cern.ch) |
| 1993 | HTML 1.0 — 18 tag dasar |
| 1994–1998 | Browser Wars — Netscape vs IE |
| 1999 | HTML 4.01 — standar stabil |
| 2004 | WHATWG dibentuk, mulai kembangkan HTML5 |
| 2014 | HTML5 resmi W3C |
| 2019 | HTML Living Standard jadi satu-satunya standar otoritatif |
| Kini | HTML terus berkembang secara berkesinambungan |

**Pelajaran kunci:** Sejarah HTML adalah sejarah tentang upaya manusia untuk membuat web yang konsisten, accessible, dan bermakna — sebuah upaya yang masih berlangsung hingga hari ini.

---

## ➡ Pelajaran Berikutnya

Kamu sudah tahu apa itu HTML dan bagaimana ia berkembang. Tapi ada satu pertanyaan yang lebih spesifik: **apa yang membuat HTML5 berbeda** dari versi sebelumnya, dan mengapa kita semua seharusnya peduli?

**[Lanjut: HTML5 — Standar Modern →](/bab1/html5/)**
