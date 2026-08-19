---
title: "Atribut target"
description: Mengontrol bagaimana tautan dibuka menggunakan atribut target dan menjaga keamanan dengan rel.
---

Secara default, saat pengguna mengklik sebuah tautan, browser akan memuat halaman tujuan di **tab yang sama** (menimpa halaman yang sedang aktif). Perilaku ini disebut sebagai konteks perambahan (*browsing context*).

Untuk merubah perilaku ini, HTML menyediakan atribut **`target`**.

---

## 🧭 Nilai Atribut `target` yang Sering Digunakan

| Nilai Atribut | Perilaku Browser | Kapan Digunakan |
|---|---|---|
| **`target="_self"`** | Membuka halaman tujuan di tab/jendela yang sama (menimpa halaman aktif). Ini adalah perilaku default. | Untuk navigasi halaman internal di dalam websitemu sendiri. |
| **`target="_blank"`** | Membuka halaman tujuan di **tab baru** atau jendela browser baru. | Untuk tautan eksternal (mengarah ke website milik orang lain) agar pengunjung tidak meninggalkan websitemu. |

```html
<!-- Membuka situs luar di tab baru -->
<a href="https://github.com" target="_blank">Kunjungi GitHub Saya</a>
```

---

## 🔒 Masalah Keamanan & Performa: Mengapa Butuh `rel="noopener"`?

Saat kamu menggunakan `target="_blank"`, ada sebuah celah keamanan bernama **Reverse Tabnabbing**. 

Halaman tujuan yang baru dibuka memiliki akses kontrol kembali ke halaman asalmu melalui objek JavaScript bernama `window.opener`. Situs penjahat bisa memanipulasi halaman asalmu untuk dialihkan ke halaman login palsu (*phishing*) tanpa sepengetahuan pengguna!

Untuk mengatasi celah keamanan ini, kita wajib menyertakan atribut **`rel="noopener"`** atau **`rel="noreferrer"`** setiap kali menuliskan `target="_blank"`:

```html
<!-- ✅ BENAR & AMAN: Menghalangi akses window.opener -->
<a 
  href="https://github.com" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Kunjungi GitHub Saya
</a>
```

- **`noopener`**: Memutuskan hubungan akses antara tab baru dengan tab asal untuk keamanan dan performa memori.
- **`noreferrer`**: Sama seperti `noopener`, ditambah menyembunyikan info alamat asal halaman (*referrer header*) saat pindah ke server tujuan.

:::note[Catatan Browser Modern]
Browser modern saat ini (seperti Google Chrome dan Firefox versi terbaru) secara otomatis menerapkan perilaku `noopener` secara bawaan ketika mendeteksi `target="_blank"`. Namun, menuliskan atribut `rel` secara manual tetap dianggap sebagai standar praktek terbaik (*best practice*) demi mendukung browser versi lama.
:::

Mari kita pelajari cara membuat tautan lompatan di dalam satu halaman yang sama menggunakan fragment identifier.

**[Lanjut: Anchor Internal →](/bab3/anchor-internal/)**
