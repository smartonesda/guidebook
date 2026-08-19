---
title: "Studi Kasus"
description: Mengaudit dan memperkaya website portfolio dengan penggunaan attribute yang tepat, lengkap, dan aksesibel — dari id/class hingga data-* dan ARIA.
---

> *"Attribute yang tepat bukan hanya membuat HTML valid secara teknis — ia membuat HTML bermakna bagi browser, CSS, JavaScript, dan teknologi asistif."*

---

## 🎯 Tujuan Studi Kasus

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Mengaudit kode HTML yang sudah ada untuk mengidentifikasi attribute yang kurang atau salah.
- Menambahkan attribute yang tepat untuk meningkatkan aksesibilitas, fungsionalitas, dan maintainability.
- Memahami alasan di balik setiap keputusan pemilihan attribute.
- Melihat perbedaan nyata antara HTML "yang terlihat benar" dan HTML "yang benar-benar benar".

---

## 🧠 Konteks: Portfolio yang Sudah Dibangun

Dari BAB 1 hingga BAB 6, kita sudah membangun `index.html` dan `projects.html` yang cukup lengkap. Sekarang kita akan melakukan **audit attribute** — memeriksa apakah semua attribute sudah digunakan dengan benar dan lengkap.

Berikut adalah beberapa bagian dari portfolio yang perlu kita audit dan perbaiki:

---

## 🔍 Audit 1: Navigasi

**Sebelum (BAB 3 — dasar):**
```html
<p>
  <strong>Beranda</strong> | 
  <a href="projects.html">Proyek Saya</a> | 
  <a href="#kontak">Hubungi Saya</a>
</p>
```

**Masalah:**
- Menggunakan `<p>` untuk navigasi — tidak semantik.
- Tidak ada `aria-label` pada link yang cukup jelas.
- Tidak ada cara untuk membedakan link "aktif" secara programatik.

**Setelah audit (Portfolio v0.7):**
```html
<nav aria-label="Navigasi utama">
  <a href="index.html" aria-current="page" class="nav-link nav-link--active">Beranda</a>
  <a href="projects.html" class="nav-link">Proyek Saya</a>
  <a href="#kontak" class="nav-link">Hubungi Saya</a>
</nav>
```

**Apa yang diperbaiki:**
- `<nav>` dengan `aria-label="Navigasi utama"` — screen reader mengumumkan "Navigasi utama" sebelum membacakan link.
- `aria-current="page"` — memberitahu screen reader bahwa link ini adalah halaman yang sedang aktif.
- `class` yang konsisten untuk semua link navigasi — CSS bisa menargetnya dengan mudah.

---

## 🔍 Audit 2: Gambar Profil

**Sebelum:**
```html
<img src="assets/images/foto-rizki.jpg" alt="foto" width="150" height="150" />
```

**Masalah:**
- `alt="foto"` terlalu generik — tidak memberikan konteks siapa orang dalam foto.
- Tidak ada `id` pada `<figure>` jika nanti perlu direferensikan.
- Tidak ada `loading` attribute untuk optimasi.

**Setelah audit:**
```html
<figure id="profil-foto">
  <img 
    src="assets/images/foto-rizki.jpg" 
    alt="Foto potret Rizki Pratama, junior web developer, tersenyum menghadap kamera"
    width="150" 
    height="150"
    loading="eager"
  />
  <figcaption>Rizki Pratama — Junior Web Developer</figcaption>
</figure>
```

**Apa yang diperbaiki:**
- `alt` yang deskriptif — menyebutkan nama, profesi, dan ekspresi.
- `id="profil-foto"` — bisa direferensikan oleh CSS atau JS jika perlu.
- `loading="eager"` — gambar profil di atas lipatan halaman harus dimuat segera (bukan `lazy`).

---

## 🔍 Audit 3: Daftar Keahlian

**Sebelum:**
```html
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript</li>
</ul>
```

**Setelah audit:**
```html
<ul id="daftar-keahlian" class="skills-list" aria-label="Daftar keahlian teknis">
  <li class="skill-item" data-level="mahir">HTML5</li>
  <li class="skill-item" data-level="menengah">CSS3</li>
  <li class="skill-item" data-level="pemula">JavaScript</li>
</ul>
```

**Apa yang diperbaiki:**
- `id` untuk kemudahan targeting CSS/JS.
- `class` untuk styling komponen.
- `aria-label` untuk konteks yang lebih jelas bagi screen reader.
- `data-level` untuk menyimpan tingkat keahlian yang bisa divisualisasikan oleh CSS atau JavaScript nanti.

---

## 🔍 Audit 4: Daftar Proyek (projects.html)

**Sebelum:**
```html
<table>
  <tr>
    <th>Nama Proyek</th>
    <th>Teknologi</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Website Sekolah</td>
    <td>HTML, CSS</td>
    <td>Selesai</td>
  </tr>
</table>
```

**Setelah audit:**
```html
<table id="tabel-proyek" class="data-table" aria-label="Daftar proyek portfolio Rizki">
  <caption>Proyek-proyek yang telah saya kerjakan</caption>
  <thead>
    <tr>
      <th scope="col">Nama Proyek</th>
      <th scope="col">Teknologi</th>
      <th scope="col">Status</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr data-proyek-id="1" data-status="selesai">
      <td>Website Sekolah</td>
      <td>HTML, CSS</td>
      <td><span class="badge badge--selesai">Selesai</span></td>
      <td>
        <a 
          href="https://sekolah-demo.example.com" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lihat demo Website Sekolah (terbuka di tab baru)"
          class="btn-link"
        >
          Demo
        </a>
      </td>
    </tr>
  </tbody>
</table>
```

**Apa yang diperbaiki:**
- `aria-label` pada tabel untuk konteks.
- `scope="col"` pada `<th>` — screen reader tahu bahwa ini adalah header kolom.
- `data-proyek-id` dan `data-status` — JavaScript bisa memanfaatkannya untuk filter/sorting.
- `target="_blank"` + `rel="noopener noreferrer"` — selalu pasangkan keduanya untuk link eksternal.
- `aria-label` pada link yang menjelaskan tujuan dan bahwa ia membuka tab baru.

---

## 🔍 Audit 5: Contact Form

**Sebelum (sebagian dari BAB 6):**
```html
<form action="/proses-inquiry.php" method="POST">
  <input type="text" id="nama-pengirim" name="nama_lengkap" required />
</form>
```

**Setelah audit:**
```html
<form 
  id="form-kontak"
  class="contact-form"
  action="/proses-inquiry.php" 
  method="POST"
  novalidate
  aria-labelledby="judul-form-kontak"
>
  <h3 id="judul-form-kontak">Kirim Pesan</h3>

  <div class="form-group">
    <label for="nama-pengirim">
      Nama Lengkap 
      <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
    </label>
    <input 
      type="text" 
      id="nama-pengirim" 
      name="nama_lengkap"
      class="form-input"
      placeholder="Contoh: Budi Santoso"
      minlength="3"
      maxlength="100"
      autocomplete="name"
      required 
      aria-required="true"
    />
  </div>

  <div class="form-group" id="group-status" aria-live="polite">
    <!-- Area pesan status validasi yang diisi JavaScript -->
  </div>

</form>
```

**Apa yang diperbaiki:**
- `id` dan `class` konsisten pada form.
- `aria-labelledby` menghubungkan form dengan judulnya.
- `novalidate` — karena kita akan menambahkan validasi kustom via JavaScript nanti.
- `abbr` dengan `aria-label` pada tanda bintang (*) wajib.
- `aria-required="true"` melengkapi attribute `required` untuk kompatibilitas lebih luas.
- `aria-live="polite"` pada area status untuk pengumuman dinamis.

---

## 🏗️ Portfolio v0.7 — Hasil Akhir `index.html`

Setelah semua audit, inilah struktur `index.html` versi 0.7 yang sudah kaya attribute:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
    <meta name="description" content="Portfolio Rizki Pratama, siswa SMK RPL yang sedang membangun karier di web development." />
  </head>
  <body id="halaman-beranda" class="page page--home">

    <!-- NAVIGASI -->
    <nav id="nav-utama" class="main-nav" aria-label="Navigasi utama">
      <a href="index.html" class="nav-link nav-link--active" aria-current="page">Beranda</a>
      <a href="projects.html" class="nav-link">Proyek Saya</a>
      <a href="#kontak" class="nav-link">Hubungi Saya</a>
    </nav>

    <hr />

    <!-- PROFIL -->
    <header id="profil" class="profile-header" role="banner">
      <figure id="profil-foto" class="profile-figure">
        <img 
          src="assets/images/foto-rizki.jpg" 
          alt="Foto potret Rizki Pratama tersenyum menghadap kamera"
          width="150" 
          height="150"
          loading="eager"
          class="profile-photo"
        />
        <figcaption class="profile-caption">Rizki Pratama — Junior Web Developer</figcaption>
      </figure>

      <dl id="info-profil" class="profile-info">
        <dt>Domisili</dt>
        <dd>Jakarta, Indonesia</dd>
        <dt>Jurusan</dt>
        <dd><abbr title="Rekayasa Perangkat Lunak">RPL</abbr></dd>
      </dl>
    </header>

    <hr />

    <!-- KONTEN UTAMA -->
    <main id="konten-utama">

      <section id="tentang" class="section" aria-labelledby="judul-tentang">
        <h2 id="judul-tentang">Tentang Saya</h2>
        <p class="intro-text">
          Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang 
          <em>junior web developer</em> yang sedang membangun portofolio pertama saya.
        </p>
      </section>

      <section id="keahlian" class="section" aria-labelledby="judul-keahlian">
        <h2 id="judul-keahlian">Keahlian Saya</h2>
        <ul id="daftar-keahlian" class="skills-list" aria-label="Daftar keahlian teknis">
          <li class="skill-item" data-level="mahir">HTML5</li>
          <li class="skill-item" data-level="menengah">CSS3</li>
          <li class="skill-item" data-level="pemula">JavaScript</li>
        </ul>
      </section>

      <section id="kontak" class="section" aria-labelledby="judul-kontak">
        <h2 id="judul-kontak">Hubungi Saya</h2>
        <p>Isi formulir di bawah untuk menghubungi saya:</p>

        <form 
          id="form-kontak"
          class="contact-form"
          action="/proses-inquiry.php" 
          method="POST"
          aria-labelledby="judul-form-kontak"
        >
          <h3 id="judul-form-kontak" class="form-title">Kirim Pesan</h3>

          <fieldset class="form-fieldset">
            <legend class="form-legend">Informasi Pengirim</legend>

            <div class="form-group">
              <label class="form-label" for="nama-pengirim">
                Nama Lengkap <abbr title="Wajib diisi">*</abbr>
              </label>
              <input 
                type="text" 
                id="nama-pengirim" 
                name="nama_lengkap"
                class="form-input"
                placeholder="Contoh: Budi Santoso"
                minlength="3"
                maxlength="100"
                autocomplete="name"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="email-pengirim">
                Alamat Email <abbr title="Wajib diisi">*</abbr>
              </label>
              <input 
                type="email" 
                id="email-pengirim" 
                name="email_pengirim"
                class="form-input"
                placeholder="nama@domain.com"
                autocomplete="email"
                required
              />
            </div>
          </fieldset>

          <fieldset class="form-fieldset">
            <legend class="form-legend">Detail Pesan</legend>

            <div class="form-group">
              <label class="form-label" for="pesan-inquiry">
                Pesan <abbr title="Wajib diisi">*</abbr>
              </label>
              <textarea 
                id="pesan-inquiry" 
                name="pesan_detail"
                class="form-input form-input--textarea"
                rows="5"
                placeholder="Ceritakan apa yang ingin kamu diskusikan..."
                minlength="20"
                required
              ></textarea>
            </div>
          </fieldset>

          <div class="form-group form-group--checkbox">
            <input 
              type="checkbox" 
              id="persetujuan" 
              name="persetujuan"
              class="form-checkbox"
              value="setuju"
              required
            />
            <label class="form-label form-label--checkbox" for="persetujuan">
              Saya menyetujui penggunaan data ini untuk keperluan balasan kontak.
            </label>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" id="btn-kirim">
              Kirim Pesan
            </button>
            <button type="reset" class="btn btn-secondary">
              Hapus Isian
            </button>
          </div>

        </form>
      </section>

    </main>

    <hr />

    <!-- FOOTER -->
    <footer id="footer-utama" class="main-footer" role="contentinfo">
      <p>
        Dibuat oleh <span class="author-name">Rizki Pratama</span> 
        &copy; <time datetime="2026">2026</time>.
      </p>
    </footer>

  </body>
</html>
```

---

## 🔍 Mengapa Setiap Attribute Ada?

**`id` pada setiap section** (`id="tentang"`, `id="keahlian"`, `id="kontak"`) — memungkinkan:
- Navigasi internal via anchor link (`href="#kontak"`).
- CSS bisa menarget section spesifik.
- JavaScript bisa menemukan section tertentu.

**`aria-labelledby` pada setiap section** — screen reader mengumumkan judul section sebelum membaca isinya, membantu navigasi keyboard.

**`class` yang deskriptif dan konsisten** — semua elemen punya class yang mencerminkan fungsinya (`form-input`, `form-label`, `btn-primary`). Ini adalah fondasi design system.

**`data-level` pada skill items** — JavaScript atau CSS bisa menggunakan nilai ini untuk menampilkan progress bar atau warna yang mencerminkan tingkat keahlian.

---

## ✅ Checklist Audit Attribute

```
☐ Setiap <section> punya id yang deskriptif
☐ Setiap <section> punya aria-labelledby yang menunjuk ke heading-nya
☐ Setiap <img> punya alt yang deskriptif (bukan generik)
☐ Setiap link eksternal punya rel="noopener noreferrer"
☐ Setiap form punya aria-labelledby
☐ Setiap <th> dalam tabel punya scope="col" atau scope="row"
☐ class konsisten dan deskriptif di seluruh halaman
☐ id tidak ada yang duplikat
☐ Boolean attribute ditulis tanpa nilai (required, bukan required="true")
☐ data-* digunakan untuk data kustom, bukan untuk menggantikan attribute standar
```

---

**[Lanjut: Mini Project →](/bab7/mini-project/)**
