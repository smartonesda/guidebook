---
title: "Ringkasan"
description: Rekap lengkap semua konsep, elemen, dan atribut yang dipelajari di BAB 6 — Forms.
---

Selamat! Kamu telah menyelesaikan **BAB 6 — Forms** 🎉

Ini adalah bab yang sangat penting karena untuk pertama kalinya, kita belajar bahwa HTML tidak hanya bisa *menampilkan* data — tapi juga bisa *menerima* data dari pengguna.

Mari kita rekap semua yang sudah dipelajari.

---

## 🧠 Konsep Inti yang Harus Dikuasai

### Form sebagai Mekanisme Pengiriman Data

Form HTML adalah sarana untuk mengumpulkan input pengguna di browser (client-side) dan mengirimkannya ke server untuk diproses.

Browser memproses form dengan cara:
1. Mengumpulkan semua elemen input yang memiliki atribut `name` di dalam `<form>`.
2. Membuat paket data berisi pasangan `name=value`.
3. Mengirimkan paket data ke URL di atribut `action` menggunakan metode di atribut `method`.

### GET vs POST

| | GET | POST |
|---|---|---|
| **Data dikirim via** | URL (query string) | Request body |
| **Data terlihat?** | Ya (di URL) | Tidak |
| **Bisa di-bookmark?** | Ya | Tidak |
| **Cocok untuk** | Pencarian, filter | Login, kontak, upload, data sensitif |
| **Batasan ukuran** | Terbatas (panjang URL) | Tidak terbatas |

**Aturan praktis:** Jika data tidak boleh terlihat orang lain → gunakan POST.

### Hubungan `<label>` dan `<input>`

```
<label for="X">Teks label</label>
<input id="X" name="Y" />
        ↑                  ↑
     harus sama         untuk server
```

- `for` pada label harus sama dengan `id` pada input.
- `id` adalah identitas lokal (untuk CSS, JS, label) — tidak dikirim ke server.
- `name` adalah kunci data pengiriman — dikirim ke server.
- `value` adalah nilai yang dikirim (atau diketik pengguna).

---

## 📦 Perbedaan yang Sering Membingungkan

### `id` vs `name`

| | `id` | `name` |
|---|---|---|
| **Digunakan oleh** | CSS, JS, Label `for` | Server backend |
| **Dikirim ke server?** | Tidak | Ya |
| **Harus unik?** | Ya, di seluruh halaman | Tidak harus |
| **Boleh sama di banyak input?** | Tidak | Ya (untuk grup radio) |

### `disabled` vs `readonly`

| | `disabled` | `readonly` |
|---|---|---|
| **Bisa diinteraksi?** | Tidak | Tidak |
| **Dikirim ke server?** | **Tidak** | **Ya** |
| **Tampilan** | Abu-abu redup | Normal |

### `placeholder` vs `<label>`

| | `placeholder` | `<label>` |
|---|---|---|
| **Hilang saat diketik?** | Ya | Tidak |
| **Bisa diklik untuk fokus?** | Tidak | Ya |
| **Screen reader?** | Tidak konsisten | Reliable |
| **Wajib digunakan?** | Opsional | **Ya, selalu** |

### Radio vs Checkbox

| | Radio | Checkbox |
|---|---|---|
| **Pilih berapa?** | Tepat satu | Nol, satu, atau banyak |
| **`name` dalam grup?** | Harus sama | Tidak harus |
| **Jika tidak dipilih** | Tidak terkirim | Tidak terkirim |

---

## 🏷️ Tabel Elemen Form HTML

| Elemen | Atribut Utama | Fungsi |
|---|---|---|
| `<form>` | `action`, `method`, `enctype` | Wadah form — mendefinisikan tujuan & cara kirim |
| `<fieldset>` | - | Mengelompokkan input yang berkaitan |
| `<legend>` | - | Judul/label untuk `<fieldset>` |
| `<label>` | `for` | Teks keterangan input yang aksesibel |
| `<input>` | `type`, `name`, `id`, `value` | Elemen input serbaguna |
| `<textarea>` | `name`, `rows`, `cols` | Input teks multi-baris |
| `<select>` | `name`, `required`, `multiple` | Dropdown pilihan |
| `<option>` | `value`, `selected` | Item pilihan dalam dropdown |
| `<optgroup>` | `label` | Grup item dalam dropdown |
| `<datalist>` | `id` | Saran isian (hybrid: ketik atau pilih) |
| `<button>` | `type` (submit/reset/button) | Tombol aksi form |

---

## 🔢 Tabel Tipe Input Penting

| Type | Fungsi | Validasi Otomatis |
|---|---|---|
| `text` | Teks satu baris | Tidak ada |
| `email` | Alamat email | Format `@` dan domain |
| `password` | Kata sandi (tersembunyi) | Tidak ada |
| `number` | Angka | min/max/step |
| `tel` | Nomor telepon | Tidak ada (gunakan `pattern`) |
| `url` | Alamat website | Harus `http(s)://` |
| `date` | Kalender tanggal | Format tanggal |
| `time` | Pemilih waktu | Format waktu |
| `color` | Pemilih warna | Format hex |
| `range` | Slider nilai | min/max |
| `file` | Unggah berkas | Tipe file (`accept`) |
| `hidden` | Data tersembunyi | Tidak ada |
| `radio` | Pilih satu | `required` per grup |
| `checkbox` | Pilih banyak/ya-tidak | `required` |

---

## 🛡️ Atribut Validasi

| Atribut | Berlaku untuk | Fungsi |
|---|---|---|
| `required` | Semua input | Wajib diisi |
| `minlength` | text, email, password, textarea | Panjang teks minimum |
| `maxlength` | text, email, password, textarea | Panjang teks maksimum |
| `min` | number, date, time, range | Nilai minimum |
| `max` | number, date, time, range | Nilai maksimum |
| `step` | number, date, time, range | Kelipatan nilai |
| `pattern` | text, tel, url | Pola format kustom (regex) |
| `type` | Input | Validasi format implisit |

---

## ⚠️ Prinsip Keamanan yang Tidak Boleh Dilupakan

> **Client-side validation (HTML) = kenyamanan pengguna (UX)**  
> **Server-side validation = keamanan sesungguhnya**

HTML validation bisa dimanipulasi oleh pengguna via DevTools. Selalu lakukan validasi ulang di server untuk keamanan data.

---

## 📋 Checklist Form yang Benar

Gunakan checklist ini setiap kali membuat form:

```
☐ Setiap input punya <label> yang terhubung via for↔id
☐ Setiap input punya name yang deskriptif
☐ Form menggunakan method="POST" untuk data sensitif
☐ Grup radio dibungkus <fieldset> + <legend>
☐ <select> punya pilihan pertama dengan value=""
☐ Semua field wajib punya required
☐ Form dengan file upload punya enctype="multipart/form-data"
☐ Semua <button> dalam form punya type yang eksplisit
☐ Tidak ada placeholder yang menggantikan label
☐ HTML lolos validator.w3.org
```

---

## ➡ Handoff ke BAB 7 — HTML Attributes

Sepanjang BAB 1 hingga BAB 6, kita telah menggunakan banyak atribut:
`charset`, `viewport`, `href`, `target`, `rel`, `src`, `alt`, `colspan`, `rowspan`, `action`, `method`, `for`, `id`, `name`, `required`, `pattern`, dan masih banyak lagi.

Di **BAB 7 — HTML Attributes**, kita akan menguliti konsep **atribut HTML secara universal** — apa itu *global attributes* (`class`, `id`, `style`, `title`, `dir`, `tabindex`), bagaimana atribut `data-*` digunakan untuk komunikasi dengan JavaScript, dan pola-pola atribut yang berlaku di semua elemen HTML.

**[Lanjut ke BAB 7 — HTML Attributes →](/bab7/introduction/)**
