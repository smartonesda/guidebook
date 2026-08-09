---
title: "section & aside"
description: Memahami perbedaan section sebagai pengelompokan tematik dan aside sebagai konten pendukung — serta elemen semantik tambahan seperti figure, time, address, dan mark.
---

## 📂 Elemen `<section>`

### Apa itu `<section>`?

`<section>` adalah **pengelompokan tematik dari konten** — kumpulan konten yang memiliki tema atau topik yang sama, dan umumnya ditandai dengan sebuah heading.

```html
<main>
  <section id="tentang" aria-labelledby="judul-tentang">
    <h2 id="judul-tentang">Tentang Saya</h2>
    <p>Saya adalah junior web developer...</p>
  </section>

  <section id="keahlian" aria-labelledby="judul-keahlian">
    <h2 id="judul-keahlian">Keahlian</h2>
    <ul>...</ul>
  </section>

  <section id="proyek" aria-labelledby="judul-proyek">
    <h2 id="judul-proyek">Proyek Saya</h2>
    ...
  </section>
</main>
```

### Aturan `<section>`: Harus Ada Heading

Jika kamu menggunakan `<section>`, **hampir selalu harus ada heading di dalamnya**. Heading adalah yang mendefinisikan "topik" dari section tersebut.

Jika konten tidak punya heading dan tidak punya tema yang jelas, gunakan `<div>` biasa.

```html
<!-- ❌ Section tanpa heading — tidak bermakna -->
<section>
  <p>Teks ini mengambang tanpa konteks.</p>
</section>

<!-- ✅ Section dengan heading yang jelas -->
<section aria-labelledby="judul-skills">
  <h2 id="judul-skills">Keahlian Teknis</h2>
  <p>Berikut adalah keahlian yang saya miliki...</p>
</section>
```

### `<section>` vs `<article>`: Cara Membedakannya

Ini sering membingungkan. Gunakan dua pertanyaan ini:

**Pertanyaan 1:** Bisakah konten ini diambil dan dipublikasikan di tempat lain secara mandiri?
- Ya → `<article>`
- Tidak → pertimbangkan `<section>`

**Pertanyaan 2:** Apakah konten ini merupakan bagian dari konten yang lebih besar?
- Ya → `<section>` (atau bahkan `<div>`)
- Tidak → `<article>`

```html
<!-- section: bagian dari halaman tentang -->
<section id="pendidikan">
  <h2>Riwayat Pendidikan</h2>
  ...
</section>

<!-- article: setiap proyek berdiri sendiri -->
<article class="project-card">
  <h3>Website Toko Roti</h3>
  ...
</article>
```

### Bolehkah `<section>` Bersarang?

Ya, boleh. Ini umum untuk konten yang memiliki sub-topik:

```html
<section id="proyek">
  <h2>Proyek Saya</h2>
  
  <section id="proyek-selesai">
    <h3>Proyek Selesai</h3>
    ...
  </section>
  
  <section id="proyek-berjalan">
    <h3>Proyek Sedang Berjalan</h3>
    ...
  </section>
</section>
```

---

## 📎 Elemen `<aside>`

### Apa itu `<aside>`?

`<aside>` mewakili **konten yang berkaitan secara tidak langsung** dengan konten di sekitarnya — konten pendukung yang bisa dihilangkan tanpa mengurangi makna konten utama.

```html
<main>
  <article>
    <h1>Cara Belajar HTML dengan Efektif</h1>
    <p>Belajar HTML dimulai dari memahami struktur dasar...</p>
    
    <aside>
      <h2>Tips Cepat</h2>
      <ul>
        <li>Praktik setiap hari minimal 30 menit</li>
        <li>Selalu uji di browser</li>
      </ul>
    </aside>
    
    <p>Setelah memahami struktur, lanjutkan ke...</p>
  </article>
</main>
```

### Kapan menggunakan `<aside>`?

- Sidebar dengan informasi tambahan
- Catatan samping (*sidenotes*) dalam artikel
- Iklan yang berkaitan dengan konten
- Widget (kalender, tag cloud, penulis terkait)
- Kutipan menarik (*pull quotes*)
- Daftar artikel terkait

### Kapan TIDAK menggunakan `<aside>`?

- Jangan gunakan `<aside>` untuk konten yang tidak berkaitan sama sekali dengan konten di sekitarnya.
- Jangan gunakan `<aside>` hanya karena konten secara visual ada "di samping" — `<aside>` tentang makna, bukan posisi.

```html
<!-- ❌ SALAH: aside digunakan hanya karena posisi visual di sebelah kanan -->
<aside>
  <p>Ini paragraf biasa yang posisinya di kanan.</p>
</aside>

<!-- ✅ BENAR: aside berisi konten yang memang pendukung/pelengkap -->
<aside aria-label="Informasi tambahan">
  <h3>Tahukah Kamu?</h3>
  <p>HTML pertama kali dibuat oleh Tim Berners-Lee pada tahun 1991.</p>
</aside>
```

---

## 🖼️ Elemen `<figure>` dan `<figcaption>`

`<figure>` membungkus konten yang direferensikan dari konten utama — biasanya gambar, diagram, kode, atau kutipan. `<figcaption>` adalah keterangan untuk figure tersebut.

```html
<figure>
  <img 
    src="screenshot-proyek.png" 
    alt="Screenshot tampilan homepage website toko roti"
    width="800"
    height="450"
  />
  <figcaption>
    Tampilan halaman utama Website Toko Roti Nusantara yang responsif.
  </figcaption>
</figure>
```

`<figure>` tidak harus berupa gambar — bisa juga kode, tabel, atau kutipan:

```html
<figure>
  <pre><code>
&lt;header&gt;
  &lt;h1&gt;Judul Website&lt;/h1&gt;
&lt;/header&gt;
  </code></pre>
  <figcaption>Contoh struktur header yang semantic.</figcaption>
</figure>
```

---

## ⏰ Elemen `<time>`

`<time>` memberi makna mesin pada tanggal dan waktu yang ditampilkan ke pengguna.

```html
<!-- Tanpa time: hanya teks biasa -->
<p>Diperbarui: 10 Agustus 2026</p>

<!-- Dengan time: browser dan mesin memahami tanggalnya -->
<p>Diperbarui: <time datetime="2026-08-10">10 Agustus 2026</time></p>
```

Nilai `datetime` menggunakan format ISO 8601: `YYYY-MM-DD` untuk tanggal, `HH:MM` untuk waktu.

```html
<p>Acara dimulai: <time datetime="2026-08-10T09:00">10 Agustus 2026 pukul 09.00</time></p>
<p>Dibuat pada: <time datetime="2025">tahun 2025</time></p>
```

**Mengapa `<time>` penting?**
- Search engine memahami kapan konten dibuat/diperbarui.
- Kalender dan aplikasi jadwal bisa membaca tanggal dari markup.
- Aksesibilitas: screen reader bisa mengkonversi format tanggal sesuai lokal pengguna.

---

## 📍 Elemen `<address>`

`<address>` mewakili **informasi kontak** untuk penulis atau pemilik konten terdekatnya.

```html
<!-- Address untuk artikel blog -->
<article>
  <h2>Tips HTML untuk Pemula</h2>
  <address>
    Ditulis oleh <a href="mailto:rizki@example.com">Rizki Pratama</a>
  </address>
  <p>Belajar HTML dimulai dari...</p>
</article>

<!-- Address untuk website secara keseluruhan (di footer) -->
<footer>
  <address>
    <p>Hubungi saya: <a href="mailto:rizki@example.com">rizki@example.com</a></p>
    <p>Jakarta, Indonesia</p>
  </address>
</footer>
```

**Catatan penting:** `<address>` bukan untuk alamat fisik sembarang — ia spesifik untuk **informasi kontak penulis/pemilik konten**. Untuk alamat lokasi bisnis, gunakan teks biasa atau format lain.

---

## ✏️ Elemen `<mark>`

`<mark>` menandai teks yang **relevan atau disorot** dalam konteks tertentu — seperti hasil pencarian atau highlight penting.

```html
<p>
  Dalam belajar HTML, yang paling penting adalah memahami 
  <mark>struktur document</mark> sebelum beralih ke CSS.
</p>
```

Browser secara default menampilkan `<mark>` dengan background kuning. Ini berbeda dari `<strong>` (penting secara semantik) atau `<em>` (penekanan).

---

## 📊 Tabel Ringkasan Elemen Semantik

| Element | Makna | Contoh Penggunaan |
|---|---|---|
| `<section>` | Pengelompokan tematik dengan heading | Bagian "Tentang", "Keahlian", "Proyek" |
| `<aside>` | Konten pendukung/pelengkap | Sidebar, catatan samping |
| `<figure>` | Konten yang direferensikan dari teks | Gambar dengan caption, blok kode |
| `<figcaption>` | Keterangan untuk `<figure>` | Caption di bawah gambar |
| `<time>` | Tanggal dan waktu dengan mesin | Tanggal publikasi, jadwal |
| `<address>` | Informasi kontak penulis | Email, nomor kontak penulis |
| `<mark>` | Teks yang disorot | Hasil pencarian, highlight |

---

**[Lanjut: footer →](/bab8/footer/)**
