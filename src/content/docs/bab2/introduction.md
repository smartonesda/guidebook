---
title: "2.0 Introduction — Seni & Sains Menargetkan Elemen"
description: "Memahami esensi CSS Selectors — bagaimana browser mencocokkan aturan style dengan elemen di dalam Document Object Model (DOM)."
---

Bayangkan kamu adalah seorang arsitek yang sedang merancang sebuah gedung bertingkat dengan ratusan ruangan. Kamu memiliki instruksi warna: *"Cat dinding menjadi warna biru."*

Instruksi tersebut tidak ada artinya tanpa mengetahui **ruangan mana** yang harus dicat. Apakah semua ruangan? Ruangan kantor di lantai 2? Atau hanya pintu masuk utama?

Dalam dunia web development:

```css
/* Instruksi tanpa target = mustahil dieksekusi */
color: #e8392b;

/* Instruksi dengan target = presisi */
h1.hero-title {
 color: #e8392b;
}
```

**CSS Selector** adalah jembatan yang menghubungkan instruksi desainmu dengan elemen HTML spesifik di layar. Di BAB 1, kamu sudah mempelajari anatomi dasar ruleset. Di BAB 2 ini, kita akan membedah **sistem penargetan (targeting system)** CSS dari tingkat paling dasar hingga selector modern paling mutakhir.

---

## Mental Model: Bagaimana Browser Membaca Selector?

Banyak pemula mengira browser mencari selector dari kiri ke kanan. Kenyataannya, browser membaca selector dari **kanan ke kiri (Right-to-Left)**!

Bagian paling kanan dari sebuah selector disebut **Key Selector** (elemen yang ingin langsung diubah), sedangkan bagian di sebelah kirinya adalah kriteria penyaring (*filtering conditions*).

```text
.sidebar .nav-list > li.active a
 ▲
 └── 1. Browser mencari semua <a> terlebih dahulu
 ▲
 └── 2. Lalu memeriksa apakah parent-nya <li> dengan class 'active'
 ▲
 └── 3. Lalu memeriksa apakah berada di dalam .nav-list
 ▲
 └── 4. Lalu memastikan semuanya berada di dalam .sidebar
```

Dengan memahami mental model ini, kamu akan mulai menulis selector yang tidak hanya **bekerja**, tetapi juga **cepat diproses oleh browser** dan **mudah dirawat (*maintainable*)**.

---

## Taksonomi Lengkap Selector CSS

CSS menyediakan berbagai macam cara untuk memilih elemen berdasarkan kebutuhan:

```text
SISTEM SELECTOR CSS
 │
 ├── 1. Berdasarkan Identitas & Tipe (Universal, Type, Class, ID)
 │ Contoh: *, h1, .btn, #header
 │
 ├── 2. Berdasarkan Hubungan Silsilah (Combinators)
 │ Contoh: nav a (turunan), ul > li (anak), h2 + p (saudara dekat)
 │
 ├── 3. Berdasarkan Data & Atribut (Attribute Selectors)
 │ Contoh: [type="email"], a[href^="https"], [data-status="active"]
 │
 ├── 4. Berdasarkan Keadaan & Interaksi (State Pseudo-Classes)
 │ Contoh: :hover, :focus-visible, :checked, :disabled
 │
 ├── 5. Berdasarkan Posisi Struktur DOM (Structural Pseudo-Classes)
 │ Contoh: :first-child, :nth-child(2n+1), :last-of-type, :empty
 │
 ├── 6. Elemen Virtual & Bagian Khusus (Pseudo-Elements)
 │ Contoh: ::before, ::after, ::placeholder, ::selection
 │
 └── 7. Seleksi Fungsional Modern (Modern Functional Selectors)
 Contoh: :is(), :where(), :not(), :has() (The Parent Selector)
```

---

## Target Capaian Belajar BAB 2 (Learning Outcomes)

Setelah menyelesaikan seluruh modul di BAB 2 ini, kamu akan mampu:

1. **Membedakan 4 selector dasar** (Universal, Type, Class, ID) dan memahami kapan waktu yang tepat menggunakannya.
2. **Menguasai 4 combinator** (`spasi`, `>`, `+`, `~`) untuk menargetkan elemen berdasarkan struktur hierarki HTML.
3. **Memanfaatkan Attribute Selector** untuk memberi gaya form dinamis dan komponen berbasis data (`data-*`).
4. **Mendesain micro-interaction yang accessible** menggunakan state pseudo-classes (`:hover`, `:focus-visible`, `:active`, `:focus-within`).
5. **Mengatur layout belang-belang dan grid kompleks** dengan formula matematika structural pseudo-classes (`:nth-child()`).
6. **Menciptakan elemen kosmetik tanpa mengotori HTML** menggunakan `::before` dan `::after`.
7. **Menyederhanakan stylesheet** menggunakan selector fungsional modern (`:is()`, `:where()`, `:not()`).
8. **Membangun interaksi parent-child tanpa JavaScript** menggunakan selector revolusioner `:has()`.
9. **Menghindari selector rapuh (*fragile selectors*)** dan menerapkan strategi penamaan arsitektur CSS profesional.
10. **Mendiagnosis dan men-debug selector yang bermasalah** menggunakan Browser DevTools.

---

## Peta Jalur Pembelajaran BAB 2

| No | Modul | Fokus Materi |
|:---|:---|:---|
| **2.1** | **Basic Selectors** | Universal `*`, Type/Tag, Class `.`, ID `#`, Compound & Chaining |
| **2.2** | **Combinators** | Hubungan silsilah: Descendant ` `, Child `>`, Adjacent `+`, General Sibling `~` |
| **2.3** | **Attribute Selectors** | Filter atribut `[attr]`, nilai persis `[attr=val]`, substring `^=`, `$=`, `*=` |
| **2.4** | **Pseudo-Classes: State & Form** | Interaksi `:hover`, `:focus-visible`, `:active`, `:checked`, `:focus-within`, `:placeholder-shown` |
| **2.5** | **Pseudo-Classes: Struktural** | Posisi DOM: `:first-child`, `:last-child`, `:nth-child(An+B)`, `:nth-of-type()`, `:empty` |
| **2.6** | **Pseudo-Elements** | Elemen virtual: `::before`, `::after`, `::placeholder`, `::selection`, `::marker` |
| **2.7** | **Modern Functional Selectors** | Selector modern: `:is()`, `:where()`, `:not()`, dan CSS Parent Selector `:has()` |
| **2.8** | **Selector Strategy** | Arsitektur penamaan, maintainability, menghindari over-qualifying |
| **2.9** | **Studi Kasus** | Refactoring selector checkout & product grid toko online |
| **2.10** | **Mini Project** | Membangun Interactive Pricing Table & Checkout Card |
| **2.11** | **Challenge Lab** | 5 Lab Teka-Teki Selector (Selector Golf & Target Hunting) |
| **2.12** | **Error Corner** | 7 Kesalahan Fatal Seputar Selector & Cara Memperbaikinya |
| **2.13** | **Ringkasan & Evaluasi** | Cheatsheet Lengkap, 10 Prinsip Kunci, & Kuis Evaluasi |

---

> **Siap Memulai?** 
> Mari kita mulai dari fondasi paling awal: membedah **Universal, Type, Class, dan ID Selector** di Modul 2.1!