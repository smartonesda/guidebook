---
title: "Lab 3 — Multimedia & Tables"
description: Lab Debugging 3 — Mendiagnosis bug pemuatan gambar, isu CLS (Cumulative Layout Shift), tabel data tanpa header semantik, dan kesalahan struktur sel.
---

## 🔬 CHALLENGE 3.1 — Cumulative Layout Shift (CLS) pada Gambar

### Scenario
Saat halaman web dibuka dengan koneksi internet 3G, tulisan paragraf artikel mendadak melompat turun secara mengganggu ketika gambar ilustrasi selesai diunduh.

### Expected Behavior
Browser mencadangkan ruang kosong seluas gambar terlebih dahulu sebelum gambar selesai diunduh, sehingga teks paragraf di bawahnya tidak melompat.

### Broken Code
```html
<article>
  <h2>Proyek Aplikasi Web</h2>
  <img src="assets/images/app-preview.png" alt="Preview Aplikasi Web" loading="lazy" />
  <p>Aplikasi ini dibangun untuk membantu absensi siswa...</p>
</article>
```

### Symptoms
Skor Google Lighthouse Performance merosot tajam akibat *Cumulative Layout Shift (CLS)* tinggi.

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<article>
  <h2>Proyek Aplikasi Web</h2>
  <figure>
    <img 
      src="assets/images/app-preview.png" 
      alt="Preview antarmuka dashboard Aplikasi Web Absensi Siswa" 
      width="800" 
      height="450" 
      loading="lazy" 
    />
    <figcaption>Tampilan dashboard utama aplikasi absensi.</figcaption>
  </figure>
  <p>Aplikasi ini dibangun untuk membantu absensi siswa...</p>
</article>
```

**Alasan Teknis**:
Tanpa atribut `width` dan `height` eksplisit pada tag `<img>`, browser tidak dapat menghitung rasio aspek (*aspect ratio*) gambar sebelum file biner gambar selesai diunduh. Akibatnya, browser menganggap tinggi gambar adalah 0px, lalu mendadak memperluas ruang saat gambar selesai diunduh yang menyebabkan teks di bawahnya melompat.

---

## 🔬 CHALLENGE 3.2 — Tabel Data Tanpa Header & Scope Semantik

### Scenario
Seorang pengguna tunanetra mendengarkan pembacaan tabel jadwal pelajaran menggunakan screen reader. Namun screen reader hanya membacakan "cell 1, cell 2" tanpa menyebutkan nama hari atau jam pelajaran.

### Broken Code
```html
<table>
  <tr>
    <td>Jam</td>
    <td>Senin</td>
    <td>Selasa</td>
  </tr>
  <tr>
    <td>08:00</td>
    <td>Pemrograman Web</td>
    <td>Basis Data</td>
  </tr>
</table>
```

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<table>
  <caption>Jadwal Pelajaran Kelas XI RPL</caption>
  <thead>
    <tr>
      <th scope="col">Jam</th>
      <th scope="col">Senin</th>
      <th scope="col">Selasa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">08:00</th>
      <td>Pemrograman Web</td>
      <td>Basis Data</td>
    </tr>
  </tbody>
</table>
```

**Alasan Teknis**:
Menggunakan tag `<td>` (Table Data) untuk baris judul tabel membuat browser tidak mengenali sel tersebut sebagai header. Dengan menggantinya menjadi `<th>` (Table Header) dan memasang atribut `scope="col"` (untuk header kolom) serta `scope="row"` (untuk header baris), screen reader dapat secara otomatis mengumumkan konteks header setiap kali kursor berpindah sel.

---

**[Lanjut: Lab 4 — Forms & Inputs →](/bab14/lab-4-forms-inputs/)**
