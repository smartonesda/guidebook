---
title: "Decision Guide"
description: Panduan cepat pengambilan keputusan memilih elemen HTML — kapan menggunakan button vs a, div vs article vs section, dan ul vs ol vs dl.
---

Gunakan pohon panduan cepat ini setiap kali kamu ragu memilih elemen HTML yang paling tepat untuk kebutuhan websitemu:

---

## 🔀 1. Action vs Navigation: `<button>` vs `<a>`

```
                      Apakah aksi ini berpindah URL / Halaman?
                                        │
                      ┌─────────────────┴─────────────────┐
                      ▼                                   ▼
                    [ YA ]                              [ TIDAK ]
                      │                                   │
         Gunakan elemen <a>                       Gunakan elemen <button>
       <a href="/target-url">                 <button type="submit/button">
                      │                                   │
      - Berpindah halaman                     - Mengirimkan form (submit)
      - Melompat ke anchor #id                - Buka/tutup modal dialog
      - Mengunduh file                        - Filter/sortir data via JS
```

---

## 🔀 2. Container Decision: `<article>` vs `<section>` vs `<div>`

```
           Apakah konten ini mandiri & bisa berdiri sendiri (bisa disindikasi)?
                                        │
                      ┌─────────────────┴─────────────────┐
                      ▼                                   ▼
                   [ YA ]                               [ TIDAK ]
                      │                                   │
            Gunakan <article>               Apakah konten ini punya topik & heading?
                                                          │
                                        ┌─────────────────┴─────────────────┐
                                        ▼                                   ▼
                                     [ YA ]                               [ TIDAK ]
                                        │                                   │
                              Gunakan <section>                       Gunakan <div>
```

---

## 🔀 3. Lists Decision: `<ul>` vs `<ol>` vs `<dl>`

| Jenis Informasi | Elemen Tepat | Alasan |
|---|---|---|
| Urutan langkah-langkah / Peringkat / Panduan | `<ol>` | Urutan nomor adalah hal penting (posisi 1, 2, 3). |
| Daftar item acak (Keahlian, Fasilitas, Fitur) | `<ul>` | Urutan tidak mengubah makna informasi. |
| Pasangan Nama-Nilai (Domisili, Kamus, Spesifikasi) | `<dl>` | Memasangkan Term (`<dt>`) dan Description (`<dd>`). |

---

## 🔀 4. Inline Text Decision: `<strong>` vs `<em>` vs `<b>` vs `<i>`

- **`<strong>`**: Teks **sangat penting / peringatan** (dibaca dengan penekanan tegas oleh screen reader).
- **`<em>`**: Teks dengan **penekanan ucapan** (intonasi suara berubah).
- **`<b>`**: Teks tebal untuk **perhatian visual murni** tanpa menambah tingkat kepentingan semantik.
- **`<i>`**: Teks miring untuk **istilah asing / nama ilmiah** tanpa penekanan intonasi.

---

**[Lanjut: A11y & ARIA Reference →](/bab15/accessibility-reference/)**
