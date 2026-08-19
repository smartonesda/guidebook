---
title: "Studi Kasus"
description: Audit dan perbaikan aksesibilitas menyeluruh pada website portfolio — mengidentifikasi hambatan keyboard, alt text yang salah, label form yang hilang, dan menambahkan skip navigation.
---

> *"Website yang hebat bukan hanya website yang terlihat indah di layarmu. Website yang hebat adalah yang bisa digunakan oleh siapa saja yang mendatanginya."*

---

## 🎯 Tujuan Studi Kasus

Di studi kasus ini, kita akan melakukan **audit aksesibilitas** menyeluruh pada portfolio v0.8 dari BAB 8.

Kita akan:
1. Menguji portfolio menggunakan keyboard (tanpa mouse).
2. Memeriksa semua `alt` text gambar.
3. Memeriksa keterhubungan label form.
4. Menambahkan Skip Navigation link.
5. Memastikan tidak ada ARIA yang merusak.
6. Memperbarui HTML ke **Portfolio v1.0 — Accessible Edition**.

---

## 🔍 Audit Aksesibilitas Portfolio v0.8

Mari kita lakukan audit berdasarkan empat pertanyaan utama:

| Komponen | Masalah yang Ditemukan | Solusi Aksesibilitas |
|---|---|---|
| **Awal halaman** | Tidak ada cara untuk melompati navigasi header | Tambahkan Skip Navigation link di awal `<body>` |
| **Foto profil** | `alt` text: *"Foto potret Rizki Pratama tersenyum menghadap kamera"* | `alt` sudah baik, tapi persingkat agar lebih fokus ke konteks portfolio |
| **Link sosial media** | Link GitHub & LinkedIn di footer tidak punya `aria-label` yang menginformasikan tab baru | Tambahkan `aria-label` yang menyebutkan "(terbuka di tab baru)" |
| **Checkbox persetujuan** | Tidak ada `required` bawaan atau `aria-required` | Tambahkan `required` + perjelas label |
| **Form kontak status** | Area pesan sukses/error tidak mengumumkan perubahan ke screen reader | Tambahkan `aria-live="polite"` |
| **Konten utama** | `<main>` tidak punya `tabindex="-1"` untuk target skip link | Tambahkan `tabindex="-1"` ke `<main>` |

---

## 💻 Kode Lengkap: Portfolio v1.0 (Accessible Edition)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO & Identitas -->
  <title>Rizki Pratama — Junior Web Developer · Jakarta</title>
  <meta name="description" 
        content="Portfolio Rizki Pratama, junior web developer dari Jakarta. Proyek HTML, CSS, dan web yang aksesibel dari siswa SMK RPL." />
  <meta name="author" content="Rizki Pratama" />
  <meta name="robots" content="index, follow" />
  
  <!-- Canonical & Favicon -->
  <link rel="canonical" href="https://rizkipratama.com/" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#0ea5e9" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Portfolio Rizki Pratama" />
  <meta property="og:title" content="Rizki Pratama — Junior Web Developer" />
  <meta property="og:description" content="Portfolio junior web developer dari Jakarta." />
  <meta property="og:image" content="https://rizkipratama.com/og-image.png" />
  <meta property="og:url" content="https://rizkipratama.com/" />

  <!-- CSS inline untuk skip link & focus style -->
  <style>
    /* Skip Link styling */
    .skip-link {
      position: absolute;
      top: -100px;
      left: 10px;
      background: #0ea5e9;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 4px;
      font-weight: bold;
      z-index: 9999;
      text-decoration: none;
      transition: top 0.2s ease;
    }
    .skip-link:focus {
      top: 10px;
      outline: 3px solid #000000;
    }
    /* Accessible focus outline */
    :focus-visible {
      outline: 3px solid #0ea5e9;
      outline-offset: 2px;
    }
  </style>
</head>
<body class="page page--home">

  <!-- ===================== 1. SKIP NAVIGATION ===================== -->
  <a href="#konten-utama" class="skip-link">
    Lompati ke konten utama
  </a>

  <!-- ===================== 2. SITE HEADER ===================== -->
  <header id="site-header" class="site-header">
    <div class="header-brand">
      <p class="brand-name">Rizki Pratama</p>
      <p class="brand-role">Junior Web Developer · SMK RPL Jakarta</p>
    </div>

    <nav id="nav-utama" aria-label="Navigasi utama">
      <a href="/" class="nav-link nav-link--active" aria-current="page">Beranda</a>
      <a href="projects.html" class="nav-link">Proyek Saya</a>
      <a href="#kontak" class="nav-link">Hubungi Saya</a>
    </nav>
  </header>

  <!-- ===================== 3. KONTEN UTAMA ===================== -->
  <!-- tabindex="-1" agar skip link bisa memindahkan fokus ke main secara konsisten -->
  <main id="konten-utama" tabindex="-1">

    <!-- HERO / PROFIL -->
    <section id="hero" class="section-hero" aria-labelledby="hero-name">
      
      <figure class="profile-figure">
        <img 
          src="assets/images/foto-rizki.jpg" 
          alt="Foto potret Rizki Pratama, Junior Web Developer"
          width="150" height="150"
          loading="eager"
          class="profile-photo"
        />
        <figcaption class="profile-caption">Rizki Pratama, Jakarta 2026</figcaption>
      </figure>

      <div class="hero-text">
        <h1 id="hero-name" class="hero-title">Halo, saya Rizki 👋</h1>
        <p class="hero-tagline">
          Siswa SMK RPL yang sedang membangun portofolio web yang terstruktur, 
          semantic, dan dapat diakses oleh semua orang.
        </p>
        <dl class="profile-info">
          <dt>Domisili</dt>
          <dd>Jakarta, Indonesia</dd>
          <dt>Jurusan</dt>
          <dd><abbr title="Rekayasa Perangkat Lunak">RPL</abbr></dd>
        </dl>
      </div>

    </section>

    <!-- TENTANG SAYA -->
    <section id="tentang" class="section" aria-labelledby="tentang-heading">
      <h2 id="tentang-heading" class="section-title">Tentang Saya</h2>
      <p>
        Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang 
        <em>junior web developer</em> yang peduli dengan kualitas kode HTML, 
        struktur semantic, dan aksesibilitas web.
      </p>
      <blockquote cite="https://www.w3.org/WAI/fundamentals/accessibility-intro/">
        <p>
          Kekuatan web terletak pada universalitasnya. Akses oleh semua orang 
          tanpa memandang disabilitas adalah aspek yang paling esensial.
        </p>
      </blockquote>
      <p>— <cite>Tim Berners-Lee, Pencipta Web</cite></p>
    </section>

    <!-- KEAHLIAN -->
    <section id="keahlian" class="section" aria-labelledby="keahlian-heading">
      <h2 id="keahlian-heading" class="section-title">Keahlian Teknis</h2>
      <ul id="daftar-keahlian" class="skills-grid" 
          aria-label="Daftar keahlian teknis Rizki">
        <li class="skill-item" data-level="mahir">HTML5 (Semantic &amp; A11y)</li>
        <li class="skill-item" data-level="menengah">CSS3 (Responsive Layout)</li>
        <li class="skill-item" data-level="pemula">JavaScript Dasar</li>
        <li class="skill-item" data-level="pemula">Git &amp; GitHub</li>
      </ul>
      <p>
        Unduh 
        <a href="dokumen/resume.pdf" download 
           aria-label="Unduh Resume Rizki Pratama dalam format PDF">
          Resume PDF
        </a>
      </p>
    </section>

    <!-- PROYEK -->
    <section id="proyek" class="section" aria-labelledby="proyek-heading">
      <h2 id="proyek-heading" class="section-title">Proyek Terbaru</h2>

      <div class="project-grid">

        <article class="project-card" id="proyek-smk" data-status="selesai">
          <header class="project-header">
            <h3 class="project-title">Website SMK Nusantara</h3>
            <p class="project-meta">
              <time datetime="2025-06">Juni 2025</time> · 
              <span class="badge badge--selesai">Selesai</span>
            </p>
          </header>
          <figure class="project-preview">
            <img 
              src="assets/images/proyek-smk.jpg" 
              alt="Screenshot halaman utama Website SMK Nusantara yang responsif"
              width="400" height="225"
              loading="lazy"
            />
          </figure>
          <p class="project-desc">
            Website profil sekolah responsif dan terstruktur dengan HTML5 
            semantic, form kontak tervalidasi, dan aksesibilitas keyboard.
          </p>
          <footer class="project-footer">
            <a href="https://demo.example.com"
               target="_blank" rel="noopener noreferrer"
               aria-label="Lihat demo Website SMK Nusantara (terbuka di tab baru)" 
               class="btn-link">
              Demo
            </a>
            <a href="https://github.com/rizki/smk"
               target="_blank" rel="noopener noreferrer"
               aria-label="Lihat kode sumber Website SMK di GitHub (terbuka di tab baru)" 
               class="btn-link btn-link--ghost">
              GitHub
            </a>
          </footer>
        </article>

      </div>

      <p><a href="projects.html" class="link-all-projects">Lihat semua proyek →</a></p>
    </section>

    <!-- KONTAK FORM -->
    <section id="kontak" class="section" aria-labelledby="kontak-heading">
      <h2 id="kontak-heading" class="section-title">Hubungi Saya</h2>
      <p>
        Ingin berkolaborasi atau mengajukan inquiry proyek? 
        Isi formulir di bawah ini.
      </p>

      <form id="form-kontak" class="contact-form"
            action="/proses-inquiry.php" method="POST"
            aria-labelledby="form-title">
        <h3 id="form-title" class="form-title">Kirim Pesan</h3>

        <!-- Area status untuk pengumuman dinamis ke screen reader -->
        <div id="form-status" class="form-status" aria-live="polite"></div>

        <fieldset>
          <legend>Informasi Pengirim</legend>
          
          <div class="form-group">
            <label for="nama-pengirim">
              Nama Lengkap 
              <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
            </label>
            <input type="text" id="nama-pengirim" name="nama_lengkap"
                   placeholder="Contoh: Budi Santoso"
                   minlength="3" autocomplete="name" required 
                   aria-required="true" />
          </div>

          <div class="form-group">
            <label for="email-pengirim">
              Email 
              <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
            </label>
            <input type="email" id="email-pengirim" name="email_pengirim"
                   placeholder="nama@domain.com" autocomplete="email" required 
                   aria-required="true" />
          </div>
        </fieldset>

        <fieldset>
          <legend>Detail Pesan</legend>

          <div class="form-group">
            <label for="pesan" id="label-pesan">
              Pesan 
              <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
            </label>
            <textarea id="pesan" name="pesan_detail" rows="5"
                      placeholder="Ceritakan apa yang ingin kamu diskusikan..."
                      minlength="20" required 
                      aria-required="true"
                      aria-describedby="pesan-hint"></textarea>
            <p id="pesan-hint" class="field-hint">
              Minimal 20 karakter. Jelaskan proyek atau pertanyaanmu secara singkat.
            </p>
          </div>
        </fieldset>

        <div class="form-group form-group--checkbox">
          <input type="checkbox" id="setuju" name="persetujuan"
                 value="setuju" required aria-required="true" />
          <label for="setuju">
            Saya menyetujui bahwa data yang saya kirim akan digunakan 
            untuk keperluan balasan kontak ini saja.
          </label>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">
            🚀 Kirim Pesan
          </button>
          <button type="reset" class="btn btn-secondary">
            Hapus Isian
          </button>
        </div>
      </form>

      <p class="contact-alt">
        Atau hubungi langsung: 
        <a href="mailto:rizki@example.com">rizki@example.com</a>
      </p>
    </section>

  </main>

  <!-- ===================== 4. SITE FOOTER ===================== -->
  <footer id="site-footer" class="site-footer" role="contentinfo">

    <div class="footer-brand">
      <p class="footer-name">Rizki Pratama</p>
      <p class="footer-tagline">Junior Web Developer · Jakarta</p>
    </div>

    <nav aria-label="Navigasi footer">
      <a href="/">Beranda</a>
      <a href="projects.html">Proyek Saya</a>
      <a href="#kontak">Hubungi Saya</a>
    </nav>

    <address>
      <p>
        Email: <a href="mailto:rizki@example.com">rizki@example.com</a>
      </p>
      <ul class="social-links" aria-label="Link media sosial">
        <li>
          <a href="https://github.com/rizkipratama" 
             target="_blank" rel="noopener noreferrer"
             aria-label="Profil GitHub Rizki Pratama (terbuka di tab baru)">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/rizkipratama" 
             target="_blank" rel="noopener noreferrer"
             aria-label="Profil LinkedIn Rizki Pratama (terbuka di tab baru)">
            LinkedIn
          </a>
        </li>
      </ul>
    </address>

    <p class="footer-copy">
      &copy; <time datetime="2026">2026</time> Rizki Pratama. 
      Dibangun dengan HTML5 yang semantic dan aksesibel.
    </p>

  </footer>

</body>
</html>
```

---

## 🔍 Analisis: Mengapa Setiap Perubahan Dibuat?

1. **Skip Navigation Link di paling atas `<body>`** — memungkinkan pengguna keyboard melompati navigasi header dan langsung loncat ke `<main>` hanya dengan 2 ketukan tombol (`Tab` → `Enter`).
2. **`<main tabindex="-1">`** — `tabindex="-1"` memastikan kursor kuisor keyboard benar-benar berpindah ke elemen `<main>` saat skip link diklik, terlepas dari browser yang digunakan.
3. **`:focus-visible` CSS** — memastikan garis fokus tetap ada untuk pengguna keyboard tanpa mengganggu pengguna mouse.
4. **`aria-describedby="pesan-hint"` pada textarea** — screen reader akan otomatis membaca petunjuk "Minimal 20 karakter..." saat kursor berpindah ke kotak pesan.
5. **`aria-live="polite"` pada `#form-status`** — saat JavaScript mengisi pesan "Pesan berhasil dikirim", screen reader mengumumkannya tanpa menginterupsi pengguna.
6. **`aria-label` yang menyebut "(terbuka di tab baru)"** — memberitahu pengguna screen reader bahwa mengklik link ini akan membuka window/tab baru, sehingga mereka tidak kebingungan saat tombol Back tidak bekerja.

---

## ✅ Checklist Audit v1.0

```
☐ Skip navigation link ada sebagai elemen pertama di <body>
☐ Tekan Tab dari awal → skip link muncul
☐ Tekan Enter di skip link → fokus berpindah ke <main>
☐ Tekan Tab terus → garis fokus terlihat jelas di setiap link/button/input
☐ Tidak ada button atau link yang tidak punya teks/label
☐ Semua gambar punya alt text yang bermakna
☐ Gambar dekoratif punya alt=""
☐ Semua input form punya <label> yang terhubung via for↔id
☐ Semua link eksternal (target="_blank") punya rel="noopener noreferrer"
☐ Semua link eksternal menginformasikan "buka di tab baru" via aria-label
☐ HTML lolos W3C Validator tanpa error
```

---

**[Lanjut: Mini Project →](/bab10/mini-project/)**
