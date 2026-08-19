---
title: "Studi Kasus"
description: Menerapkan pemformatan teks dan tipografi HTML5 pada kelanjutan proyek portfolio pribadi.
---

> *"Sebuah website yang baik tidak sekadar menyajikan informasi, melainkan membantunya agar nyaman dibaca dan mudah dicerna maknanya."*

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Melanjutkan pengembangan file portfolio dari BAB 1.
- Menerapkan tag pemformatan teks semantik secara tepat pada konten nyata.
- Menyusun kutipan referensi dan blok kode secara valid dan rapi.
- Memisahkan konten secara visual menggunakan pembatas baris dan pembatas halaman.

---

## 🧠 Kondisi Awal: Proyek Portfolio BAB 1

Pada BAB 1 kemarin, kita telah membuat kerangka portfolio dasar Rizki Pratama yang terlihat seperti ini:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>
    <h1>Rizki Pratama</h1>
    <p>Junior Web Developer | Jakarta, Indonesia</p>

    <h2>Tentang Saya</h2>
    <p>
      Nama saya Rizki Pratama. Saya adalah seorang junior web developer yang 
      tertarik dalam merancang struktur halaman web secara rapi dan valid.
    </p>
    <p>
      Saat ini, saya sedang mempelajari dasar-dasar HTML Fundamentals 
      melalui HTML Guidebook untuk membangun pondasi karir magang saya.
    </p>

    <h2>Keahlian Saya</h2>
    <p>
      Keahlian saya berfokus pada penyusunan kerangka dokumen web, 
      penerapan tag heading secara hierarkis, pemanfaatan komentar 
      untuk dokumentasi kode, dan validasi kode web berstandar W3C.
    </p>

    <h2>Kontak Saya</h2>
    <p>
      Kamu bisa menghubungi saya melalui surat elektronik di rizki@example.com 
      atau mengunjungi laman repositori saya di github.com/rizkipratama.
    </p>

    <p>Dibuat oleh Rizki Pratama. Hak Cipta 2026.</p>
  </body>
</html>
```

Konten di atas sudah terstruktur, tetapi secara pembacaan visual (*readability*) dan makna kata (*semantics*) masih terasa sangat datar.

---

## 🔧 Pengembangan Portfolio di BAB 2

Kita akan meningkatkan kualitas konten portfoliomu menggunakan **elemen tipografi HTML5** yang sudah kita pelajari:
1. Menambahkan penekanan penting pada kata kunci utama (`<strong>` dan `<em>`).
2. Menyisipkan informasi singkatan jurusan (`<abbr>`) dan tanggal pembuatan (`<time>`).
3. Memajang kutipan motivasi pemrograman (`<blockquote>` dan `<cite>`).
4. Menampilkan contoh perintah komputer yang dikuasai (`<code>` dan `<kbd>`).
5. Memberikan garis pembatas antar bagian utama halaman (`<hr>`).

---

## 💻 Hasil Akhir Kode: Portfolio v0.2

Berikut adalah file kode portfolio yang sudah ditingkatkan. Perhatikan bagaimana setiap tag memberikan makna tambahan bagi kontennya:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>

    <!-- ========== HEADER PROFIL ========== -->
    <h1>Rizki Pratama</h1>
    <p>Junior Web Developer | Jakarta, Indonesia</p>
    
    <hr />

    <!-- ========== KONTEN UTAMA ========== -->
    
    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang <em>junior 
      web developer</em> yang tertarik dalam merancang struktur halaman web secara rapi.
    </p>
    <p>
      Saat ini, saya sedang mempelajari dasar-dasar <abbr title="HyperText Markup Language">HTML</abbr> 
      melalui guidebook interaktif ini untuk membangun karir magang saya di bidang 
      <abbr title="Rekayasa Perangkat Lunak">RPL</abbr>.
    </p>

    <blockquote>
      <p>Menulis kode HTML yang terstruktur dengan baik adalah langkah pertama untuk menjadi web developer profesional yang andal.</p>
    </blockquote>
    <p>— <cite>Mentor Web Modern</cite></p>

    <hr />

    <!-- Keahlian -->
    <h2>Keahlian Saya</h2>
    <p>
      Saya memahami cara menguji keabsahan kode menggunakan halaman web 
      <cite>W3C HTML Validator</cite>. Perintah dasar yang saya pelajari meliputi 
      cara membuat judul, memformat paragraf, dan menyusun tag secara teratur.
    </p>
    <p>
      Berikut adalah contoh penulisan tag dasar yang sering saya gunakan saat belajar:
    </p>
    <pre><code>&lt;p&gt;Saya sedang belajar &lt;strong&gt;HTML&lt;/strong&gt;.&lt;/p&gt;</code></pre>
    <p>
      Untuk menyimpan file pekerjaan di editor teks, saya biasa menekan tombol 
      <kbd>Ctrl</kbd> + <kbd>S</kbd> pada papan ketik.
    </p>

    <hr />

    <!-- Kontak -->
    <h2>Kontak Saya</h2>
    <p>
      Kamu bisa menghubungi saya melalui surat elektronik di <strong>rizki@example.com</strong> 
      atau mengintip profil repositori kode saya di <strong>github.com/rizkipratama</strong>.
    </p>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Dibuat oleh Rizki Pratama. Hak Cipta 
      &copy; <time datetime="2026">2026</time>. 
      Pembaruan terakhir dilakukan pada <time datetime="2026-08-10">10 Agustus 2026</time>.
    </p>

  </body>
</html>
```

---

## 🧠 Mengapa Perubahan di Atas Sangat Bernilai?

- **Pemisahan Visual yang Jelas**: Penambahan tag `<hr>` membagi halaman menjadi empat wilayah fokus yang jelas, meningkatkan *skimmability* bagi pengunjung.
- **Identifikasi Singkatan**: Menggunakan `<abbr>` membantu pengunjung pemula memahami kepanjangan istilah teknis seperti HTML dan RPL secara interaktif.
- **Validasi Standar Industri**: Tanda kutip di sekeliling nama entitas diganti dengan entitas HTML (`&copy;` untuk ©) dan simbol kurang-dari/lebih-dari di dalam blok code diubah menjadi (`&lt;` dan `&gt;`) agar browser tidak keliru membacanya sebagai tag HTML nyata.
- **Penyimpanan Tanggal Terbaca Mesin**: Tag `<time>` memberikan data terstruktur tentang tanggal pembaharuan portfolio yang bisa dibaca Google.

Di bab berikutnya, kita akan menambahkan tautan (*hyperlink*) agar alamat email dan github di atas benar-benar bisa diklik oleh pengunjung!

**[Lanjut: Mini Project →](/bab2/mini-project/)**
