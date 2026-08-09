---
title: "Mini Project"
description: Tingkatkan kualitas konten teks portfoliomu menggunakan pemformatan teks semantik dan tata letak tipografi di HTML5.
---

Saatnya melanjutkan pengembangan proyek portfolio pribadimu! Di bab ini, kita akan memperkaya isi dokumen `portfolio.html` yang sudah kamu buat di BAB 1 dengan tag tipografi dan pemformatan teks semantik HTML5.

Proyek ini adalah **versi pembaruan (v0.2)** dari halaman portofolio pribadimu.

---

## 🎯 Deskripsi Project

Buka kembali file `portfolio.html` yang ada di folder proyekmu, lalu tambahkan elemen pemformatan teks baru agar dokumenmu:
- Memiliki pembatas visual yang jelas antar bagian utama.
- Menyajikan penekanan kata kunci penting secara semantik (`<strong>` dan `<em>`).
- Menyertakan kutipan motivasi yang relevan (`<blockquote>` dan `<cite>`).
- Menampilkan contoh sintaks kode atau tombol pintasan yang kamu kuasai (`<code>` dan `<kbd>`).
- Lolos validasi 100% di W3C Validator.

---

## 📋 Requirements Wajib

### A. Pembatas & Penekanan Semantik (40 poin)

- [ ] Pasang tag garis horizontal `<hr>` sebagai pembatas di antara setiap bagian besar (di bawah header, di bawah Tentang, di bawah Keahlian, dan di bawah Kontak).
- [ ] Gunakan minimal 3 tag `<strong>` pada kata kunci penting (misalnya nama teknologi, nama diri, atau instruksi penting).
- [ ] Gunakan minimal 2 tag `<em>` untuk penekanan nada bicara atau istilah asing (misalnya istilah *web developer*, *coding*, atau *syntax*).
- [ ] Gunakan minimal 1 tag `<abbr>` dengan atribut `title` yang benar pada singkatan jurusan sekolahmu (misalnya: `<abbr title="Rekayasa Perangkat Lunak">RPL</abbr>`).

### B. Kutipan & Teks Komputer (40 poin)

- [ ] **Kutipan**: Tambahkan satu kutipan motivasi belajar pemrograman yang dibungkus tag `<blockquote>`, lengkap dengan nama tokoh/sumber yang dibungkus tag `<cite>` di bawahnya.
- [ ] **Blok Kode**: Tuliskan satu contoh sintaks tag HTML dasar yang kamu pelajari menggunakan kombinasi tag `<pre><code>`.
  - *Penting*: Ganti karakter `<` dengan `&lt;` dan `>` dengan `&gt;` agar browser menampilkannya sebagai teks, bukan tag nyata.
- [ ] **Pintasan Keyboard**: Gunakan minimal satu tag `<kbd>` untuk menuliskan pintasan keyboard menyimpan file (misalnya: `<kbd>Ctrl</kbd> + <kbd>S</kbd>`).

### C. Kualitas Dokumen (20 poin)

- [ ] Gunakan entitas HTML `&copy;` untuk menuliskan simbol hak cipta di bagian footer.
- [ ] Gunakan tag `<time>` dengan atribut `datetime` yang valid untuk menuliskan tahun hak cipta dan tanggal pembaruan terakhir halaman webmu.
- [ ] **0 Error** di W3C Validator (`validator.w3.org`).

---

## 📝 Contoh Referensi Kode (Struktur Akhir)

Gunakan ini sebagai acuan penempatan tag baru di dalam file `portfolio.html` milikmu:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Nama Kamu] — Calon Web Developer</title>
  </head>
  <body>

    <!-- ========== HEADER PROFIL ========== -->
    <h1>[Nama Lengkap Kamu]</h1>
    <p>Siswa SMK RPL Kelas [X/XI] | [Kota Domisili], Indonesia</p>
    
    <hr />

    <!-- ========== KONTEN UTAMA ========== -->

    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya <strong>[Nama Lengkap]</strong>. Saya adalah seorang siswa 
      jurusan <abbr title="Rekayasa Perangkat Lunak">RPL</abbr> yang sedang 
      fokus mempelajari dasar-dasar pemrograman web.
    </p>
    <p>
      Belajar menulis kode adalah proses yang <em>menantang sekaligus menyenangkan</em>.
    </p>

    <blockquote>
      <p>Teknologi terbaik dibangun oleh orang-orang yang gigih mempelajari dasar-dasarnya terlebih dahulu.</p>
    </blockquote>
    <p>— <cite>[Nama Tokoh Motivasi]</cite></p>

    <hr />

    <!-- Keahlian -->
    <h2>Keahlian Saya</h2>
    <p>
      Saya telah menguasai cara membuat dokumen HTML5 dasar, menata 
      heading secara berurutan, dan memvalidasi kode di <cite>W3C Validator</cite>.
    </p>
    <p>
      Berikut adalah contoh kode HTML yang saya buat pada hari pertama belajar:
    </p>
    <pre><code>&lt;h1&gt;Halo Dunia&lt;/h1&gt;</code></pre>
    <p>
      Untuk merapikan teks kode secara otomatis di editor VS Code, saya biasa 
      menekan kombinasi tombol <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd>.
    </p>

    <hr />

    <!-- Kontak -->
    <h2>Kontak Saya</h2>
    <p>
      Kamu bisa menghubungi saya melalui alamat surel di <strong>surel@example.com</strong> 
      atau berkunjung ke profil repositori saya di <strong>github.com/[username]</strong>.
    </p>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Hak Cipta &copy; <time datetime="2026">2026</time> [Nama Kamu]. 
      Pembaruan terakhir dilakukan pada <time datetime="2026-08-10">10 Agustus 2026</time>.
    </p>

  </body>
</html>
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin Maksimal |
|---|---|---|
| **Pembatas & Penekanan** | Tag hr, strong, em, dan abbr digunakan secara tepat dan memiliki makna. | 40 |
| **Kutipan & Kode** | Menyertakan blockquote + cite, serta pre + code dan kbd secara valid. | 40 |
| **Validasi & Sanitasi** | Menggunakan entitas HTML untuk simbol khusus, lolos validator W3C 100%. | 20 |
| **Total** | | **100** |

---

## ✅ Checklist Sebelum Mengumpulkan

Buka file `portfolio.html` di browsermu lewat Live Server, lalu pastikan:
```
☐ Garis horizontal hr terbentang rapi memisahkan setiap bagian.
☐ Jurusan sekolah memiliki titik-titik kecil di bawahnya (abbr) dan menampilkan teks kepanjangannya saat disorot kursor.
☐ Kutipan blockquote menjorok masuk ke sebelah kanan.
☐ Teks kode program muncul dengan font monospace yang berbeda dari teks paragraf biasa.
☐ Simbol hak cipta © muncul dengan benar di bagian footer.
☐ Kode bebas dari error saat diuji di validator.w3.org.
```

Portfolio pribadimu sekarang sudah memiliki konten yang lengkap dan bermakna! Pada bab selanjutnya, kita akan belajar menghubungkan halaman webmu ke halaman lain menggunakan tautan (*hyperlink*).

**[Lanjut: Challenge →](/bab2/challenge/)**
