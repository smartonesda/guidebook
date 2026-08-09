---
title: "Ringkasan"
description: Rekap lengkap konsep HTML Attributes — dari anatomi hingga global attributes, id vs class, boolean attributes, data-*, dan ARIA dasar.
---

Selamat! Kamu telah menyelesaikan **BAB 7 — HTML Attributes** 🎉

Ini adalah bab di mana HTML berhenti terasa seperti "tempel saja attribute yang kelihatannya cocok" dan mulai terasa seperti **bahasa yang punya logika dan aturan yang jelas**.

Mari rekap semua yang sudah dipelajari.

---

## 🔬 Konsep Paling Fundamental

### Empat Hal yang Berbeda

```html
<h1 id="hero" class="heading primary">Selamat Datang</h1>
```

| Bagian | Contoh | Nama |
|---|---|---|
| Nama tag | `h1` | **Element** |
| Konfigurasi | `id`, `class` | **Attribute** |
| Nilai konfigurasi | `"hero"`, `"heading primary"` | **Attribute Value** |
| Isi yang tampil | `Selamat Datang` | **Content** |

### Cara Browser Memproses Attribute

```
HTML ditulis → Browser membaca attribute → Browser memutuskan:
  - Perilaku apa? (href membuat link bisa diklik)
  - CSS selektor mana? (id dan class)
  - JS bisa menemukannya bagaimana? (id, class, data-*)
  - Screen reader membaca apa? (alt, aria-label, role)
```

---

## 🌐 Global Attributes Penting

| Attribute | Fungsi | Catatan |
|---|---|---|
| `id` | Identitas unik element | Tidak boleh duplikat |
| `class` | Label kategori | Bisa banyak, dipisah spasi |
| `style` | Inline CSS | Gunakan hemat-hemat |
| `title` | Tooltip hover | Tidak muncul di touch device |
| `lang` | Bahasa konten | Wajib di `<html>` |
| `dir` | Arah teks | `ltr`, `rtl`, `auto` |
| `tabindex` | Urutan Tab keyboard | `0`, `-1`, hindari positif |
| `hidden` | Sembunyikan element | Dari visual DAN screen reader |
| `contenteditable` | Konten bisa diedit | `"true"` atau `"false"` |

---

## 🔀 Perbedaan id, class, name, value

| | `id` | `class` | `name` | `value` |
|---|---|---|---|---|
| **Fungsi** | Identitas unik | Label kategori | Kunci data server | Nilai yang dibawa |
| **Duplikat?** | ❌ | ✅ | ✅ (radio) | ✅ |
| **Ke server?** | ❌ | ❌ | ✅ | ✅ |
| **CSS pakai?** | ✅ `#id` | ✅ `.class` | ❌ | ❌ |
| **Anchor link?** | ✅ | ❌ | ❌ | ❌ |
| **Spasi?** | ❌ | ✅ (pisah class) | ❌ | Tergantung |

---

## 🔘 Boolean Attributes

Boolean attribute: cukup ditulis namanya — tidak perlu nilai.

```html
<!-- Ada = aktif -->
<input required />
<button disabled />

<!-- Tidak ada = tidak aktif -->
<input />
<button />
```

**Daftar boolean attribute penting:**
`required`, `disabled`, `readonly`, `checked`, `selected`, `multiple`, `hidden`, `open`, `controls`, `autoplay`, `muted`, `loop`, `novalidate`, `defer`, `async`

**Kesalahan kritis:** `required="false"` → attribute tetap **aktif**. Hapus attribute-nya jika ingin menonaktifkan.

---

## 📦 Custom data-* Attributes

```html
<div data-id="42" data-status="aktif" data-kategori="web">...</div>
```

```javascript
element.dataset.id;        // "42"
element.dataset.status;    // "aktif"
element.dataset.kategori;  // "web"
```

| Aspek | Detail |
|---|---|
| Format | `data-nama-kustom="nilai"` |
| Nama | Huruf kecil, tanda hubung pemisah kata |
| Akses JS | `dataset.namaKustom` (camelCase) |
| Akses CSS | `[data-nama]` selector |
| Gunakan untuk | Data kustom yang butuh dibaca JS/CSS |
| Jangan untuk | Menggantikan attribute standar, data sensitif |

---

## 🦮 ARIA Attributes Dasar

| Attribute | Fungsi |
|---|---|
| `role` | Peran semantik element |
| `aria-label` | Label teks untuk screen reader |
| `aria-labelledby` | Referensi ke element label |
| `aria-describedby` | Referensi ke element deskripsi |
| `aria-hidden` | Sembunyikan dari screen reader |
| `aria-expanded` | Status buka/tutup komponen |
| `aria-live` | Umumkan perubahan konten dinamis |

**Aturan utama ARIA:**
1. Gunakan HTML semantik lebih dulu — ARIA hanya untuk yang tidak ada element-nya.
2. ARIA salah lebih buruk dari tidak ada ARIA.
3. Element yang bisa difokus jangan pernah `aria-hidden="true"`.

---

## 📐 Hierarki Pemahaman Attribute

```
ELEMENT (apa objeknya?)
    ↓
ATTRIBUTE (konfigurasi apa?)
    ↓
ATTRIBUTE VALUE (nilai konfigurasinya berapa/apa?)
    ↓
BROWSER INTERPRETATION (browser baca dan putuskan apa?)
    ↓
BEHAVIOR / PRESENTATION / SEMANTIC / ACCESSIBILITY
```

HTML bukan sekadar teks yang ditulis untuk manusia — ia adalah instruksi terstruktur yang browser baca untuk memahami maksud setiap element dan bagaimana harus memperlakukannya.

---

## ✅ Checklist Penggunaan Attribute yang Baik

```
☐ Tidak ada id yang duplikat di satu halaman
☐ class digunakan untuk elemen berulang, bukan id
☐ name ada pada semua input dalam form
☐ Boolean attribute ditulis tanpa nilai (required, bukan required="true")
☐ target="_blank" selalu diikuti rel="noopener noreferrer"
☐ Semua img punya alt yang deskriptif
☐ data-* digunakan untuk data kustom, bukan penggantian attribute standar
☐ Icon-only button punya aria-label
☐ tabindex positif tidak digunakan tanpa alasan kuat
☐ aria-hidden tidak digunakan pada element yang bisa difokus
```

---

## ➡ Handoff ke BAB 8 — Semantic HTML

Di BAB 7 ini, kita sudah memahami bahwa attribute memberikan **informasi tambahan** kepada browser tentang bagaimana sebuah element harus diperlakukan.

Tapi ada dimensi lain dari "memberi makna pada HTML" yang belum kita bahas secara khusus: **pilihan element itu sendiri**.

Menggunakan `<div>` untuk semua hal versus menggunakan `<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` — keduanya bisa terlihat sama di layar, tapi browser, search engine, dan screen reader memperlakukan keduanya secara sangat berbeda.

Di **BAB 8 — Semantic HTML**, kita akan membahas bagaimana memilih element HTML yang tepat agar HTML kita memiliki **makna** yang bisa dipahami oleh mesin dan teknologi asistif — bukan hanya oleh mata manusia.

**[Lanjut ke BAB 8 — Semantic HTML →](/bab8/introduction/)**
