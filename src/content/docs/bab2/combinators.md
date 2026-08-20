---
title: "2.2 Combinators — Hubungan Silsilah Antar Elemen"
description: "Membedah 4 combinator CSS untuk menargetkan elemen berdasarkan hubungan hierarki dalam DOM tree — Descendant, Child, Adjacent Sibling, dan General Sibling."
---

Sebuah halaman web dibangun seperti sebuah **pohon keluarga (DOM Tree)**. Ada kakek (*ancestor*), orang tua (*parent*), anak (*child*), cucu/keturunan (*descendant*), dan saudara kandung (*siblings*).

**CSS Combinator** adalah simbol khusus yang menjelaskan **hubungan posisi** antara dua atau lebih selector.

Ada 4 combinator utama dalam CSS:

```text
1. Spasi ( ) → Descendant Combinator (Keturunan: anak, cucu, cicit)
2. Tanda > → Child Combinator (Anak langsung saja)
3. Tanda + → Adjacent Sibling (Saudara persis di sebelahnya)
4. Tanda ~ → General Sibling (Semua saudara berikutnya)
```

Mari kita bedah satu per satu menggunakan struktur HTML berikut sebagai acuan:

```html
<section class="card">
 <h2>Judul Artikel</h2>
 <p>Paragraf pengantar (anak langsung).</p>

 <div class="content">
 <p>Paragraf utama (cucu di dalam .content).</p>
 <p>Paragraf kedua (cucu di dalam .content).</p>
 </div>

 <p>Paragraf penutup (anak langsung).</p>
</section>
```

---

## 1. Descendant Combinator (` ` — Spasi)

Ketika kamu meletakkan **karakter spasi** di antara dua selector, kamu mengatakan kepada browser: 
*"Pilih elemen kedua asalkan berada **di mana saja di dalam** elemen pertama (tidak peduli seberapa dalam level sarangnya)."*

```css
/* Memilih SEMUA tag <p> yang berada di dalam .card */
.card p {
 color: #383840;
 line-height: 1.6;
}
```

Pada contoh HTML di atas, **keempat paragraf** akan terpilih:
- Paragraf pengantar
- Paragraf utama (di dalam `.content`)
- Paragraf kedua (di dalam `.content`)
- Paragraf penutup

---

## 2. Child Combinator (`>`)

**Child Combinator** menggunakan tanda lebih besar (`>`). Combinator ini jauh lebih ketat daripada spasi: 
*"Pilih elemen kedua HANYA jika ia merupakan **anak langsung (*direct child*)** dari elemen pertama."*

```css
/* Memilih tag <p> yang menjadi ANAK LANGSUNG dari .card */
.card > p {
 color: #e8392b;
 font-weight: 600;
}
```

Pada contoh HTML kita:
- [BENAR] Paragraf pengantar (Anak langsung &rarr; **Terpilih**)
- [SALAH] Paragraf utama (Anak dari `.content`, bukan anak langsung `.card` &rarr; **Ditolak**)
- [SALAH] Paragraf kedua (Anak dari `.content` &rarr; **Ditolak**)
- [BENAR] Paragraf penutup (Anak langsung &rarr; **Terpilih**)

### Mengapa Child Combinator Penting?
Bayangkan kamu membuat komponen navigasi dropdown bertingkat:

```css
/* [PERHATIAN] Bahaya: Mengubah icon SEMUA link termasuk link di sub-menu terdalam */
.nav-menu a { font-size: 1.1rem; }

/* [BENAR] Presisi: Hanya mengubah link menu utama di tingkat atas */
.nav-menu > li > a { font-size: 1.1rem; }
```

---

## 3. Adjacent Sibling Combinator (`+`)

**Adjacent Sibling Combinator** menggunakan tanda tambah (`+`). Kata kuncinya adalah **tepat bersebelahan**: 
*"Pilih elemen kedua HANYA jika ia berada **persis tepat setelah** elemen pertama, dan keduanya berada di bawah parent yang sama."*

```css
/* Memilih tag <p> yang muncul TEPAT SETELAH <h2> */
h2 + p {
 font-size: 1.15rem;
 color: #636370;
 margin-top: 0.5rem;
}
```

Hanya **Paragraf pengantar** yang terpilih karena posisinya tepat menempel setelah tag `<h2>`.

### Contoh Kasus Nyata: Form Label & Floating Space
```html
<input type="checkbox" id="agree" />
<label for="agree">Saya menyetujui syarat & ketentuan</label>
```
```css
/* Ketika checkbox dicentang, ubah warna teks label tepat di sebelahnya */
input:checked + label {
 color: #e8392b;
 font-weight: 700;
}
```

---

## 4. General Sibling Combinator (`~`)

**General Sibling Combinator** menggunakan tanda gelombang tilde (`~`): 
*"Pilih semua elemen kedua yang muncul **setelah** elemen pertama (tidak harus tepat bersebelahan), selama keduanya berbagi parent yang sama."*

```css
/* Memilih SEMUA tag <p> yang muncul setelah <h2> di level yang sama */
h2 ~ p {
 border-left: 3px solid #e8392b;
 padding-left: 0.75rem;
}
```

Pada contoh HTML kita:
- [BENAR] Paragraf pengantar (Muncul setelah `<h2>` &rarr; **Terpilih**)
- [SALAH] Paragraf di dalam `.content` (Bukan saudara langsung `<h2>` &rarr; **Ditolak**)
- [BENAR] Paragraf penutup (Muncul setelah `<h2>` di level saudara yang sama &rarr; **Terpilih**)

---

## Tabel Perbandingan Matriks Combinator

| Combinator | Simbol | Hubungan Target | Analogi Keluarga | Contoh |
|:---|:---:|:---|:---|:---|
| **Descendant** | ` ` | Keturunan di level mana saja | Kakek &rarr; Cucu/Cicit | `nav a` |
| **Child** | `>` | Anak tingkat 1 langsung | Ayah &rarr; Anak kandung | `ul > li` |
| **Adjacent Sibling** | `+` | Saudara persis berikutnya | Kakak &rarr; Adik nomor 2 | `h2 + p` |
| **General Sibling** | `~` | Semua saudara berikutnya | Kakak tertua &rarr; Semua adik | `h2 ~ p` |

---

## Visual Mini-Quiz: Uji Pemahaman Hierarki

Perhatikan struktur navigasi berikut:

```html
<ul class="menu">
 <li>
 <a href="#">Beranda</a>
 </li>
 <li>
 <a href="#">Produk</a>
 <ul class="submenu">
 <li><a href="#">Laptop</a></li>
 <li><a href="#">Mouse</a></li>
 </ul>
 </li>
</ul>
```

1. Berapa link `<a>` yang terpilih oleh `.menu a`? &rarr; **3 link** (semua link di dalam `.menu`).
2. Berapa link `<a>` yang terpilih oleh `.menu > li > a`? &rarr; **2 link** (hanya "Beranda" dan "Produk").
3. Berapa link `<a>` yang terpilih oleh `.submenu a`? &rarr; **2 link** (hanya "Laptop" dan "Mouse").