---
title: "Kamus Input Types"
description: Referensi lengkap tipe-tipe input HTML5 (<input type="...">) — fungsi, papan ketik mobile, validasi bawaan, dan contoh sintaksis.
---

Atribut `type="..."` pada elemen `<input>` menentukan perilaku kotak isian, jenis papan ketik (*keyboard layout*) yang muncul di HP, serta validasi format bawaan peramban web.

---

## 📋 Tabel Referensi Tipe Input HTML5

| `type="..."` | Perilaku & Tampilan | Keyboard Mobile | Validasi Bawaan | Contoh Sintaks |
|---|---|---|---|---|
| **`text`** | Isian teks bebas 1 baris (default) | Teks biasa | Tidak ada | `<input type="text" name="nama" />` |
| **`email`** | Isian alamat email | Muncul `@` & `.com` | Format email (`user@domain.com`) | `<input type="email" name="email" />` |
| **`password`** | Karakter tersembunyi (●●●●) | Teks biasa | Tidak ada | `<input type="password" name="sandi" />` |
| **`number`** | Angka dengan tombol panah | Angka saja | Angka, `min`, `max`, `step` | `<input type="number" min="1" max="10" />` |
| **`tel`** | Nomor telepon | Angka & `+#*` | Kombinasikan dengan `pattern` | `<input type="tel" pattern="[0-9]{10,13}" />` |
| **`url`** | Alamat link website | Muncul `/` & `.com` | Wajib `http://` / `https://` | `<input type="url" name="website" />` |
| **`search`** | Kotak pencarian (ada tombol ×) | Tombol Cari/Search | Tidak ada | `<input type="search" name="q" />` |
| **`date`** | Pemilih kalender tanggal | Pemilih tanggal | Format tanggal ISO (YYYY-MM-DD) | `<input type="date" name="tgl" />` |
| **`time`** | Pemilih jam & menit | Pemilih waktu | Format jam (HH:MM) | `<input type="time" name="jam" />` |
| **`datetime-local`** | Pemilih tanggal + jam | Date & Time picker | Format ISO gabungan | `<input type="datetime-local" />` |
| **`color`** | Jendela pemilih warna (*color picker*) | Color Picker UI | Kode HEX (`#ffffff`) | `<input type="color" name="warna" />` |
| **`range`** | Penggeser nilai (*slider*) | Slider UI | `min`, `max`, `step` | `<input type="range" min="0" max="100" />` |
| **`file`** | Tombol unduh/pilih berkas | Pengelola Berkas | Atribut `accept` | `<input type="file" accept="image/*,.pdf" />` |
| **`checkbox`** | Kotak centang (pilih banyak/ya-tidak) | — | Wajib dicentang jika `required` | `<input type="checkbox" name="setuju" />` |
| **`radio`** | Pilihan bulat (pilih 1 dari grup) | — | Berbagi `name` yang sama | `<input type="radio" name="sesi" value="a" />` |
| **`hidden`** | Isian tersembunyi (tak tampak) | — | Tidak ada | `<input type="hidden" name="token" value="xyz" />` |
| **`submit`** | Tombol pemicu pengiriman form | — | Memicu validasi & pengiriman | `<input type="submit" value="Kirim" />` |
| **`reset`** | Tombol pengembali nilai default | — | Mereset seluruh isian form | `<input type="reset" value="Reset" />` |
| **`button`** | Tombol netral (butuh JS) | — | Tidak ada | `<input type="button" value="Klik" />` |

---

**[Lanjut: HTML Entities & Karakter →](/bab15/entities-reference/)**
