---
title: "1.3 Selector Dasar & Pengelompokan"
description: "Mempelajari 4 selector fundamental — Element/Tag, Class, ID, Universal Selector, dan Selector Grouping."
---

Di BAB 1 ini, kita fokus pada **4 selector paling dasar** yang menjadi pondasi utama sebelum mendalami combinator dan pseudo-classes di BAB 2.

---

## 1. Type / Element Selector

Menargetkan elemen berdasarkan **nama tag HTML-nya**.

```css
/* Mengatur font seluruh judul h1 */
h1 {
 font-size: 2rem;
 line-height: 1.2;
}

/* Mengatur warna dasar seluruh paragraf */
p {
 color: #9898a6;
}
```

Gunakan Type Selector untuk menetapkan **gaya dasar dokumen** (reset tipografi awal).

---

## 2. Class Selector (`.`) — Standar Utama Industri

Ditandai dengan tanda titik (`.`) di awal nama. Mencocokkan elemen yang memiliki atribut `class` yang sesuai di HTML.

```html
<button class="btn-action">Klik Saya</button>
<a href="/login" class="btn-action">Masuk</a>
```

```css
.btn-action {
 padding: 0.5rem 1rem;
 border-radius: 0.375rem;
 font-weight: 600;
}
```

### Keunggulan Class Selector:
- **Dapat dipakai ulang (*reusable*):** Satu class bisa dipasang pada ribuan elemen di halaman yang sama.
- **Fleksibel:** Dapat dipasang pada tag `<a>`, `<button>`, `<div>`, atau `<span>`.

---

## 3. ID Selector (`#`)

Ditandai dengan tanda pagar (`#`). Mencocokkan elemen yang memiliki atribut `id` unik.

```html
<header id="main-header">
 <h1>Website Saya</h1>
</header>
```

```css
#main-header {
 position: sticky;
 top: 0;
}
```

> [PERHATIAN] **Best Practice:** 
> Dalam satu halaman HTML, nilai `id` hanya boleh muncul **satu kali**. ID memiliki bobot spesifisitas yang sangat kuat dan sulit ditimpa. Untuk keperluan styling visual, **selalu utamakan Class Selector** daripada ID Selector.

---

## 4. Universal Selector (`*`)

Ditandai dengan tanda bintang (`*`). Mencocokkan **setiap elemen tunggal** di dalam scope dokumen.

```css
/* Global box-sizing reset */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
```

---

## 5. Selector Grouping / List (Koma `,`)

Jika beberapa elemen memiliki aturan style yang sama persis, gabungkan menggunakan tanda koma (`,`):

```css
/* Mengatur jenis font yang sama untuk semua heading */
h1, h2, h3, h4 {
 font-family: "Inter", sans-serif;
 letter-spacing: -0.02em;
}
```
