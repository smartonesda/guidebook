---
title: "footer"
description: Memahami elemen footer — apa isinya, kapan digunakan lebih dari sekali, dan bagaimana footer berkontribusi pada struktur semantic yang lengkap.
---

## 📄 Elemen `<footer>`

### Apa itu `<footer>`?

`<footer>` mewakili **konten penutup** untuk section terdekatnya. Biasanya berisi informasi tentang penulis, hak cipta, link terkait, atau informasi lain yang secara logis berada "di akhir" sebuah konten.

```html
<!-- footer untuk seluruh website -->
<footer id="site-footer" class="site-footer">
  <address>
    <p>
      Hubungi saya: 
      <a href="mailto:rizki@example.com">rizki@example.com</a>
    </p>
  </address>
  
  <nav aria-label="Navigasi footer">
    <a href="/privasi">Kebijakan Privasi</a>
    <a href="#kontak">Hubungi Saya</a>
  </nav>
  
  <p>
    &copy; <time datetime="2026">2026</time> Rizki Pratama. 
    Dibuat dengan HTML5 yang murni ❤️
  </p>
</footer>
```

### Apakah `<footer>` Hanya Boleh Satu Kali?

**Tidak.** Seperti `<header>`, `<footer>` juga boleh muncul lebih dari sekali — misalnya sebagai penutup untuk setiap `<article>`:

```html
<article class="project-card">
  <header>
    <h3>Website Toko Roti</h3>
    <time datetime="2025-06">Juni 2025</time>
  </header>
  
  <p>Website profil untuk toko roti lokal...</p>
  
  <footer class="project-footer">
    <a href="https://demo.example.com" 
       target="_blank" 
       rel="noopener noreferrer">Demo</a>
    <a href="https://github.com/rizki/proyek" 
       target="_blank" 
       rel="noopener noreferrer">Kode</a>
  </footer>
</article>
```

### Apa yang Biasanya Ada di Dalam `<footer>`?

**Untuk site footer (seluruh website):**
- Informasi hak cipta (`&copy;` + tahun + nama)
- Link navigasi sekunder (privasi, syarat & ketentuan)
- Informasi kontak (`<address>`)
- Link media sosial
- Atribusi (kredit untuk template, font, dll.)

**Untuk article/section footer:**
- Metadata artikel (penulis, tanggal diperbarui, tags)
- Link "Baca selengkapnya" atau "Bagikan"
- Link ke proyek terkait

### Kapan TIDAK Menggunakan `<footer>`?

- Jangan gunakan `<footer>` di dalam `<address>`, `<header>`, atau `<footer>` lain.
- Jangan gunakan `<footer>` hanya karena konten ada "di bawah" secara visual.

---

## 🏗️ Site Footer yang Lengkap untuk Portfolio

```html
<footer id="site-footer" class="site-footer" role="contentinfo">
  
  <section class="footer-about" aria-labelledby="footer-about-title">
    <h2 id="footer-about-title" class="footer-heading">Rizki Pratama</h2>
    <p class="footer-tagline">Junior Web Developer · Jakarta, Indonesia</p>
  </section>

  <nav class="footer-nav" aria-label="Navigasi footer">
    <h3 class="footer-nav-title">Halaman</h3>
    <ul>
      <li><a href="/">Beranda</a></li>
      <li><a href="/proyek">Proyek</a></li>
      <li><a href="#kontak">Kontak</a></li>
    </ul>
  </nav>

  <section class="footer-contact" aria-labelledby="footer-contact-title">
    <h3 id="footer-contact-title" class="footer-heading">Hubungi Saya</h3>
    <address>
      <p>
        <a href="mailto:rizki@example.com" class="footer-link">
          rizki@example.com
        </a>
      </p>
      <ul class="social-links">
        <li>
          <a href="https://github.com/rizkipratama" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="Profil GitHub Rizki (tab baru)">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/rizkipratama" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="Profil LinkedIn Rizki (tab baru)">
            LinkedIn
          </a>
        </li>
      </ul>
    </address>
  </section>

  <div class="footer-bottom">
    <p>
      &copy; <time datetime="2026">2026</time> Rizki Pratama. 
      Semua hak dilindungi.
    </p>
    <p class="footer-tech">
      Dibangun dengan HTML5, CSS3, dan semangat belajar 🚀
    </p>
  </div>

</footer>
```

---

## 🔗 Hubungan Antar Semantic Element

Setelah membahas semua elemen semantic utama, mari kita lihat bagaimana semuanya bekerja bersama:

```
<body>
│
├── <header>          ← pengantar website: logo, judul, nav
│   └── <nav>         ← navigasi utama
│
├── <main>            ← konten utama (unik per halaman)
│   ├── <section>     ← kelompok konten bertema
│   │   ├── <article> ← konten mandiri (proyek, artikel)
│   │   │   ├── <header>      ← pengantar artikel
│   │   │   ├── <figure>      ← gambar/diagram dengan caption
│   │   │   │   └── <figcaption>
│   │   │   └── <footer>      ← penutup artikel
│   │   └── <aside>   ← konten pendukung
│   └── <section>     ← kelompok konten lain
│
└── <footer>          ← penutup website: info, kontak, copyright
    ├── <nav>         ← navigasi footer
    └── <address>     ← info kontak penulis/website
```

Struktur ini bukan template kaku — ia hanyalah contoh bagaimana elemen-elemen ini bisa saling berhubungan berdasarkan makna konten.

---

**[Lanjut: div vs Semantic →](/bab8/div-vs-semantic/)**
