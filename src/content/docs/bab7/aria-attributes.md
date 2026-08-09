---
title: "ARIA Attributes"
description: Memahami dasar ARIA attributes untuk aksesibilitas — role, aria-label, aria-labelledby, aria-describedby, aria-hidden, aria-expanded, dan kapan menggunakannya dengan benar.
---

Setelah memahami global attributes dan boolean attributes, ada satu kelompok attribute lagi yang sangat penting namun sering diabaikan: **ARIA attributes**.

ARIA singkatan dari **Accessible Rich Internet Applications** — sebuah standar yang dikeluarkan oleh W3C untuk membantu teknologi asistif (seperti screen reader) memahami konten web yang kompleks.

---

## 🦮 Mengapa ARIA Ada?

HTML memiliki banyak elemen semantik bawaan yang sudah "berbicara" kepada screen reader tanpa perlu bantuan apapun:

```html
<button>Kirim</button>     <!-- screen reader: "Kirim, tombol" -->
<a href="/home">Beranda</a> <!-- screen reader: "Beranda, link" -->
<h1>Judul</h1>             <!-- screen reader: "Judul, level 1" -->
```

Tapi masalah muncul ketika kita membangun komponen UI yang kompleks — dropdown, modal, tab, carousel, accordion — menggunakan `<div>` dan `<span>` yang tidak memiliki makna semantik bawaan:

```html
<!-- Browser tahu ini div, tapi apa fungsinya? -->
<div class="modal-overlay" onclick="closeModal()">
  <div class="modal-content">...</div>
</div>
```

Screen reader hanya tahu "ini adalah div" — tidak tahu bahwa ini adalah sebuah dialog modal yang penting. ARIA hadir untuk menjembatani kekurangan ini.

---

## 🏷️ `role` — Memberikan Peran Semantik

Attribute `role` memberitahu teknologi asistif apa **fungsi** dari sebuah element.

```html
<!-- Membuat div berfungsi seperti tombol bagi screen reader -->
<div role="button" tabindex="0">Klik Saya</div>

<!-- Menandai area sebagai dialog/modal -->
<div role="dialog" aria-modal="true" aria-labelledby="judul-modal">
  <h2 id="judul-modal">Konfirmasi Hapus</h2>
  <p>Apakah kamu yakin ingin menghapus item ini?</p>
  <button>Ya, Hapus</button>
  <button>Batal</button>
</div>
```

**Nilai `role` yang umum:**

| `role` | Setara element HTML | Fungsi |
|---|---|---|
| `button` | `<button>` | Tombol yang bisa diklik |
| `link` | `<a>` | Tautan navigasi |
| `navigation` | `<nav>` | Area navigasi |
| `main` | `<main>` | Konten utama halaman |
| `banner` | `<header>` | Header halaman |
| `contentinfo` | `<footer>` | Footer halaman |
| `dialog` | — | Modal/dialog box |
| `alert` | — | Pesan penting yang perlu perhatian segera |
| `search` | — | Area pencarian |
| `list` | `<ul>` / `<ol>` | Daftar |
| `listitem` | `<li>` | Item dalam daftar |

> **Prinsip penting:** Jika ada element HTML semantik yang tepat, **gunakan element tersebut** — bukan `<div role="button">`. Element `<button>` sudah memiliki semantik bawaan, keyboard support, dan styling browser default. Gunakan ARIA hanya ketika tidak ada element HTML yang cocok.

---

## 🏷️ `aria-label` — Label Teks untuk Teknologi Asistif

Memberikan label teks yang dibacakan oleh screen reader — berguna ketika element tidak memiliki teks yang terlihat.

```html
<!-- Tombol hanya berisi ikon — screen reader tidak tahu apa fungsinya -->
<button>✕</button>  <!-- screen reader: "x, button" — tidak jelas! -->

<!-- ✅ Dengan aria-label -->
<button aria-label="Tutup dialog">✕</button>  <!-- screen reader: "Tutup dialog, button" -->
```

```html
<!-- Icon-only navigation -->
<nav>
  <a href="/" aria-label="Kembali ke halaman utama">🏠</a>
  <a href="/profil" aria-label="Lihat profil saya">👤</a>
  <a href="/notifikasi" aria-label="Lihat notifikasi">🔔</a>
</nav>
```

---

## 🏷️ `aria-labelledby` — Referensi ke Elemen Label

Mirip `aria-label`, tapi nilai diisi dengan `id` dari element lain yang berisi teks labelnya.

```html
<h2 id="judul-form">Formulir Kontak</h2>
<form aria-labelledby="judul-form">
  <!-- Screen reader tahu form ini berlabel "Formulir Kontak" -->
</form>
```

```html
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h3 id="dialog-title">Konfirmasi Penghapusan</h3>
  <p id="dialog-desc">Tindakan ini tidak dapat dibatalkan. Data yang dihapus tidak bisa dikembalikan.</p>
  <button>Hapus</button>
  <button>Batal</button>
</div>
```

---

## 🏷️ `aria-describedby` — Referensi ke Elemen Deskripsi

Seperti `aria-labelledby`, tapi untuk deskripsi tambahan (bukan label utama).

```html
<label for="sandi">Kata Sandi:</label>
<input type="password" id="sandi" name="sandi" aria-describedby="sandi-petunjuk" />
<p id="sandi-petunjuk" class="hint">
  Minimal 8 karakter, kombinasi huruf besar, huruf kecil, dan angka.
</p>
```

Screen reader akan membacakan: "Kata Sandi, edit, password. Minimal 8 karakter, kombinasi huruf besar, huruf kecil, dan angka."

---

## 🏷️ `aria-hidden` — Sembunyikan dari Screen Reader

Menyembunyikan element dari screen reader tanpa menyembunyikannya secara visual.

```html
<!-- Ikon dekoratif yang tidak perlu dibacakan -->
<button>
  <span aria-hidden="true">📧</span>
  Kirim Email
</button>
<!-- Screen reader: "Kirim Email, button" — ikon emoji tidak dibacakan -->
```

```html
<!-- Teks yang hanya untuk pengguna visual, bukan screen reader -->
<div aria-hidden="true" class="visual-ornament">✦ ✦ ✦</div>
```

**Perhatian:** Jangan gunakan `aria-hidden="true"` pada element yang mengandung konten penting atau yang bisa difokus keyboard (input, button, link).

---

## 🏷️ `aria-expanded` — Status Terbuka/Tertutup

Menginformasikan apakah sebuah komponen (dropdown, accordion, menu) sedang terbuka atau tertutup.

```html
<button aria-expanded="false" aria-controls="menu-dropdown">
  Menu ▼
</button>
<ul id="menu-dropdown" hidden>
  <li><a href="/profil">Profil</a></li>
  <li><a href="/pengaturan">Pengaturan</a></li>
</ul>
```

Ketika menu dibuka via JavaScript, update `aria-expanded="true"` dan hapus `hidden` dari `<ul>`. Screen reader akan mengumumkan perubahan status kepada pengguna.

---

## 🏷️ `aria-required` — Wajib Diisi (ARIA)

Melengkapi atau menggantikan attribute HTML `required` untuk custom form elements.

```html
<!-- Untuk custom dropdown yang tidak pakai <select> -->
<div role="listbox" aria-required="true" aria-label="Pilih Kategori">
  ...
</div>
```

Untuk element form HTML standar, gunakan atribute `required` biasa — itu sudah cukup.

---

## 🏷️ `aria-live` — Pengumuman Konten Dinamis

Memberitahu screen reader untuk mengumumkan perubahan konten secara otomatis.

```html
<!-- Area pesan yang berubah dinamis via JavaScript -->
<div aria-live="polite" id="pesan-status">
  <!-- JavaScript akan mengisi konten di sini -->
</div>
```

Nilai:
- `"polite"` — tunggu pengguna selesai dengan aktivitas sekarang, baru umumkan.
- `"assertive"` — umumkan segera, interupsi aktivitas sekarang (untuk error penting).
- `"off"` — jangan umumkan (default).

---

## ⚠️ Aturan Utama Penggunaan ARIA

### Aturan 1: Tidak ada ARIA lebih baik daripada ARIA yang salah
ARIA yang salah lebih berbahaya dari tidak ada ARIA — bisa membuat konten menjadi tidak bisa diakses sama sekali oleh screen reader.

### Aturan 2: Gunakan HTML semantik lebih dulu
```html
<!-- ❌ Hindari: div + role yang meniru element asli -->
<div role="button" tabindex="0" onclick="kirim()">Kirim</div>

<!-- ✅ Gunakan: element HTML yang sudah semantik -->
<button onclick="kirim()">Kirim</button>
```

### Aturan 3: Jangan ubah semantik bawaan tanpa alasan
```html
<!-- ❌ Tidak masuk akal: h1 dengan role yang merusak semantiknya -->
<h1 role="paragraph">Judul Halaman</h1>
```

### Aturan 4: Semua widget interaktif harus bisa dioperasikan via keyboard
Jika kamu membuat tombol dengan `<div role="button">`, kamu bertanggung jawab menambahkan `tabindex="0"` dan handler keyboard (`Enter`/`Space`).

---

## 📊 Ringkasan ARIA Attributes

| Attribute | Fungsi |
|---|---|
| `role` | Menentukan peran/fungsi element |
| `aria-label` | Label teks langsung untuk screen reader |
| `aria-labelledby` | Referensi ke element lain sebagai label |
| `aria-describedby` | Referensi ke element lain sebagai deskripsi |
| `aria-hidden` | Sembunyikan dari screen reader |
| `aria-expanded` | Status terbuka/tertutup komponen |
| `aria-required` | Tandai field sebagai wajib diisi |
| `aria-live` | Umumkan perubahan konten dinamis |
| `aria-modal` | Tandai element sebagai modal |
| `aria-controls` | Hubungkan tombol dengan komponen yang dikontrolnya |

---

Di halaman berikutnya, kita akan menerapkan semua attribute yang telah dipelajari ke dalam project Portfolio kita.

**[Lanjut: Studi Kasus →](/bab7/studi-kasus/)**
