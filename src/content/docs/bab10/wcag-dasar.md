---
title: "WCAG Dasar"
description: Memahami Web Content Accessibility Guidelines (WCAG) secara konseptual — empat prinsip utama POUR (Perceivable, Operable, Understandable, Robust) dan relevansinya bagi web developer.
---

Ketika kita bicara tentang aksesibilitas web secara profesional, ada satu standar internasional yang menjadi panduan utama: **WCAG** (Web Content Accessibility Guidelines).

Di halaman ini, kita akan membahas WCAG bukan sebagai dokumen hukum yang rumit — melainkan sebagai **empat prinsip berpikir** yang bisa kita terapkan setiap kali menulis HTML.

---

## 🏛️ Apa Itu WCAG?

WCAG adalah standar internasional yang dikembangkan oleh World Wide Web Consortium (W3C) — organisasi yang sama yang mengurus spesifikasi HTML dan CSS.

WCAG dibagi menjadi tiga tingkat kepatuhan:
- **Level A** — standar minimum dasar (paling dasar)
- **Level AA** — standar yang digunakan oleh kebanyakan perusahaan dan regulasi hukum (target utama)
- **Level AAA** — tingkat tertinggi (sangat ketat, biasanya untuk website khusus)

Untuk web developer modern, target yang realistis dan direkomendasikan adalah **Level AA**.

---

## 🧩 Empat Prinsip Utama: P-O-U-R

WCAG dibangun di atas empat prinsip utama yang disingkat **POUR**:

```
P — Perceivable   (Dapat Dirasakan/Diamati)
O — Operable      (Dapat Dioperasikan)
U — Understandable (Dapat Dipahami)
R — Robust        (Tahan Lama / Handal)
```

Mari kita bedah satu per satu dalam konteks HTML.

---

## 1. P — Perceivable (Dapat Dirasakan)

**Prinsip:** Informasi dan komponen antarmuka pengguna harus dapat disajikan dalam bentuk yang dapat dirasakan oleh setidaknya satu indera pengguna.

Artinya: konten tidak boleh "tidak terlihat" hanya karena pengguna tidak bisa melihatnya dengan mata biasa.

### Relevansi HTML:

- **Alternative text untuk gambar:** Gambar non-dekoratif harus punya `alt` agar orang yang tidak bisa melihat gambar bisa mendapat informasinya.
- **Transkrip/Caption untuk media:** Audio/video punya teks alternatif.
- **Kontras warna:** Teks mudah dibaca terhadap warna background.
- **Adaptif:** Konten bisa disajikan dalam berbagai cara (misalnya layout mobile yang lebih sederhana) tanpa kehilangan informasi.

```html
<!-- ❌ Tidak Perceivable: gambar tanpa alt -->
<img src="diagram-arsitektur.png" />

<!-- ✅ Perceivable: gambar punya alt deskriptif -->
<img src="diagram-arsitektur.png" alt="Diagram arsitektur sistem: frontend berkomunikasi dengan API backend melalui REST API" />
```

---

## 2. O — Operable (Dapat Dioperasikan)

**Prinsip:** Komponen antarmuka pengguna dan navigasi harus dapat dioperasikan.

Artinya: website harus bisa dioperasikan oleh berbagai cara interaksi — tidak hanya mouse.

### Relevansi HTML:

- **Keyboard-accessible:** Semua fitur bisa dioperasikan hanya dengan keyboard (Tab, Enter, Space, Arrow keys).
- **Cukup waktu:** Pengguna diberi cukup waktu untuk membaca dan memproses konten.
- **Bukan pemicu kejang:** Tidak ada konten yang berkedip-kedip lebih dari 3 kali dalam satu detik.
- **Navigasi yang membantu:** Halaman punya judul yang jelas (`<title>`), link yang deskriptif, dan cara untuk melewati bagian berulang.

```html
<!-- ❌ Tidak Operable: div yang meniru tombol tapi tidak bisa difokus keyboard -->
<div class="button" onclick="kirimForm()">Kirim</div>

<!-- ✅ Operable: gunakan button native HTML -->
<button type="submit" class="button">Kirim</button>
```

---

## 3. U — Understandable (Dapat Dipahami)

**Prinsip:** Informasi dan pengoperasian antarmuka pengguna harus dapat dipahami.

Artinya: konten dan cara menggunakan website harus jelas, tidak membingungkan, dan konsisten.

### Relevansi HTML:

- **Bahasa dokumen yang jelas:** Menggunakan `lang="id"` pada tag `<html>`.
- **Navigasi yang konsisten:** Navigasi ada di tempat yang sama di setiap halaman.
- **Input assistance:** Form membantu pengguna menghindari dan memperbaiki kesalahan (misalnya dengan `<label>` dan `aria-describedby`).
- **Instruksi yang jelas:** Tidak mengandalkan bentuk atau posisi visual saja untuk memberi instruksi ("Klik tombol hijau di sebelah kanan" → buruk; "Klik tombol Kirim Pesan" → baik).

```html
<!-- ❌ Tidak Understandable: label terpisah tanpa koneksi -->
<p>Alamat Email:</p>
<input type="text" name="email" />

<!-- ✅ Understandable: label terhubung via for↔id -->
<label for="email-user">Alamat Email:</label>
<input type="email" id="email-user" name="email" required />
```

---

## 4. R — Robust (Tahan Lama / Handal)

**Prinsip:** Konten harus cukup tahan lama sehingga dapat ditafsirkan secara handal oleh berbagai user agent, termasuk teknologi asistif.

Artinya: HTML yang ditulis mengikuti standar agar kompatibel dengan berbagai browser, alat bantu, dan versi di masa depan.

### Relevansi HTML:

- **Valid HTML:** Tag dibuka dan ditutup dengan benar, atribut unik, id tidak duplikat.
- **Native HTML first:** Gunakan elemen bawaan yang sudah didukung secara universal sebelum membuat custom component.
- **ARIA yang benar:** Jika menggunakan ARIA, ikuti spesifikasi dengan tepat.

```html
<!-- ❌ Tidak Robust: id duplikat merusak pemrosesan browser -->
<input type="text" id="nama" />
<input type="text" id="nama" />

<!-- ✅ Robust: id unik dan HTML valid -->
<input type="text" id="nama-depan" />
<input type="text" id="nama-belakang" />
```

---

## 📊 Ringkasan POUR dalam HTML

| Prinsip | Pertanyaan yang Perlu Diajukan | Elemen HTML Relevan |
|---|---|---|
| **Perceivable** | Apakah semua pengguna bisa merasakan konten ini? | `alt`, `<figure>`, `<figcaption>`, `<time>`, `<abbr>` |
| **Operable** | Apakah semua pengguna bisa mengoperasikannya? | `<button>`, `<a>`, `<nav>`, `tabindex`, `<title>` |
| **Understandable** | Apakah informasi dan cara kerjanya jelas? | `lang`, `<label>`, `<fieldset>`, `<legend>`, `<main>` |
| **Robust** | Apakah HTML valid dan kompatibel? | Valid HTML, unique `id`, proper ARIA |

---

## 💡 Checklist POUR untuk HTML

Setiap kali menulis HTML, gunakan empat pertanyaan ini:

```
[P] — Apakah gambar ini punya alt yang bermakna?
[O] — Apakah tombol ini bisa ditekan menggunakan tombol Space/Enter di keyboard?
[U] — Apakah setiap input form punya label yang terhubung?
[R] — Apakah HTML saya valid tanpa id yang duplikat?
```

Jika keempat jawaban tersebut "ya", kamu sudah menerapkan WCAG Dasar dengan sukses.

---

**[Lanjut: Alt Text yang Baik →](/bab10/alt-text/)**
