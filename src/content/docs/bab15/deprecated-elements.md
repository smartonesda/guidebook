---
title: "Elemen Usang (Deprecated)"
description: Daftar elemen dan atribut HTML tua yang sudah usang (deprecated) dan tidak boleh digunakan lagi di HTML5 modern beserta penggantinya.
---

Seiring berkembangnya standar HTML5 modern, elemen-elemen tua yang mengatur tampilan visual telah **dihapus/dihentikan pengembangannya (deprecated)**. Seluruh penataan tampilan visual kini sepenuhnya diserahkan kepada **CSS**.

---

## 🚫 1. Elemen Usang yang Dilarang Digunakan

| Elemen Usang | Alasan Deprecated | Pengganti Modern (HTML5 & CSS) |
|---|---|---|
| `<center>` | Mengatur perataan tengah secara visual | Gunakan CSS (`text-align: center;` atau Flexbox/Grid) |
| `<font>` | Mengatur warna, ukuran, dan jenis font | Gunakan CSS (`color`, `font-size`, `font-family`) |
| `<big>` | Memperbesar ukuran teks | Gunakan CSS (`font-size: 1.2em;`) |
| `<strike>` / `<tt>` | Teks coret / teks mesin tik | Gunakan `<s>` / `<del>` (semantik) atau `<code>` |
| `<marquee>` | Teks berjalan secara otomatis | Gunakan Animasi CSS / JavaScript |
| `<frame>` / `<frameset>` | Membagi layar menjadi bingkai file | Gunakan Flexbox/Grid atau `<iframe>` jika terpaksa |
| `<nobr>` | Mencegah pemotongan baris | Gunakan CSS (`white-space: nowrap;`) |
| `<bgsound>` | Memutar musik latar otomatis | Gunakan elemen `<audio>` HTML5 |

---

## 🚫 2. Atribut HTML Tua yang Usang

| Atribut Usang | Elemen | Pengganti CSS Modern |
|---|---|---|
| `align="center/left"` | `<p>`, `<h1>`, `<table>`, `<img>` | CSS `text-align` / `margin: auto` |
| `bgcolor="#ffffff"` | `<body>`, `<table>`, `<tr>` | CSS `background-color` |
| `border="1"` | `<table>`, `<img>` | CSS `border` |
| `cellspacing` / `cellpadding` | `<table>` | CSS `border-spacing` / `padding` |
| `clear="all"` | `<br>` | CSS `clear: both;` |
| `vspace` / `hspace` | `<img>` | CSS `margin` |

---

**[Lanjut: VS Code Snippets & Tools →](/bab15/vscode-snippets/)**
