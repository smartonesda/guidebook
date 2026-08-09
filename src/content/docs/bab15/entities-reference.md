---
title: "HTML Entities & Karakter"
description: Referensi lengkap HTML Entities — cara menuliskan simbol khusus, karakter matematika, dan karakter khusus seperti &lt;, &gt;, &amp;, dan &copy; tanpa merusak parser HTML.
---

Karakter tertentu seperti `<`, `>`, dan `&` adalah karakter cadangan (*reserved characters*) di dalam sintaksis HTML. Jika ditulis mentah di dalam teks paragraf, peramban web dapat salah mengartikannya sebagai tag HTML.

Untuk menuliskannya secara aman, kita menggunakan **HTML Entities**.

---

## 🔣 1. Karakter Cadangan Wajib (Reserved Entities)

| Simbol | Teks Biasa | Entity Name | Entity Number | Contoh Penggunaan |
|---|---|---|---|---|
| `<` | Kurang dari | `&lt;` | `&#60;` | `Gunakan &lt;p&gt; untuk paragraf` |
| `>` | Lebih dari | `&gt;` | `&#62;` | `Tag penutup &lt;/div&gt;` |
| `&` | Dan / Ampersand | `&amp;` | `&#38;` | `RPL &amp; TKJ` |
| `"` | Tanda Kutip Ganda | `&quot;` | `&#34;` | `title=&quot;Nilai&quot;` |
| `'` | Tanda Kutip Tunggal | `&apos;` | `&#39;` | `alt=&apos;Foto&apos;` |

---

## 🔠 2. Simbol Umum & Hak Cipta

| Simbol | Nama Simbol | Entity Name | Entity Number |
|---|---|---|---|
| `©` | Hak Cipta (Copyright) | `&copy;` | `&#169;` |
| `®` | Merek Terdaftar (Registered) | `&reg;` | `&#174;` |
| `™` | Merek Dagang (Trademark) | `&trade;` | `&#8482;` |
| `&nbsp;` | Non-Breaking Space (Spasi Tunggal) | `&nbsp;` | `&#160;` |
| `—` | Em Dash (Tanda Hubung Panjang) | `&mdash;` | `&#8212;` |
| `–` | En Dash (Tanda Hubung Sedang) | `&ndash;` | `&#8211;` |
| `•` | Poin Hitam (Bullet) | `&bull;` | `&#8226;` |
| `…` | Tiga Titik (Ellipsis) | `&hellip;` | `&#8230;` |

---

## 💰 3. Mata Uang & Matematika

| Simbol | Nama Simbol | Entity Name | Entity Number |
|---|---|---|---|
| `&dollar;` / `$` | Dolar | `&dollar;` | `&#36;` |
| `€` | Euro | `&euro;` | `&#8364;` |
| `£` | Pound | `&pound;` | `&#163;` |
| `¥` | Yen | `&yen;` | `&#165;` |
| `±` | Plus-Minus | `&plusmn;` | `&#177;` |
| `×` | Perkalian | `&times;` | `&#215;` |
| `÷` | Pembagian | `&divide;` | `&#247;` |
| `≠` | Tidak Sama Dengan | `&ne;` | `&#8800;` |
| `≤` | Kurang dari atau sama dengan | `&le;` | `&#8804;` |
| `≥` | Lebih dari atau sama dengan | `&ge;` | `&#8805;` |
| `∞` | Tak Hingga (Infinity) | `&infin;` | `&#8734;` |

---

**[Lanjut: Decision Guide →](/bab15/decision-guide/)**
