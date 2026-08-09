---
title: "Ringkasan"
description: Rekap semua konsep penting yang dipelajari di BAB 1 — HTML Fundamentals.
---

Selamat! Kamu telah menyelesaikan pelajaran dasar yang sangat penting di **BAB 1 — HTML Fundamentals**.

---

## 📝 Rekap Konsep Utama

Mari kita ingat kembali poin-poin model mental HTML yang telah kamu pelajari di bab ini:

- **HTML** adalah bahasa markup untuk menyusun kerangka halaman web. Ia mendefinisikan *apa* kontennya, bukan bagaimana tampilannya.
- **Tag** adalah markup di antara kurung siku (`<p>`). **Elemen** adalah tag pembuka + konten + tag penutup. **Atribut** adalah informasi tambahan di dalam tag pembuka (`class="intro"`).
- **Nesting** adalah menempatkan tag di dalam tag lain. Aturan wajibnya adalah LIFO (*Last In, First Out*) — tag yang dibuka terakhir harus ditutup pertama kali.
- **Struktur Dokumen**:
  - `<!DOCTYPE html>`: Wajib di baris pertama agar browser menggunakan *Standards Mode*.
  - `<html>`: Pembungkus utama dokumen.
  - `<head>`: Tempat menyimpan metadata (charset, viewport, title) yang tidak terlihat di halaman web.
  - `<body>`: Wadah untuk semua konten yang terlihat di layar browser.
- **Heading & Paragraph**: Heading (`<h1>` sampai `<h6>`) digunakan sebagai judul terstruktur, sedangkan `<p>` sebagai paragraf teks biasa.
- **Komentar & Whitespace**: Komentar (`<!-- -->`) digunakan untuk catatan internal developer. Whitespace/jarak spasi berlebih akan diabaikan oleh browser.
- **HTML Validator**: Menggunakan alat validator resmi W3C (`validator.w3.org`) untuk memastikan tidak ada kesalahan aturan penulisan tag.

---

## 📊 Tabel Kamus Istilah BAB 1

| Istilah | Bentuk Kode | Peran / Arti |
|---|---|---|
| **Opening Tag** | `<h1>` | Penanda dimulainya suatu elemen. |
| **Closing Tag** | `</h1>` | Penanda berakhirnya suatu elemen (memakai garis miring `/`). |
| **Element** | `<h1>Judul</h1>` | Gabungan tag pembuka, isi konten, dan tag penutup. |
| **Attribute Name** | `lang` / `charset` | Nama properti tambahan di dalam tag pembuka. |
| **Attribute Value** | `"id"` / `"UTF-8"` | Isi nilai properti yang dibungkus tanda kutip ganda. |
| **Standards Mode** | Dipicu `<!DOCTYPE html>` | Mode browser merender halaman sesuai standar web modern. |
| **LIFO Rule** | `<a><strong>...</strong></a>` | Aturan penutupan tag bersarang secara runtut dari dalam ke luar. |

---

## ➡ Handoff ke BAB 2 — Teks & Tipografi

Saat ini, kamu telah berhasil membangun **kerangka dasar dokumen HTML5 yang valid** untuk portfolio pribadimu di Mini Project. 

Namun, konten portfoliomu masih berupa teks polos tanpa gaya tebal, miring, atau penataan teks yang lebih menarik. 

Di **BAB 2 — Teks & Tipografi**, kita akan melengkapi file portfoliomu dengan berbagai elemen pemformatan teks seperti tag `<strong>` (tebal), `<em>` (miring), `<blockquote>` (kutipan), pembatas halaman `<hr>`, line-break `<br>`, dan tag kode `<pre><code>`.

Mari melangkah ke bab berikutnya!

**[Lanjut ke BAB 2 — Teks & Tipografi →](/bab2/introduction/)**
