---
title: "Keyboard Navigation"
description: Memahami navigasi keyboard — tombol Tab, fokus, indikator focus outline, penggunaan tabindex secara benar, dan cara menguji website hanya dengan keyboard.
---

Banyak pengguna menavigasi web **tanpa pernah menyentuh mouse**:
- Orang dengan gangguan motorik yang menggunakan keyboard atau switch device
- Pengguna screen reader yang bernavigasi menggunakan perintah keyboard
- Power user yang lebih memilih ketukan tombol daripada menggerakkan mouse

Jika sebuah website tidak bisa dioperasikan dengan keyboard, bagi pengguna-pengguna ini **website tersebut pada dasarnya rusak**.

---

## ⌨️ Tombol Keyboard Standar untuk Navigasi Web

Ketika seseorang menavigasi website hanya dengan keyboard, inilah tombol-tombol yang mereka gunakan:

| Tombol | Aksi Standar Browser |
|---|---|
| **`Tab`** | Pindah ke elemen interaktif berikutnya |
| **`Shift` + `Tab`** | Pindah ke elemen interaktif sebelumnya |
| **`Enter`** | Mengaktifkan link (`<a>`) atau menekan tombol (`<button>`) |
| **`Space`** | Menekan tombol (`<button>`), mencentang/melihat checkbox |
| **`Panah atas/bawah`** | Scroll halaman, memilih opsi dalam `<select>` atau radio group |
| **`Esc`** | Menutup modal, dialog, atau menu dropdown |

---

## 🔍 Konsep Focus dan Indikator Focus

**Focus** adalah kondisi di mana sebuah elemen interaktif sedang "aktif" dan siap menerima masukan dari keyboard.

Browser secara default menampilkan **indikator fokus** (biasanya berupa garis biru atau hitam di sekeliling elemen) ketika pengguna menekan tombol Tab untuk berpindah ke elemen tersebut.

```html
<!-- Ketika pengguna menekan Tab ke button ini: -->
<button type="submit">Kirim Pesan</button>
<!-- Browser menampilkan garis di sekeliling tombol → indikator fokus -->
```

### ❌ Kesalahan Terbesar: Menonaktifkan Focus Outline di CSS!

Banyak developer pemula (dan beberapa desainer) menganggap garis fokus itu "jelek" dan menghapusnya dengan CSS:

```css
/* ❌ SANGAT BERBAHAYA — JANGAN PERNAH LAKUKAN INI! */
*:focus {
  outline: none;  /* menghapus indikator fokus sepenuhnya! */
}
```

Ketika kamu melakukan ini, pengguna keyboard **tidak bisa lagi melihat di mana kursor mereka berada**. Ini seperti mematikan kursor mouse — pengguna benar-benar buta akan posisi mereka di halaman.

### ✅ Yang Seharusnya Lakukan jika Ingin Custom Styling Focus:

```css
/* ✅ Jangan hapus outline — ganti dengan style fokus yang lebih cantik */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid #0ea5e9;  /* warna biru terang */
  outline-offset: 2px;
}
```

Pseudo-class `:focus-visible` adalah standar modern: ia hanya menampilkan garis fokus ketika pengguna bernavigasi via **keyboard** (bukan saat diklik mouse).

---

## 🏷️ Penggunaan `tabindex` Secara Benar

Atribut `tabindex` mengontrol urutan navigasi Tab.

### 1. `tabindex="0"` — Masukkan ke Urutan Tab

Membuat elemen non-interaktif bisa difokus via Tab dan masuk ke urutan alur alami dokumen.

```html
<!-- Kartu custom yang bisa diklik via JavaScript: -->
<div 
  class="card-interactive" 
  tabindex="0" 
  role="button"
  aria-label="Lihat detail proyek"
>
  ...
</div>
```

### 2. `tabindex="-1"` — Fokus via JavaScript Saja

Elemen **tidak masuk** ke urutan Tab pengguna, tapi **bisa difokus secara programatik** oleh JavaScript menggunakan `element.focus()`.

```html
<!-- Modal dialog yang muncul via JavaScript -->
<div id="modal" class="modal" tabindex="-1" role="dialog">
  <h2>Judul Modal</h2>
  <!-- JavaScript fokus ke modal ini saat dibuka: -->
  <!-- document.getElementById('modal').focus() -->
</div>
```

### 3. `tabindex="1"`, `tabindex="2"`, dst. — ❌ HINDARI!

Menentukan urutan Tab secara manual dengan angka positif.

```html
<!-- ❌ HINDARI: merusak alur Tab alami -->
<input tabindex="3" type="text" />
<button tabindex="1">Kirim</button>
<a tabindex="2" href="/">Batal</a>
```

**Mengapa ini berbahaya?**
- Jika ada satu elemen dengan `tabindex="1"`, browser akan melompat ke elemen itu DULUAN sebelum elemen lain di halaman.
- Sangat sulit di-maintain ketika ada elemen baru yang ditambahkan.
- Merusak pengalaman navigasi bagi pengguna keyboard.

**Aturan emas:** Biarkan urutan Tab mengikuti urutan alur dokumen HTML-mu (`tabindex="0"` atau tanpa `tabindex`).

---

## 📋 Elemen Mana yang Secara Alami Bisa Difokus?

Elemen-elemen ini **secara alami sudah bisa difokus** via Tab tanpa perlu `tabindex`:

- `<a href="...">` (yang memiliki atribut `href`)
- `<button>`
- `<input>` (semua tipe)
- `<select>`
- `<textarea>`
- `<details>` / `<summary>`

Elemen-elemen ini **TIDAK bisa difokus secara alami** (kecuali diberi `tabindex="0"`):

- `<div>`, `<span>`, `<p>`, `<h1>`–`<h6>`
- `<section>`, `<article>`, `<header>`, `<footer>`
- `<ul>`, `<ol>`, `<li>`, `<table>`
- `<img>`

---

## 🧪 Cara Menguji Website Hanya dengan Keyboard

Cobalah pengujian 2 menit ini pada website portfolio-mu:

1. **Lepaskan mouse** (letakkan jauh dari jangkauan tanganmu).
2. Buka websitemu di browser.
3. Tekan **`Tab`** berulang-ulang dari bagian paling atas.
4. Perhatikan:
   - Apakah kamu bisa **melihat garis fokus** bergerak dari satu elemen ke elemen berikutnya?
   - Apakah alur fokus **bergerak secara logis** dari atas ke bawah, dari kiri ke kanan?
   - Bisakah kamu mencapai **semua menu navigasi**?
   - Bisakah kamu mencapai dan mengklik **semua link dan tombol** (dengan tekan `Enter` atau `Space`)?
   - Bisakah kamu mengisi dan mengirimkan **form kontak**?
5. Tekan **`Shift` + `Tab`** untuk bergerak mundur — apakah berfungsi?

Jika ada elemen yang tidak bisa dijangkau, tidak bisa ditekan, atau garis fokusnya hilang — itulah area yang perlu kamu perbaiki.

---

**[Lanjut: Skip Navigation →](/bab10/skip-navigation/)**
