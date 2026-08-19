---
title: "Lab 5 — Attributes & Data"
description: Lab Debugging 5 — Mendiagnosis bug ID duplikat, kesalahpahaman boolean attributes (required="false"), dan pembacaan custom data-* via JavaScript.
---

## 🔬 CHALLENGE 5.1 — Mitos Boolean Attribute `required="false"`

### Scenario
Seorang developer ingin menonaktifkan sifat wajib diisi pada kotak nomor telepon sekunder. Ia menuliskan `required="false"`, tetapi browser tetap menolak pengiriman form saat kotak nomor telepon dikosongkan.

### Expected Behavior
Kotak nomor telepon sekunder bersifat opsional dan form bisa dikirimkan meskipun kotak tersebut kosong.

### Broken Code
```html
<form action="/proses.php" method="POST">
  <label for="hp-utama">Nomor HP Utama:</label>
  <input type="tel" id="hp-utama" name="hp_utama" required />

  <label for="hp-cadangan">Nomor HP Cadangan (Opsional):</label>
  <input type="tel" id="hp-cadangan" name="hp_cadangan" required="false" />

  <button type="submit">Kirim</button>
</form>
```

### Symptoms
Saat tombol submit diklik dalam keadaan nomor HP cadangan kosong, browser memicu pop-up error bawaan: `"Please fill out this field"`.

---

### 🕵️ Investigation & Hints
1. *Bagaimana cara kerja boolean attribute di HTML5?*
2. *Apakah browser membaca String `"false"` sebagai instruksi penonaktifan?*

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<form action="/proses.php" method="POST">
  <label for="hp-utama">Nomor HP Utama:</label>
  <input type="tel" id="hp-utama" name="hp_utama" required />

  <label for="hp-cadangan">Nomor HP Cadangan (Opsional):</label>
  <input type="tel" id="hp-cadangan" name="hp_cadangan" />

  <button type="submit">Kirim</button>
</form>
```

**Alasan Teknis**:
Dalam spesifikasi HTML5, **boolean attributes** (`required`, `disabled`, `checked`, `readonly`) bekerja berdasarkan **keberadaan atribut tersebut**, bukan nilainya. Selama nama atribut `required` hadir di dalam tag (meskipun ditulis `required="false"`, `required="0"`, atau `required="no"`), browser menganggap fitur tersebut **aktif**. Untuk menonaktifkannya, hapus nama atribut tersebut secara total dari tag.

---

## 🔬 CHALLENGE 5.2 — Bug Duplicate ID pada DOM Target

### Scenario
Di halaman profil sekolah, terdapat dua seksi yang tidak sengaja menggunakan atribut `id="profil"` yang sama. Akibatnya, navigasi anchor link di header dan skrip JavaScript selalu salah memilih seksi.

### Broken Code
```html
<header>
  <a href="#profil">Ke Profil Sekolah</a>
</header>

<main>
  <section id="profil">
    <h2>Profil Kepala Sekolah</h2>
  </section>

  <section id="profil">
    <h2>Profil Fasilitas Sekolah</h2>
  </section>
</main>
```

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<header>
  <a href="#profil-sekolah">Ke Profil Sekolah</a>
</header>

<main id="konten-utama" tabindex="-1">
  <section id="profil-kepala" aria-labelledby="judul-kepala">
    <h2 id="judul-kepala">Profil Kepala Sekolah</h2>
  </section>

  <section id="profil-sekolah" aria-labelledby="judul-sekolah">
    <h2 id="judul-sekolah">Profil Fasilitas Sekolah</h2>
  </section>
</main>
```

**Alasan Teknis**:
Atribut `id` di dalam dokumen HTML **wajib bersifat unik secara mutlak**. Ketika terdapat dua atau lebih elemen dengan `id` yang sama, `document.getElementById()` di JavaScript dan navigasi fragment link peramban (`#id`) hanya akan menemukan elemen pertama di dalam alur dokumen, mengabaikan elemen kedua.

---

**[Lanjut: Lab 6 — Semantics & A11y →](/bab14/lab-6-semantic-a11y/)**
