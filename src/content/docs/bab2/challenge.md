---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang Teks & Tipografi HTML5 — dari analisis penulisan kutipan hingga pembongkaran elemen semantik.
---

Tantangan mandiri ini akan menguji pemahamanmu mengenai bagaimana menyusun teks dan memberikan makna semantik yang tepat pada dokumen web.

Ada 5 tantangan berjenjang. Selesaikan semuanya!

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan rangkaian tantangan ini, kamu akan mampu:
- Membedakan penggunaan tag visual (`<b>`, `<i>`) dengan tag semantik (`<strong>`, `<em>`) secara tepat.
- Menuliskan kutipan langsung (`<blockquote>`, `<q>`, `<cite>`) sesuai standar web.
- Menyusun teks komputer bersarang (`<pre>`, `<code>`, `<kbd>`) secara valid.
- Menganalisis perbedaan penafsiran browser terhadap *block* vs *inline* elements.

---

## ⭐ Challenge 1: Detektif Kode Teks (Mudah)

Temukan **minimal 6 kesalahan** dalam penulisan tag pemformatan teks di bawah ini. Jelaskan mengapa itu salah, dan tuliskan perbaikannya:

```html
<p>
  Jurusan saya adalah <strong><em>Rekayasa Perangkat Lunak</strong></em>.<br>
  Di kelas, saya belajar tentang tag <abbr>HTML</abbr>.<br>
  Kakek berkata: <q>"Belajarlah yang rajin, Nak."</q>
</p>
<p>
  Untuk merapikan teks kode, saya menekan tombol <kbd>Shift + Alt + F</kbd>.
</p>
```

---

## ⭐⭐ Challenge 2: Semantik vs Visual (Menengah)

Diberikan sebuah kalimat:
*"Saya sangat ingin menjadi seorang pengembang web profesional."*

Buatlah 3 versi pengkodean HTML untuk kalimat di atas dengan makna yang berbeda:
1. **Versi A**: Kalimat biasa tanpa penekanan khusus, hanya menekankan secara visual tebal pada kata *"sangat"* dan miring pada *"pengembang web"*.
2. **Versi B**: Menyatakan peringatan penting/urgensi kuat pada kata *"sangat"*, dan memiringkan *"pengembang web"* karena merupakan istilah asing (*web developer*).
3. **Versi C**: Kalimat di mana kata *"sangat"* diberi penekanan lisan (*emphasis*) yang kuat untuk mengubah intonasi suara pembaca layar.

*Tuliskan kode HTML masing-masing versi di file latihanmu.*

---

## ⭐⭐ Challenge 3: Menyusun Lembar Lirik Lagu (Menengah)

Buatlah sebuah dokumen HTML valid yang menampilkan lirik lagu atau bait puisi pilihanmu.

**Ketentuan:**
- Wajib memiliki struktur dasar HTML5 yang valid.
- Judul lagu dibungkus dengan tag `<h1>` atau `<h2>` yang tepat.
- Bait lirik lagu harus mempertahankan format spasi, tab, dan baris baru persis seperti aslinya.
- **Tantangan**: Pilihlah elemen HTML yang paling tepat untuk mempertahankan format lirik tersebut (apakah `<p>` dengan banyak `<br>`, atau tag `<pre>`). Jelaskan mengapa kamu memilih elemen tersebut.

---

## ⭐⭐⭐ Challenge 4: Blok Kode Bersarang (Menengah-Sulit)

Buatlah kerangka halaman tutorial coding sederhana yang menampilkan panduan langkah-langkah belajar pemrograman:

- Tampilkan satu paragraf penjelasan awal.
- Tampilkan satu baris kode pemrograman inline di dalam paragraf tersebut.
- Tampilkan sebuah blok kode pemrograman multi-baris (*multiline*) yang lengkap dengan tabulasi menjorok ke dalam secara rapi.
- Tuliskan panduan tombol keyboard yang harus ditekan pengguna untuk menjalankan kode tersebut.

*Requirements*: Gunakan tag `<code>`, `<pre>`, `<kbd>`, dan entitas HTML khusus (`&lt;` dan `&gt;`) secara valid.

---

## ⭐⭐⭐ Challenge 5: Desain Formulir Koreksi Naskah (Sulit)

Bayangkan kamu sedang membuat modul web untuk editor berita online. Buatlah satu paragraf teks berita yang menampilkan proses koreksi ejaan kata yang salah:

- Kata yang salah harus dicoret secara visual dan diberi makna semantik sebagai "teks yang dihapus".
- Kata perbaikannya harus digarisbawahi secara visual dan diberi makna semantik sebagai "teks yang baru dimasukkan".
- Berikan penanda stabilo kuning pada kata kunci utama berita tersebut.
- Tuliskan waktu pembaruan berita menggunakan elemen waktu yang ramah mesin.

*Requirements*: Gunakan tag `<del>`, `<ins>`, `<mark>`, dan `<time>` secara tepat dan valid di W3C Validator.

---

## 📊 Cara Penilaian

| Challenge | Poin Maksimal | Kriteria Keberhasilan |
|---|---|---|
| 1: Detektif Kode | 20 | Menemukan 6 kesalahan dan memberikan perbaikan yang valid. |
| 2: Semantik vs Visual | 20 | Menuliskan 3 versi kode dengan pemahaman tag semantik vs visual yang tepat. |
| 3: Lirik Lagu | 20 | Memilih dan menuliskan elemen yang tepat untuk format bait puisi/lirik lagu. |
| 4: Blok Kode | 20 | Menggabungkan pre, code, kbd, dan entitas HTML secara valid. |
| 5: Koreksi Naskah | 20 | Menyusun naskah revisi dengan del, ins, mark, dan time secara valid. |
| **Total** | **100** | |

---

## ➡ Pelajaran Berikutnya

Tantangan di atas menguji kejelianmu dalam menata teks. Sekarang, mari kita lihat kumpulan kesalahan umum tipografi di halaman berikutnya sebelum melangkah ke ringkasan bab.

**[Lanjut: Error Corner →](/bab2/error-corner/)**
