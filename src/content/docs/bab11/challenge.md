---
title: "Challenge"
description: Tantangan berjenjang untuk menguji keterampilan HTML Code Review, debugging anti-patterns, dan refactoring kode berstandar profesional.
---

---

## 🔴 Challenge 1: Code Review Sederhana (25 Poin)

Kamu bertindak sebagai **Lead Developer**. Rekan timmu menyerahkan potongan kode HTML berikut untuk direview. Sebutkan **5 kesalahan/kekurangan** dari kode ini dan tuliskan perbaikannya!

```html
<div class="card">
  <img src="avatar.png" />
  <h3>Budi Santoso</h3>
  <a href="#" onclick="followUser()">Follow</a>
  <input type="text" placeholder="Tulis komentar..." />
  <button>Kirim</button>
</div>
```

---

## 🟡 Challenge 2: Temukan 5 Anti-Pattern (25 Poin)

Identifikasi 5 anti-pattern pada kode HTML di bawah ini dan jelaskan mengapa hal tersebut buruk bagi maintainability atau performa:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Website Saya</title>
    <script src="heavy-script.js"></script>
  </head>
  <body>
    <h1 style="color: blue; font-size: 24px;">Selamat Datang</h1>
    <a href="https://example.com" target="_blank">Kunjungi Link</a>
    <img src="hero.jpg" loading="lazy" />
    <input id="user" type="text" />
    <input id="user" type="password" />
  </body>
</html>
```

---

## 🟠 Challenge 3: Refactor Form & Table (25 Poin)

Ubah kode form dan tabel berikut agar memenuhi standar **Clean HTML, Semantic, dan Accessible**:

```html
<div id="data">
  <p>Daftar Siswa</p>
  <table>
    <tr><td>Nama</td><td>Kelas</td></tr>
    <tr><td>Andi</td><td>RPL 1</td></tr>
  </table>
  
  <p>Tambah Siswa</p>
  <form action="save.php">
    <input type="text" placeholder="Nama Siswa">
    <button>Simpan</button>
  </form>
</div>
```

---

## ⚫ Challenge 4: Analisis Performa & Best Practice (25 Poin)

Jawab pertanyaan analitis berikut:

1. Mengapa menambahkan `width` dan `height` pada elemen `<img>` dapat mencegah *Cumulative Layout Shift (CLS)*?
2. Mengapa atribut `defer` pada elemen `<script>` lebih direkomendasikan daripada meletakkan `<script>` biasa di dalam `<head>`?
3. Mengapa konvensi penamaan `kebab-case` lebih disukai di URL dan nama file web daripada `CamelCase` atau spasi?

---

**[Lanjut: Error Corner →](/bab11/error-corner/)**
