---
title: "Studi Kasus"
description: Merancang Contact & Project Inquiry Form interaktif pada halaman utama website portfolio.
---

> *"Formulir kontak yang dirancang dengan baik memudahkan calon klien atau guru penguji menghubungimu secara interaktif."*

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Melanjutkan pengembangan berkas proyek portfolio dari BAB 5.
- Membangun struktur formulir lengkap menggunakan tag `<form>` dan `<fieldset>`.
- Menghubungkan elemen label dengan tipe input teks, surel, menu dropdown, dan textarea secara aksesibel.
- Menerapkan atribut validasi dasar untuk meminimalkan data kosong.

---

## 🧠 Skenario: Meningkatkan Bagian Kontak Portfolio

Pada BAB 5 kemarin, bagian Kontak di file `index.html` kita masih berupa baris paragraf teks surel biasa:

```html
<!-- Kontak Lama -->
<h2 id="kontak">Kontak Saya</h2>
<p>
  Jangan ragu untuk menghubungi saya melalui surat elektronik di 
  <a href="mailto:rizki@example.com">rizki@example.com</a> atau mengintip 
  profil repositori kode saya di github.com/rizkipratama.
</p>
```

Kita ingin **mengubah bagian kontak tersebut menjadi sebuah Contact & Project Inquiry Form**. Pengunjung portfolio (guru, teman, atau industri magang) bisa mengetikkan nama, email, tipe kepentingan kerja sama (*inquiry*), isi pesan, dan mencentang persetujuan sebelum mengirim pesan tersebut.

---

## 🔧 Pengembangan Proyek di BAB 6

Kita akan merombak bagian Kontak di `index.html` dengan menambahkan formulir interaktif:
1. **Tag `<form>`**: Membungkus seluruh isian dengan metode `POST` untuk mengamankan data.
2. **Tag `<fieldset>` & `<legend>`**: Mengelompokkan isian ke dalam bingkai berlabel *"Kirim Pesan"*.
3. **Isian Informasi Diri**: Input teks nama dan input email yang terhubung dengan labelnya masing-masing.
4. **Dropdown Pilihan Inquiry**: Menu `<select>` untuk memilih tipe kerja sama (*Tanya Proyek*, *Penawaran Magang*, atau *Say Hello*).
5. **Textarea Isi Pesan**: Kotak `<textarea>` berukuran besar untuk mengetik pesan detail.
6. **Checkbox Persetujuan**: Tombol centang untuk persetujuan privasi data.
7. **Tombol Submit**: Tombol `<button type="submit">` untuk memicu pengiriman data.

---

## 💻 Hasil Akhir Kode: Portfolio v0.6 (`index.html`)

Berikut adalah file kode `index.html` terbaru yang kini memiliki formulir kontak aktif di bagian bawah:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>

    <!-- ========== MENU NAVIGASI ========== -->
    <p>
      <strong>Beranda</strong> | 
      <a href="projects.html">Proyek Saya</a> | 
      <a href="#kontak">Hubungi Saya</a>
    </p>

    <hr />

    <!-- ========== HEADER PROFIL ========== -->
    <figure>
      <img src="assets/images/foto-rizki.jpg" alt="Foto potret wajah Rizki Pratama tersenyum" width="150" height="150" />
      <figcaption>Rizki Pratama — Junior Web Developer</figcaption>
    </figure>
    
    <dl>
      <dt>Domisili</dt>
      <dd>Jakarta, Indonesia</dd>
      <dt>Jurusan</dt>
      <dd><abbr title="Rekayasa Perangkat Lunak">RPL</abbr></dd>
    </dl>
    
    <hr />

    <!-- ========== KONTEN UTAMA ========== -->
    
    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang <em>junior 
      web developer</em> yang tertarik dalam merancang struktur halaman web secara rapi.
    </p>
    <p>
      Saat ini, saya sedang mempelajari dasar-dasar HTML melalui guidebook 
      interaktif ini untuk membangun karir magang saya di bidang RPL.
    </p>

    <blockquote>
      <p>Menulis kode HTML yang terstruktur dengan baik adalah langkah pertama untuk menjadi web developer profesional yang andal.</p>
    </blockquote>
    <p>— <cite>Mentor Web Modern</cite></p>

    <hr />

    <!-- Keahlian Utama (Nested Unordered List) -->
    <h2>Keahlian Saya</h2>
    <ul>
      <li>
        Bahasa Pemrograman Web
        <ul>
          <li>HTML5 (Struktur &amp; Semantik)</li>
          <li>CSS3 (Gaya &amp; Tata Letak)</li>
        </ul>
      </li>
      <li>
        Peralatan Pendukung (Tools)
        <ul>
          <li>Visual Studio Code</li>
          <li>Google Chrome DevTools</li>
          <li>W3C HTML Validator</li>
        </ul>
      </li>
    </ul>

    <p>
      Untuk mengunduh curriculum vitae resmi saya, silakan klik 
      <a href="dokumen/resume.pdf" download>Unduh Resume (PDF)</a>.
    </p>

    <hr />

    <!-- Lokasi Sekolah -->
    <h2>Lokasi Sekolah Saya</h2>
    <iframe 
      src="https://www.google.com/maps/embed?..." 
      width="100%" 
      height="300" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      title="Peta petunjuk lokasi sekolah"
    ></iframe>

    <hr />

    <!-- Kontak & Inquiry Form (HTML5 Form & Validation) -->
    <h2 id="kontak">Kontak Saya</h2>
    <p>
      Ingin berkolaborasi atau menanyakan detail proyek? Silakan kirimkan pesan melalui formulir di bawah ini:
    </p>

    <form action="/proses-inquiry.html" method="POST">
      <fieldset>
        <legend>Kirim Pesan</legend>

        <!-- Input Nama -->
        <p>
          <label for="input-nama">Nama Lengkap:</label><br />
          <input 
            type="text" 
            id="input-nama" 
            name="nama_lengkap" 
            placeholder="Ketik nama lengkapmu..." 
            minlength="3" 
            required 
          />
        </p>

        <!-- Input Email -->
        <p>
          <label for="input-email">Alamat Email:</label><br />
          <input 
            type="email" 
            id="input-email" 
            name="email_pengirim" 
            placeholder="nama@domain.com" 
            required 
          />
        </p>

        <!-- Dropdown Tipe Inquiry -->
        <p>
          <label for="select-inquiry">Kategori Kerja Sama:</label><br />
          <select id="select-inquiry" name="tipe_inquiry" required>
            <option value="">-- Pilih Kategori --</option>
            <option value="proyek">Tanya Proyek Web</option>
            <option value="magang">Penawaran Magang Industri</option>
            <option value="hello">Hanya Menyapa (Say Hello)</option>
          </select>
        </p>

        <!-- Textarea Isi Pesan -->
        <p>
          <label for="text-pesan">Isi Pesan:</label><br />
          <textarea 
            id="text-pesan" 
            name="pesan_detail" 
            rows="5" 
            cols="40" 
            placeholder="Tulis pesan lengkapmu di sini..." 
            minlength="10" 
            required
          ></textarea>
        </p>

        <!-- Checkbox Persetujuan -->
        <p>
          <input 
            type="checkbox" 
            id="check-setuju" 
            name="persetujuan_data" 
            value="setuju" 
            required 
          />
          <label for="check-setuju">Saya menyetujui bahwa data ini akan dikirim untuk keperluan kontak.</label>
        </p>

        <!-- Tombol Submit -->
        <p>
          <button type="submit">🚀 Kirim Pesan</button>
        </p>
      </fieldset>
    </form>

    <p>
      Atau hubungi saya secara manual di <a href="mailto:rizki@example.com">rizki@example.com</a>.
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

## 🧠 Mengapa Struktur Form di Atas Sangat Baik?

- **Validasi Terpadu**: Kombinasi atribut `required`, `minlength="3"` pada nama, dan `minlength="10"` pada pesan meminimalkan pengiriman data kosong atau isian spam yang asal ketik.
- **Navigasi Terkunci**: Seluruh label input terhubung dengan id inputnya masing-masing, memudahkan interaksi ketika halaman dibuka melalui perangkat HP.
- **Pengelompokan Rapi**: `<fieldset>` memberikan sekat visual berupa kotak bingkai yang membedakan area formulir dengan konten artikel lain di halaman web.

Di bab berikutnya, kita akan mempelajari **Atribut HTML** secara lebih menyeluruh untuk memperdalam fungsionalitas tag-tag yang sudah kita pelajari!

**[Lanjut: Mini Project →](/bab6/mini-project/)**
