---
title: "Elemen iframe"
description: Memahami penggunaan iframe untuk menyematkan konten eksternal secara aman dan berstandar aksesibilitas.
---

Terkadang kita ingin menampilkan konten interaktif dari website lain langsung di dalam halaman web kita — misalnya menampilkan peta lokasi dari *Google Maps*, menyematkan video presentasi dari *YouTube*, atau memajang lembar kerja dokumen.

Di dalam HTML, kita menyematkan dokumen luar ini menggunakan elemen **`<iframe>`** (singkatan dari *Inline Frame*).

---

## 🏗️ Cara Kerja `<iframe>`

Elemen `<iframe>` bertindak seperti jendela kaca kecil yang menampilkan situs web lain secara utuh di dalam halaman webmu.

Berikut adalah contoh penyematan video YouTube resmi menggunakan iframe:

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video player — Demo Proyek" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>
```

---

## ♿ Atribut Wajib Aksesibilitas: `title`

Bagi pengguna tunanetra yang tidak bisa melihat layar, browser akan membaca isi tag `<iframe>` untuk memberi tahu mereka jendela apa yang sedang aktif. 

Oleh karena itu, **kamu wajib memberikan atribut `title` yang deskriptif** pada setiap tag `<iframe>` agar mereka tahu konten apa yang sedang disematkan di sana.

```html
<!-- ✅ BENAR: Menggunakan title untuk menjelaskan isi bingkai -->
<iframe src="https://www.google.com/maps/embed..." title="Peta Lokasi Kantor Pusat SMK RPL"></iframe>
```

---

## 🔒 Faktor Keamanan & Performa Iframe

Menyisipkan halaman web orang lain di dalam website kita memiliki risiko keamanan tinggi (misalnya pencurian data input). Pasang atribut berikut demi keamanan dan performa webmu:

### 1. Keamanan: Atribut `sandbox`
Membatasi hak akses kode JavaScript yang berjalan di dalam iframe agar tidak bisa mencuri data atau memanipulasi halaman asalamu.
```html
<iframe src="https://example.com" sandbox="allow-scripts allow-same-origin"></iframe>
```

### 2. Performa: Atribut `loading="lazy"`
Menunda browser mengunduh data iframe tersebut sampai pengunjung menggulung layar mendekati area iframe tersebut berada. Ini menghemat kuota internet dan mempercepat loading awal halaman webmu.
```html
<iframe src="https://example.com" loading="lazy" title="..."></iframe>
```

:::warning[Kapan harus menghindari iframe?]
Gunakan iframe hanya jika didapatkan dari sumber tepercaya (seperti YouTube, Google, atau Spotify). Hindari menyisipkan iframe dari situs yang tidak dikenal karena mereka bisa menyelipkan kode jahat (*malware*) ke komputermu atau pengunjung halamanmu.
:::

Mari kita rapikan cara mengorganisasikan file-file media di dalam folder proyek kita sebelum melangkah ke studi kasus.

**[Lanjut: Organisasi File Media →](/bab4/organisasi-file-media/)**
