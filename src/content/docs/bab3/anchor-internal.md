---
title: "Anchor Internal"
description: Memahami penggunaan fragment identifier untuk membuat tautan lompatan dalam satu halaman web.
---

Jika halaman webmu memiliki konten yang sangat panjang ke bawah (misalnya halaman artikel panduan atau ketentuan layanan), pembaca akan kesulitan jika harus melakukan scroll manual ke atas dan ke bawah.

HTML memungkinkan kita membuat tautan pintas yang melompat langsung ke bagian spesifik di halaman yang sama menggunakan **Anchor Internal** atau **Fragment Identifier**.

---

## 🏷️ Hubungan `id` dan `#` (Hash)

Untuk membuat link lompatan internal, kita memerlukan dua langkah kerja:

1. **Berikan `id` unik** pada elemen tujuan yang akan dilompati (misalnya pada heading `<h2>`).
2. **Buat tag `<a>` dengan nilai `href` diawali tanda pagar `#`** diikuti nama `id` tujuan tersebut.

```html
<!-- Tombol Tautan -->
<a href="#kontak-saya">Lompat ke Kontak</a>

<!-- ... Konten yang sangat panjang ... -->

<!-- Elemen Tujuan -->
<h2 id="kontak-saya">Hubungi Saya Di Sini</h2>
<p>Alamat email: surel@example.com</p>
```

Saat pengguna mengklik tautan *Lompat ke Kontak*, halaman akan langsung digulirkan (*scroll*) seketika oleh browser sehingga judul *Hubungi Saya Di Sini* muncul di bagian atas layar.

---

## 🔝 Melompat Kembali ke Bagian Paling Atas Halaman

Kita juga sering melihat tombol *"Kembali ke Atas"* di bagian bawah halaman web. Untuk membuatnya, kita cukup menggunakan tanda pagar tunggal `#` tanpa nama id:

```html
<p>
  Teks artikel yang sudah selesai dibaca...
  <a href="#_top">Kembali ke Atas ↑</a>
</p>
```

Browser secara otomatis mengenali `#` (atau `#_top`) sebagai instruksi untuk melompat kembali ke baris paling pertama dokumen HTML (koordinat atas halaman).

:::tip[Tips Transisi Lembut]
Secara default, browser akan melompat secara instan (*kaget*). Di bab-bab berikutnya nanti, kita bisa membuat efek gulir lembut (*smooth scroll*) hanya dengan menambahkan satu baris CSS: `html { scroll-behavior: smooth; }`.
:::

Mari kita bahas cara membuat tautan khusus untuk keperluan surel, panggilan telepon, dan mengunduh berkas.

**[Lanjut: Link Email & Telepon →](/bab3/link-email-telepon/)**
