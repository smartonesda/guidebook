---
title: "2.13 Ringkasan, Cheatsheet, & Kuis Evaluasi"
description: "Rangkuman lengkap seluruh materi selector CSS BAB 2, cheatsheet sintaks siap pakai, kuis pemahaman konsep, dan refleksi menuju BAB 3 (The Cascade)."
---

Selamat! Kamu telah menyelesaikan **BAB 2 — CSS Selectors**. Sekarang kamu memiliki pemahaman mendalam tentang bagaimana CSS menargetkan elemen di dalam DOM tree dengan presisi tinggi.

---

## Master Cheatsheet CSS Selectors

| Kategori | Selector | Sintaks | Contoh | Makna Seleksi |
|:---|:---|:---|:---|:---|
| **Dasar** | Universal | `*` | `*` | Semua elemen tanpa kecuali |
| | Type | `tag` | `p` | Semua elemen dengan tag `<p>` |
| | Class | `.class` | `.card` | Elemen dengan `class="card"` |
| | ID | `#id` | `#app` | Elemen unik dengan `id="app"` |
| | Compound | `tag.class` | `button.danger` | Tag `<button>` yang ber-class `.danger` |
| | List / Group | `A, B` | `h1, h2` | Elemen `h1` dan elemen `h2` |
| **Combinator** | Descendant | `A B` | `nav a` | `<a>` di dalam `<nav>` di level mana pun |
| | Child | `A > B` | `ul > li` | `<li>` yang anak langsung dari `<ul>` |
| | Adjacent Sibling | `A + B` | `h2 + p` | `<p>` tepat setelah `<h2>` |
| | General Sibling | `A ~ B` | `h2 ~ p` | Semua `<p>` setelah `<h2>` di parent sama |
| **Attribute** | Keberadaan | `[attr]` | `[required]` | Elemen yang memiliki atribut `required` |
| | Nilai Persis | `[attr="val"]` | `[type="email"]` | Elemen dengan `type="email"` |
| | Diawali (Prefix) | `[attr^="val"]`| `[href^="https"]` | `href` yang diawali dengan `"https"` |
| | Diakhiri (Suffix) | `[attr$="val"]`| `[href$=".pdf"]` | `href` yang diakhiri dengan `".pdf"` |
| | Mengandung Substring | `[attr*="val"]`| `[class*="col-"]` | Class yang mengandung kata `"col-"` |
| **State** | Hover | `:hover` | `a:hover` | Kursor mouse di atas elemen |
| | Focus Keyboard | `:focus-visible` | `button:focus-visible` | Menerima fokus navigasi keyboard |
| | Checked | `:checked` | `input:checked` | Radio atau checkbox yang aktif |
| | Focus Within | `:focus-within` | `.form:focus-within` | Parent saat anak di dalamnya aktif |
| **Struktur** | First Child | `:first-child` | `li:first-child` | Anak pertama dari parent-nya |
| | Nth Child | `:nth-child(n)`| `tr:nth-child(even)` | Anak ke-n berdasarkan posisi |
| | Nth of Type | `:nth-of-type(n)`| `p:nth-of-type(1)` | Anak ke-n dari tipe tag yang sama |
| | Empty | `:empty` | `.box:empty` | Elemen yang tidak memiliki isi |
| **Pseudo-Element** | Before | `::before` | `.card::before` | Sisipkan konten virtual di awal |
| | After | `::after` | `.card::after` | Sisipkan konten virtual di akhir |
| | Selection | `::selection` | `::selection` | Warna saat teks diblok kursor |
| **Modern** | Is | `:is(A, B)` | `:is(h1, h2) a` | Gabungan alternatif (spesifisitas terkuat) |
| | Where | `:where(A, B)` | `:where(button)` | Gabungan alternatif (**spesifisitas 0**) |
| | Not | `:not(A)` | `p:not(:last-child)` | Pengecualian elemen |
| | Has | `A:has(B)` | `.card:has(img)` | **Parent selector**: `.card` yang punya `<img>` |

---

## 10 Prinsip Kunci Selector Mastery

1. **Browser membaca selector dari Kanan ke Kiri (*Right-to-Left*).** Bagian paling kanan adalah *Key Selector*.
2. **Prioritaskan Class Selector** untuk styling komponen antarmuka yang dapat dipakai ulang (*reusable*).
3. **Hindari ID Selector untuk styling umum** karena spesifisitasnya terlalu tinggi dan sulit ditimpa.
4. **Hindari Over-Qualifying (`div.card`)** agar stylesheet tetap fleksibel jika tag HTML berubah.
5. **Bedakan Spasi (Descendant) dan Tanpa Spasi (Compound):** `.card.active` $\neq$ `.card .active`.
6. **`:nth-child` menghitung semua anak**, sedangkan **`:nth-of-type` hanya menghitung tag yang sejenis**.
7. **`::before` dan `::after` WAJIB memiliki properti `content`** agar dirender oleh browser.
8. **Taati urutan LVHA untuk styling link:** `:link` &rarr; `:visited` &rarr; `:hover` &rarr; `:active`.
9. **Gunakan `:where()` untuk CSS Reset** agar mudah di-override dengan spesifisitas nol.
10. **Gunakan `:has()` untuk merespon state anak di level parent** tanpa membutuhkan JavaScript.

---

## Kuis Evaluasi BAB 2 (10 Soal)

<details>
<summary>1. Apa perbedaan antara <code>.btn.primary</code> dan <code>.btn .primary</code>?</summary>

- `.btn.primary` (Compound): Menargetkan **SATU elemen** yang memiliki class `btn` DAN class `primary` secara bersamaan.
- `.btn .primary` (Descendant): Menargetkan elemen dengan class `primary` yang berada **di dalam** elemen ber-class `btn`.
</details>

<details>
<summary>2. Manakah selector yang memilih link yang mengarah ke file berekstensi ZIP?</summary>

**Jawaban:** `a[href$=".zip"]` (menggunakan suffix match `$=`).
</details>

<details>
<summary>3. Mengapa <code>p:first-child</code> gagal jika di dalam <code>&lt;div&gt;</code> diawali oleh <code>&lt;h1&gt;</code>?</summary>

Karena `:first-child` memeriksa apakah elemen tersebut adalah **anak pertama mutlak** dari parent-nya. Jika anak pertama adalah `<h1>`, maka `<p>` adalah anak kedua sehingga gagal. Solusinya adalah menggunakan `p:first-of-type`.
</details>

<details>
<summary>4. Apa yang membedakan <code>:is()</code> dan <code>:where()</code>?</summary>

Keduanya memiliki fungsi logika yang sama, tetapi `:where()` selalu memiliki **spesifisitas NOL (0)**, sedangkan `:is()` mengambil spesifisitas dari selector terkuat di dalam argumennya.
</details>

<details>
<summary>5. Bagaimana cara membuat teks kustom bullet list berwarna merah pada tag <code>&lt;li&gt;</code>?</summary>

Gunakan pseudo-element `li::marker { color: red; }`.
</details>

---

## Jembatan Menuju BAB 3: The Cascade & Specificity

Sekarang kamu sudah menguasai cara memilih elemen. Namun, apa yang terjadi ketika ada **dua selector berbeda** yang memilih elemen yang sama dan memberikan instruksi yang bertentangan?

Contoh:
```css
p { color: blue; }
.text-danger { color: red; }
#main-content p { color: green; }
```

Siapa yang akan menang? Warna apa yang akhirnya muncul di layar browser?

Jawabannya ada di **BAB 3 — The Cascade, Specificity, & Inheritance**. Mari kita lanjutkan petualangan belajarmu!