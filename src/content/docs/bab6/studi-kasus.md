---
title: "Studi Kasus"
description: Membangun Contact & Project Inquiry Form yang lengkap, aksesibel, dan tervalidasi untuk halaman portfolio — analisis mendalam setiap keputusan desain form.
---

> *"Form yang baik bukan hanya tentang bisa diisi. Form yang baik adalah yang memudahkan pengguna menyampaikan apa yang mereka butuhkan dengan benar, cepat, dan nyaman."*

---

## 🎯 Tujuan Studi Kasus

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Menganalisis mengapa setiap keputusan desain form dibuat.
- Membangun form HTML yang lengkap, terstruktur, dan aksesibel dari nol.
- Memilih tipe input yang tepat untuk setiap kebutuhan data.
- Menerapkan validasi yang masuk akal dan tidak berlebihan.
- Mengintegrasikan form ke dalam project portfolio yang sudah ada dari BAB 1–5.

---

## 🧠 Konteks: Bagian Kontak Portfolio yang Pasif

Di BAB 5, bagian Kontak di `index.html` kita masih sangat sederhana:

```html
<!-- Kontak versi BAB 5 — masih pasif -->
<h2 id="kontak">Kontak Saya</h2>
<p>
  Jangan ragu untuk menghubungi saya melalui surat elektronik di 
  <a href="mailto:rizki@example.com">rizki@example.com</a> atau mengintip 
  profil repositori kode saya di github.com/rizkipratama.
</p>
```

**Masalah dengan pendekatan ini:**
1. Pengunjung harus membuka aplikasi email mereka secara terpisah — gesekan (friction) yang tidak perlu.
2. Tidak ada struktur untuk pesan — pengunjung bisa mengirim email tanpa konteks yang cukup.
3. Tidak ada cara untuk memahami keperluan pengunjung (apakah mau melamar magang? mengajak kolaborasi? atau sekadar bertanya?).
4. Kita tidak tahu apa yang ingin disampaikan pengunjung sampai membaca emailnya.

**Solusi:** Ubah bagian kontak menjadi **Contact & Project Inquiry Form** yang terstruktur.

---

## 🏗️ Perencanaan Form: Apa yang Perlu Dikumpulkan?

Sebelum menulis satu baris kode pun, kita harus bertanya: **data apa yang benar-benar kita butuhkan dari pengunjung?**

| Data | Kenapa Perlu? | Tipe Input yang Tepat |
|---|---|---|
| Nama lengkap | Agar kita tahu siapa yang menghubungi | `type="text"` |
| Email | Untuk membalas pesan | `type="email"` |
| Nomor WhatsApp | Opsi kontak alternatif yang cepat | `type="tel"` |
| Kategori inquiry | Agar kita bisa memprioritaskan balasan | `<select>` |
| Metode kontak pilihan | Preferensi komunikasi pengunjung | `type="radio"` |
| Pesan / detail | Inti dari yang ingin disampaikan | `<textarea>` |
| Persetujuan data | Etika & legalitas pengiriman data | `type="checkbox"` |

---

## 💡 Keputusan Desain yang Perlu Dipikirkan

**Mengapa menggunakan `<fieldset>`?**
Form kita punya dua kelompok data: identitas pengirim dan detail pesan. Memisahkan keduanya dalam `<fieldset>` berbeda memberikan struktur visual yang jelas dan membantu screen reader memahami konteks setiap bagian.

**Mengapa kategori inquiry menggunakan `<select>` bukan radio?**
Karena opsinya cukup banyak (5 pilihan) dan hanya satu yang boleh dipilih. Radio button efektif untuk 2-4 pilihan yang selalu tampak di layar. Untuk 5+ pilihan, dropdown lebih hemat ruang.

**Mengapa metode kontak menggunakan radio?**
Karena opsinya hanya 2-3, dan kita ingin pengguna melihat semua pilihan sekaligus tanpa harus membuka dropdown. Radio button lebih cocok di sini.

**Mengapa `type="tel"` dan bukan `type="text"` untuk nomor HP?**
Karena di perangkat mobile, `type="tel"` memunculkan keyboard numerik yang lebih mudah digunakan untuk memasukkan nomor telepon.

---

## 💻 Implementasi: Portfolio v0.6 (`index.html`)

Berikut adalah file `index.html` yang sudah diperbarui dengan Contact & Project Inquiry Form:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>

    <!-- ========== NAVIGASI ========== -->
    <p>
      <strong>Beranda</strong> | 
      <a href="projects.html">Proyek Saya</a> | 
      <a href="#kontak">Hubungi Saya</a>
    </p>

    <hr />

    <!-- ========== HEADER PROFIL ========== -->
    <figure>
      <img 
        src="assets/images/foto-rizki.jpg" 
        alt="Foto potret wajah Rizki Pratama tersenyum" 
        width="150" 
        height="150" 
      />
      <figcaption>Rizki Pratama — Junior Web Developer</figcaption>
    </figure>
    
    <dl>
      <dt>Domisili</dt>
      <dd>Jakarta, Indonesia</dd>
      <dt>Jurusan</dt>
      <dd><abbr title="Rekayasa Perangkat Lunak">RPL</abbr></dd>
    </dl>
    
    <hr />

    <!-- ========== TENTANG SAYA ========== -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang <em>junior 
      web developer</em> yang sedang membangun portofolio pertama saya.
    </p>

    <blockquote>
      <p>Menulis kode HTML yang terstruktur dengan baik adalah langkah pertama untuk menjadi web developer profesional yang andal.</p>
    </blockquote>
    <p>— <cite>Mentor Web Modern</cite></p>

    <hr />

    <!-- ========== KEAHLIAN ========== -->
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
        Peralatan Pendukung
        <ul>
          <li>Visual Studio Code</li>
          <li>Google Chrome DevTools</li>
          <li>W3C HTML Validator</li>
        </ul>
      </li>
    </ul>

    <p>
      Unduh <a href="dokumen/resume.pdf" download>Resume PDF saya</a> untuk informasi lebih lengkap.
    </p>

    <hr />

    <!-- ========== KONTAK & INQUIRY FORM ========== -->
    <h2 id="kontak">Hubungi Saya</h2>
    <p>
      Ingin berkolaborasi, mengajukan inquiry proyek, atau sekadar menyapa? 
      Isi formulir di bawah ini dan saya akan membalas dalam 1–2 hari kerja.
    </p>

    <form action="/proses-inquiry.php" method="POST">

      <!-- FIELDSET 1: Identitas Pengirim -->
      <fieldset>
        <legend>Informasi Pengirim</legend>

        <!-- Nama Lengkap -->
        <p>
          <label for="nama-pengirim">Nama Lengkap: <abbr title="Wajib diisi">*</abbr></label><br />
          <input 
            type="text" 
            id="nama-pengirim" 
            name="nama_lengkap" 
            placeholder="Contoh: Budi Santoso"
            minlength="3"
            maxlength="100"
            autocomplete="name"
            required 
          />
        </p>

        <!-- Email -->
        <p>
          <label for="email-pengirim">Alamat Email: <abbr title="Wajib diisi">*</abbr></label><br />
          <input 
            type="email" 
            id="email-pengirim" 
            name="email_pengirim" 
            placeholder="nama@domain.com"
            autocomplete="email"
            required 
          />
        </p>

        <!-- Nomor WhatsApp (Opsional) -->
        <p>
          <label for="hp-pengirim">Nomor WhatsApp (Opsional):</label><br />
          <input 
            type="tel" 
            id="hp-pengirim" 
            name="nomor_hp" 
            placeholder="08xx-xxxx-xxxx"
            pattern="[0-9]{10,13}"
            title="Masukkan nomor HP 10-13 digit tanpa spasi atau tanda hubung"
          />
        </p>
      </fieldset>

      <!-- FIELDSET 2: Detail Inquiry -->
      <fieldset>
        <legend>Detail Pesan</legend>

        <!-- Kategori Inquiry (Select) -->
        <p>
          <label for="kategori-inquiry">Kategori Inquiry: <abbr title="Wajib diisi">*</abbr></label><br />
          <select id="kategori-inquiry" name="kategori_inquiry" required>
            <option value="">-- Pilih Kategori --</option>
            <option value="proyek-web">Proyek Web Development</option>
            <option value="desain-ui">Proyek Desain UI/UX</option>
            <option value="magang">Penawaran / Peluang Magang</option>
            <option value="kolaborasi">Kolaborasi Proyek Sekolah</option>
            <option value="halo">Hanya Menyapa 👋</option>
          </select>
        </p>

        <!-- Metode Kontak Pilihan (Radio) -->
        <fieldset>
          <legend>Metode Kontak yang Kamu Inginkan:</legend>
          
          <input type="radio" id="via-email" name="metode_kontak" value="email" checked />
          <label for="via-email">Balas via Email</label>

          <input type="radio" id="via-wa" name="metode_kontak" value="whatsapp" />
          <label for="via-wa">Balas via WhatsApp</label>

          <input type="radio" id="via-bebas" name="metode_kontak" value="bebas" />
          <label for="via-bebas">Terserah yang paling mudah</label>
        </fieldset>

        <!-- Pesan Detail (Textarea) -->
        <p>
          <label for="pesan-inquiry">Pesan / Detail Inquiry: <abbr title="Wajib diisi">*</abbr></label><br />
          <textarea 
            id="pesan-inquiry" 
            name="pesan_detail" 
            rows="6" 
            placeholder="Ceritakan lebih lanjut: apa yang ingin kamu diskusikan, proyek apa yang kamu bayangkan, atau pertanyaan yang ingin kamu ajukan..."
            minlength="20"
            maxlength="2000"
            required
          ></textarea>
        </p>
      </fieldset>

      <!-- Checkbox Persetujuan -->
      <p>
        <input 
          type="checkbox" 
          id="persetujuan-data" 
          name="persetujuan" 
          value="setuju" 
          required 
        />
        <label for="persetujuan-data">
          Saya menyetujui bahwa data yang saya kirim melalui formulir ini akan 
          digunakan untuk keperluan balasan kontak saja dan tidak akan disebarluaskan.
        </label>
      </p>

      <!-- Tombol Submit -->
      <p>
        <button type="submit">🚀 Kirim Pesan</button>
        <button type="reset">Hapus Semua Isian</button>
      </p>

    </form>

    <p>
      Atau hubungi langsung via email: 
      <a href="mailto:rizki@example.com">rizki@example.com</a>
    </p>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Dibuat oleh Rizki Pratama &copy; <time datetime="2026">2026</time>. 
      Diperbarui: <time datetime="2026-08-10">10 Agustus 2026</time>.
    </p>

  </body>
</html>
```

---

## 🔍 Analisis Mendalam: Mengapa Setiap Bagian Ditulis Seperti Itu?

### Mengapa ada dua `<fieldset>` berbeda?

Form kita punya dua jenis data yang secara logis berbeda: siapa yang mengirim (identitas) dan apa yang ingin disampaikan (detail pesan). Memisahkan keduanya dalam `<fieldset>` berbeda membuat form lebih terorganisir dan lebih mudah dipahami oleh screen reader.

### Mengapa radio button "Metode Kontak" ada di dalam `<fieldset>` tersendiri?

Grup radio button **selalu harus dibungkus `<fieldset>` dengan `<legend>`**. Ini bukan hanya best practice — ini adalah standar aksesibilitas. Screen reader akan membaca `<legend>` sebagai pertanyaan, lalu membaca setiap radio button sebagai pilihan jawaban.

Tanpa `<fieldset>` dan `<legend>` untuk grup radio, screen reader hanya membaca "Balas via Email, radio button" tanpa konteks pertanyaannya.

### Mengapa `<abbr title="Wajib diisi">*</abbr>` digunakan?

Ini adalah konvensi form yang sudah dikenal luas: tanda bintang (*) menandai field wajib. Menggunakan `<abbr>` memberikan tooltip "Wajib diisi" yang muncul ketika pengguna mengarahkan kursor ke tanda bintang tersebut. Ini lebih informatif dari sekadar `*` biasa.

### Mengapa ada `autocomplete="name"` dan `autocomplete="email"`?

Atribut `autocomplete` membantu browser mengisi form secara otomatis berdasarkan data yang pernah pengguna simpan. Ini meningkatkan kenyamanan pengguna secara signifikan — mereka tidak perlu mengetik ulang nama dan email setiap kali mengisi form di website yang berbeda.

### Mengapa ada tombol `type="reset"`?

Tombol reset memungkinkan pengguna menghapus semua isian jika mereka ingin mulai dari awal. Ini berguna untuk form yang panjang. Tapi letakkan jauh dari tombol submit agar tidak diklik secara tidak sengaja.

### Mengapa ada pilihan kontak alternatif di bawah form?

Selalu sediakan alternatif bagi pengguna yang tidak mau atau tidak bisa mengisi form. Beberapa pengguna lebih suka mengirim email langsung. Menyediakan link `mailto:` sebagai alternatif adalah UX yang baik.

---

## ✅ Checklist Verifikasi

Sebelum melanjutkan, periksa form kamu:

```
☐ Setiap input memiliki <label> yang terhubung via for↔id
☐ Setiap input memiliki atribut name yang deskriptif
☐ Grup radio button dibungkus <fieldset> + <legend>
☐ <select> punya pilihan pertama dengan value=""
☐ Checkbox persetujuan ada dan required
☐ Tombol submit memiliki type="submit"
☐ Klik tulisan label memindahkan fokus ke input terkait
☐ Mencoba submit dengan field kosong memunculkan pesan browser
☐ Nomor HP dengan format salah ditolak browser
☐ HTML lolos validator.w3.org tanpa error
```

---

**[Lanjut: Mini Project →](/bab6/mini-project/)**
