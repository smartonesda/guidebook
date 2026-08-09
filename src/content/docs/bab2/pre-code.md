---
title: "Pre & Code"
description: Memahami cara menampilkan kode komputer dan teks preformatted menggunakan tag pre, code, kbd, samp, dan var.
---

Jika kamu mencoba menuliskan baris kode program di dalam tag paragraf `<p>` biasa, browsermu akan mengabaikan spasi kosong, tab, dan baris barunya, serta menampilkan semuanya menyatu secara berantakan. 

Untuk menampilkan teks teknis komputer, HTML menyediakan kumpulan tag khusus.

---

## 💻 Menampilkan Kode: Tag `<code>`

Tag `<code>` digunakan untuk menandai kata atau sebaris teks yang merupakan bagian dari kode komputer. Browser akan menampilkannya menggunakan font **monospace** (lebar tiap huruf sama, seperti *Courier* atau *Consolas*).

```html
<p>Gunakan perintah <code>document.querySelector</code> untuk mengambil elemen DOM.</p>
```

Tag `<code>` bersifat **inline element**. Artinya ia tidak membuat baris baru.

---

## 📄 Mempertahankan Format Teks: Tag `<pre>`

Tag `<pre>` (singkatan dari *preformatted text*) memberi tahu browser untuk menampilkan teks **persis seperti yang tertulis di editor kodemu** — browser akan mempertahankan semua spasi, tab indentasi, dan baris baru secara utuh.

```html
<pre>
  Nama    : Budi Santoso
  Kelas   : X RPL
  Jurusan : Rekayasa Perangkat Lunak
</pre>
```

---

## 🤝 Penggabungan `<pre><code>` (Blok Kode)

Untuk menampilkan **blok kode pemrograman yang panjang** (beberapa baris), standar industri mewajibkan kita menggabungkan keduanya: tag `<pre>` membungkus tag `<code>`.

```html
<pre><code>function hitungLuas(panjang, lebar) {
  return panjang * lebar;
}</code></pre>
```

Dengan cara ini, browser tahu bahwa seluruh blok tersebut adalah kode komputer (`<code>`) dan format spasinya harus dipertahankan secara rapi (`<pre>`).

---

## ⌨️ Tag Pendukung Teks Komputer Lainnya

HTML juga menyediakan beberapa tag pendukung berikut untuk panduan teknis:

- **`<kbd>` (Keyboard Input)**: Menandai tombol keyboard yang harus ditekan oleh pengguna.
  - *Contoh*: `Tekan <kbd>Ctrl</kbd> + <kbd>S</kbd> untuk menyimpan file.`
- **`<samp>` (Sample Output)**: Menandai teks hasil keluaran (*output*) dari suatu program komputer.
  - *Contoh*: `Komputer menampilkan pesan error: <samp>File Not Found</samp>.`
- **`<var>` (Variable)**: Menandai variabel di dalam rumus matematika atau pemrograman.
  - *Contoh*: `Luas lingkaran dihitung dengan rumus &pi; &times; <var>r</var><sup>2</sup>.`

Mari kita lanjutkan pembahasan ke penulisan rumus matematika dan kimia menggunakan tag Subscript dan Superscript.

**[Lanjut: Subscript & Superscript →](/bab2/subscript-superscript/)**
