---
title: "1.0 Introduction — Anatomi & Cara Kerja CSS"
description: "Memahami esensi BAB 1 — bagaimana aturan CSS ditulis, dibaca oleh browser, dan bagaimana satu baris CSS bekerja."
---

Apa sebenarnya yang terjadi ketika kamu mengetik satu baris kode berikut?

```css
h1 {
 color: #e8392b;
}
```

Bagi orang awam, baris di atas hanyalah "perintah untuk membuat judul berwarna merah". Namun bagi seorang frontend engineer profesional, baris sederhana ini adalah sebuah **sistem komunikasi deklaratif** yang terdiri dari target penargetan (*selector*), properti visual (*property*), nilai warna (*value*), pernyataan (*declaration*), dan blok aturan (*ruleset*).

Di BAB 1 ini, kita akan membongkar baris sederhana tersebut sampai ke setiap bagian terkecilnya. Kamu tidak akan diajak menghafal ratusan nama properti, melainkan membangun **intuisi mendasar** tentang bagaimana bahasa CSS bekerja dari dalam.

---

## Mengapa BAB 1 Sangat Penting?

Banyak orang gagal menguasai CSS bukan karena CSS itu sulit, melainkan karena mereka melompati pemahaman anatomi dasar dan langsung mencoba layout yang rumit.

Ketika mereka mengalami bug tampilan:
- Mereka tidak tahu mengapa suatu aturan diabaikan oleh browser.
- Mereka bingung mengapa warna tidak berubah padahal kodenya sudah ditulis.
- Mereka asal menambahkan `!important` karena tidak paham bagaimana browser mengurai (*parse*) deklarasi.

Setelah menyelesaikan BAB 1 ini, kamu akan memiliki kacamata baru dalam melihat setiap baris kode CSS.

---

## Target Capaian Belajar (Learning Outcomes)

Setelah menyelesaikan seluruh modul di BAB 1 ini, kamu akan mampu:

1. **Menjelaskan kepanjangan dan filosofi CSS** (Cascading Style Sheets) dengan bahasa sendiri.
2. **Membedah anatomi satu CSS ruleset lengkap** menjadi selector, declaration block, declaration, property, dan value.
3. **Menulis selector dasar** (Element, Class, ID, Universal) dengan tepat dan memahami perbedaannya.
4. **Menggunakan komentar CSS** (`/* ... */`) secara efektif untuk dokumentasi kode.
5. **Memahami aturan whitespace, case sensitivity, dan fungsi vital semicolon (`;`)**.
6. **Membedakan shorthand dan longhand properties** serta menghindari jebakan reset nilai bawaan.
7. **Memahami perilaku toleransi browser (*error recovery*)** saat menemukan invalid declaration atau invalid value.
8. **Memahami alur kerja browser** dari parsing HTML/CSS, pembentukan DOM & CSSOM, hingga penghitungan *Computed Style*.
9. **Menggunakan Browser DevTools (Elements, Styles, Computed)** untuk menginspeksi dan mendebug CSS secara langsung.
10. **Membangun komponen Profile Card mandiri** dengan ruleset bersih dan terstruktur.

---

## Peta Modul Pembelajaran BAB 1

| No | Modul | Fokus Materi |
|:---|:---|:---|
| **1.1** | **Apa itu CSS?** | Filosofi Cascading Style Sheets & spektrum kemampuan visual CSS |
| **1.2** | **Anatomi Ruleset** | Pembedahan lengkap: Selector, Declaration Block, Property, Kolon, Value, Semicolon |
| **1.3** | **Selector Dasar** | Tag, Class `.`, ID `#`, Universal `*`, Compound, dan Selector List `,` |
| **1.4** | **Komentar & Whitespace** | Sintaks `/* */`, format whitespace, case-sensitivity, dan disiplin titik koma |
| **1.5** | **Shorthand vs Longhand** | Menulis cepat vs kontrol presisi (TRBL, border, background, font) |
| **1.6** | **Invalid CSS & Browser Parser** | Filosofi error tolerance browser, CSS yang diabaikan, garis coret DevTools |
| **1.7** | **Browser Pipeline & CSSOM** | Dari parsing CSS &rarr; CSSOM &rarr; Render Tree &rarr; Computed Style (px) |
| **1.8** | **Mengenal Browser DevTools** | Panel Elements, Styles tab, Computed tab, live-edit style di layar |
| **1.9** | **Studi Kasus** | Membedah dan merefaktor stylesheet peninggalan yang penuh error |
| **1.10** | **Mini Project** | Membangun Profile Card dengan ruleset bersih dan mandiri |
| **1.11** | **Challenge Lab** | 5 Lab Teka-Teki CSS Fundamentals |
| **1.12** | **Error Corner** | 7 Kesalahan Fatal Pemula Seputar Sintaks CSS & Solusinya |
| **1.13** | **Ringkasan & Evaluasi** | Cheatsheet Anatomi, 10 Prinsip Kunci, & Kuis Evaluasi 10 Soal |
