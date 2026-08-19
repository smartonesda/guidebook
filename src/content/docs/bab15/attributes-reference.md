---
title: "Kamus Atribut HTML"
description: Referensi cepat atribut HTML — Atribut Global (Global Attributes), Atribut Boolean, dan Atribut Spesifik Elemen.
---

## 🌐 1. Global Attributes (Berlaku di Semua Elemen)

| Atribut | Fungsi | Contoh Sintaks |
|---|---|---|
| `id` | Pengenal unik mutlak (1 per halaman) | `id="form-kontak"` |
| `class` | Label kategori untuk CSS & JS (bisa banyak) | `class="card card--featured"` |
| `style` | Inline CSS (gunakan hemat-hemat) | `style="color: red;"` |
| `title` | Tooltip teks saat kursor menempel (*hover*) | `title="Wajib diisi"` |
| `lang` | Bahasa konten elemen | `lang="id"` |
| `dir` | Arah penulisan teks | `dir="ltr"` / `dir="rtl"` |
| `tabindex` | Urutan navigasi keyboard (`0`, `-1`) | `tabindex="0"` |
| `hidden` | Menyembunyikan elemen dari layar & A11y | `hidden` |
| `contenteditable` | Membuat teks bisa diedit langsung | `contenteditable="true"` |
| `data-*` | Kustom atribut data untuk JS/CSS | `data-status="selesai"` |

---

## 🔘 2. Boolean Attributes (Cukup Tulis Namanya)

Boolean attributes bekerja berdasarkan **keberadaan atribut tersebut** di dalam tag (tidak perlu diberi nilai `"false"`).

```html
<!-- ✅ CARA BENAR -->
<input type="text" required />
<button disabled>Kirim</button>
<input type="checkbox" checked />
<option selected>Pilihan</option>
```

| Atribut | Berlaku untuk | Fungsi |
|---|---|---|
| `required` | input, select, textarea | Wajib diisi sebelum form dikirim |
| `disabled` | input, button, select, textarea | Dinonaktifkan total (tidak dikirim ke server) |
| `readonly` | input, textarea | Hanya baca (tetap dikirim ke server) |
| `checked` | radio, checkbox | Tercentang/terpilih secara default |
| `selected` | `<option>` | Terpilih secara default dalam dropdown |
| `multiple` | select, file input | Mengizinkan pilih banyak opsi/file sekaligus |
| `controls` | video, audio | Memunculkan tombol kontrol pemutar media |
| `autoplay` | video, audio | Memutar media otomatis saat halaman dimuat |
| `muted` | video, audio | Membungkam suara media |
| `loop` | video, audio | Memutar ulang media berulangkali |
| `novalidate` | `<form>` | Menonaktifkan validasi browser bawaan |
| `defer` | `<script>` | Menunda eksekusi JS sampai HTML selesai dimuat |

---

## 📌 3. Atribut Spesifik Elemen Penting

### Elemen `<a>` (Hyperlink)
- `href`: Alamat URL tujuan (`href="index.html"`, `href="#id"`, `href="mailto:..."`).
- `target`: Lokasi pembukaan link (`target="_blank"` untuk tab baru).
- `rel`: Hubungan link (`rel="noopener noreferrer"` untuk keamanan tab baru).
- `download`: Memaksa peramban mengunduh berkas (`download="resume.pdf"`).

### Elemen `<img>` (Gambar)
- `src`: Path/lokasi file gambar.
- `alt`: Teks alternatif untuk aksesibilitas & fallback gambar mati.
- `width` & `height`: Lebar & tinggi piksel (mencegah CLS).
- `loading`: Strategi pemuatan (`loading="lazy"` atau `loading="eager"`).

### Elemen `<form>` (Formulir)
- `action`: URL server backend penerima data (`action="/proses.php"`).
- `method`: Metode pengiriman (`method="POST"` atau `method="GET"`).
- `enctype`: Tipe pengemasan (`enctype="multipart/form-data"` untuk upload file).

---

**[Lanjut: Kamus Input Types →](/bab15/input-types-reference/)**
