---
title: "Pilihan Dropdown & Textarea"
description: Memahami secara mendalam elemen select, option, optgroup, textarea, fieldset, legend, dan datalist — kapan menggunakannya dan cara kerjanya.
---

Tidak semua masukan pengguna bisa ditampung oleh `<input>`. Ada kebutuhan yang lebih kompleks:

- Pilih dari daftar yang panjang? → `<select>`
- Tulis pesan paragraf panjang? → `<textarea>`
- Kelompokkan isian yang berhubungan? → `<fieldset>`
- Sarankan opsi tapi tetap bisa ketik bebas? → `<datalist>`

Di halaman ini, kita akan membahas semua elemen pelengkap form yang wajib dikuasai.

---

## 🔽 Elemen `<select>` — Menu Dropdown

Tag `<select>` membuat menu dropdown — sebuah kotak yang bisa diklik untuk menampilkan daftar pilihan. Pengguna hanya bisa memilih dari pilihan yang sudah ditentukan.

```html
<label for="layanan">Layanan yang Dibutuhkan:</label>
<select id="layanan" name="jenis_layanan">
  <option value="">-- Pilih Layanan --</option>
  <option value="web-dev">Pembuatan Website</option>
  <option value="web-design">Desain UI/UX</option>
  <option value="maintenance">Perawatan Website</option>
  <option value="konsultasi">Konsultasi</option>
</select>
```

### Cara Kerja `<select>` dan `<option>`

- Tag `<select>` adalah wadah — mirip `<ul>` untuk list.
- Tag `<option>` adalah setiap item pilihan — mirip `<li>` untuk list.
- Atribut `name` ada di `<select>`, bukan di `<option>`.
- Atribut `value` di `<option>` adalah **nilai yang dikirim ke server**, bukan teks yang ditampilkan ke pengguna.

Perhatikan ini:
```html
<option value="web-dev">Pembuatan Website</option>
```

Yang dilihat pengguna: **"Pembuatan Website"**  
Yang dikirim ke server: **`jenis_layanan=web-dev`**

Ini penting! Nilai `value` biasanya singkat, tanpa spasi, dalam bahasa Inggris atau kode — karena ini yang akan diproses oleh backend. Teks di antara tag `<option>` adalah tampilan untuk pengguna.

---

### Pilihan Pertama yang Kosong — Praktik Terbaik

Perhatikan baris pertama:
```html
<option value="">-- Pilih Layanan --</option>
```

Ini adalah **placeholder dropdown** — pilihan default yang muncul sebelum pengguna memilih. Nilai `value=""` (kosong) digunakan supaya jika digabungkan dengan `required`, browser akan menolak pengiriman jika pengguna belum memilih pilihan yang valid.

```html
<select name="layanan" required>
  <option value="">-- Pilih Layanan --</option>  <!-- nilai kosong = belum pilih -->
  <option value="web-dev">Pembuatan Website</option>
</select>
```

Dengan `required` dan `value=""` pada opsi pertama, browser akan memblokir pengiriman jika pengguna tidak memilih apapun (nilai kosong dianggap "belum diisi").

---

### Pilihan yang Terpilih secara Default

Gunakan atribut `selected` untuk menentukan opsi yang sudah terpilih saat halaman dimuat:

```html
<select name="negara">
  <option value="id" selected>Indonesia</option>
  <option value="my">Malaysia</option>
  <option value="sg">Singapura</option>
</select>
```

---

### Pilih Banyak dengan `multiple`

Secara default, `<select>` hanya membolehkan satu pilihan. Tambahkan atribut `multiple` untuk mengizinkan pengguna memilih lebih dari satu:

```html
<label for="skill-list">Pilih Keahlian (Ctrl+klik untuk pilih banyak):</label>
<select id="skill-list" name="keahlian[]" multiple size="5">
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="javascript">JavaScript</option>
  <option value="figma">Figma</option>
  <option value="git">Git</option>
</select>
```

- Atribut `size` menentukan berapa baris yang tampil tanpa scroll.
- `name="keahlian[]"` menggunakan konvensi array.
- Pengguna harus menekan Ctrl (Windows) atau Cmd (Mac) untuk memilih lebih dari satu.

Pengalaman pengguna dengan `multiple` select cukup buruk di mobile. Pertimbangkan menggunakan beberapa checkbox sebagai alternatif yang lebih ramah pengguna.

---

### Mengelompokkan Pilihan: `<optgroup>`

Jika daftar pilihan sangat panjang, kamu bisa mengelompokkannya menggunakan `<optgroup>`:

```html
<label for="teknologi">Teknologi Utama:</label>
<select id="teknologi" name="teknologi">
  <option value="">-- Pilih Teknologi --</option>
  
  <optgroup label="Front-End">
    <option value="html">HTML</option>
    <option value="css">CSS</option>
    <option value="js">JavaScript</option>
    <option value="react">React</option>
  </optgroup>
  
  <optgroup label="Back-End">
    <option value="php">PHP</option>
    <option value="nodejs">Node.js</option>
    <option value="python">Python</option>
  </optgroup>
  
  <optgroup label="Database">
    <option value="mysql">MySQL</option>
    <option value="mongodb">MongoDB</option>
  </optgroup>
</select>
```

Teks di atribut `label` pada `<optgroup>` adalah judul grup yang ditampilkan — ia **tidak bisa dipilih** oleh pengguna.

---

## 📝 Elemen `<textarea>` — Kotak Teks Multi-Baris

Tag `<textarea>` digunakan untuk input teks yang panjang dan bisa merentang ke banyak baris. Cocok untuk: pesan, deskripsi, ulasan, catatan, komentar.

```html
<label for="pesan">Pesan / Detail Proyek:</label>
<textarea 
  id="pesan" 
  name="pesan_inquiry" 
  rows="6" 
  placeholder="Ceritakan proyek kamu: apa yang ingin dibuat, fitur yang diinginkan, dan deadline..."
  minlength="20"
  required
></textarea>
```

### Perbedaan `<textarea>` vs `<input type="text">`

| | `<input type="text">` | `<textarea>` |
|---|---|---|
| **Jumlah baris** | Satu baris | Bisa banyak baris |
| **Teks awal** | Atribut `value="..."` | Ditulis di antara tag |
| **Bisa diubah ukurannya?** | Tidak | Ya (pengguna bisa drag pojok kanan bawah) |
| **Tag penutup?** | Tidak ada (void element) | Ada (`</textarea>`) |
| **Placeholder?** | Ya | Ya |

### Cara Menulis Nilai Awal `<textarea>`

Berbeda dari `<input>`, nilai awal `<textarea>` ditulis **di antara tag pembuka dan penutupnya**:

```html
<!-- ✅ BENAR: nilai awal di antara tag -->
<textarea name="pesan">Halo, saya tertarik dengan layanan web development...</textarea>

<!-- ❌ SALAH: value tidak bekerja pada textarea -->
<textarea name="pesan" value="teks ini tidak akan muncul"></textarea>
```

### Mengontrol Ukuran `<textarea>`

```html
<textarea rows="6" cols="50" name="pesan"></textarea>
```

- `rows` = tinggi kotak dalam satuan baris teks (default: 2)
- `cols` = lebar kotak dalam satuan karakter (default: 20)

Namun dalam praktik modern, ukuran lebih baik dikontrol dengan CSS (`width: 100%; height: 150px`) daripada `rows` dan `cols`.

Untuk menonaktifkan kemampuan pengguna mengubah ukuran:
```css
textarea {
  resize: none;  /* atau: horizontal, vertical, both */
}
```

---

## 🗂️ Elemen `<fieldset>` dan `<legend>` — Pengelompokan Form

Ketika sebuah form memiliki banyak input, kita bisa mengelompokkan input yang berkaitan menggunakan `<fieldset>`. Ini bukan hanya estetika — ini juga sangat penting untuk aksesibilitas.

```html
<form action="/daftar" method="POST">
  
  <fieldset>
    <legend>Informasi Pribadi</legend>
    
    <label for="nama">Nama Lengkap:</label>
    <input type="text" id="nama" name="nama_lengkap" required />
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    
    <label for="hp">Nomor HP:</label>
    <input type="tel" id="hp" name="nomor_hp" />
  </fieldset>

  <fieldset>
    <legend>Detail Proyek</legend>
    
    <label for="jenis">Jenis Proyek:</label>
    <select id="jenis" name="jenis_proyek">
      <option value="">-- Pilih --</option>
      <option value="website">Website</option>
      <option value="aplikasi">Aplikasi</option>
    </select>
    
    <label for="deadline">Target Selesai:</label>
    <input type="date" id="deadline" name="deadline_proyek" />
  </fieldset>

  <button type="submit">Kirim Inquiry</button>

</form>
```

### Mengapa `<fieldset>` dan `<legend>` Penting?

1. **Aksesibilitas:** Screen reader akan mengumumkan nama `<legend>` sebelum membacakan setiap input di dalamnya. Jadi pengguna screen reader tahu bahwa mereka sedang berada di bagian "Informasi Pribadi" atau "Detail Proyek".

2. **Struktur logis:** Sangat berguna untuk form dengan banyak seksi — form registrasi multi-tahap, form kuesioner, form pendaftaran panjang.

3. **Visual:** Browser secara default memberikan border dan teks `<legend>` sebagai judul bagian — meskipun ini bisa sepenuhnya di-style ulang dengan CSS.

**Penggunaan wajib:** `<fieldset>` adalah **wajib** untuk grup radio button dan checkbox. Ini adalah cara yang benar secara semantik untuk membungkus grup pilihan:

```html
<fieldset>
  <legend>Pilih Metode Kontak yang Kamu Inginkan:</legend>
  
  <input type="radio" id="kontak-email" name="metode_kontak" value="email" />
  <label for="kontak-email">Email</label>
  
  <input type="radio" id="kontak-wa" name="metode_kontak" value="whatsapp" />
  <label for="kontak-wa">WhatsApp</label>
  
  <input type="radio" id="kontak-telepon" name="metode_kontak" value="telepon" />
  <label for="kontak-telepon">Telepon</label>
</fieldset>
```

---

## 💡 Elemen `<datalist>` — Saran Isian (Hybrid Input)

`<datalist>` adalah elemen yang menarik: ia memberikan daftar saran seperti dropdown, tapi pengguna tetap bisa mengetik nilai lain yang tidak ada di daftar.

```html
<label for="kota">Kota:</label>
<input type="text" id="kota" name="kota_asal" list="daftar-kota" placeholder="Ketik atau pilih kota..." />

<datalist id="daftar-kota">
  <option value="Jakarta">
  <option value="Bandung">
  <option value="Surabaya">
  <option value="Yogyakarta">
  <option value="Medan">
  <option value="Makassar">
  <option value="Semarang">
</datalist>
```

Perhatikan cara menghubungkan keduanya:
- Atribut `list` pada `<input>` harus sama dengan `id` pada `<datalist>`.
- `<datalist>` tidak memiliki tag label sendiri — labelnya tetap dari `<label>` yang terhubung ke `<input>`.

### `<select>` vs `<datalist>` — Kapan Menggunakan Mana?

| | `<select>` | `<datalist>` |
|---|---|---|
| **Pilihan terbatas?** | Ya (hanya bisa pilih dari daftar) | Tidak (bisa ketik nilai baru) |
| **Jumlah pilihan?** | Cocok untuk 5-20 pilihan | Cocok untuk daftar panjang dengan opsi ketik bebas |
| **Contoh penggunaan** | Pilih provinsi, pilih kategori | Input kota (mungkin kota yang tidak ada di daftar), nama universitas |
| **Nilai yang dikirim** | Selalu dari `value` option | Nilai yang diketik pengguna |

---

## 🏗️ Contoh Struktur Form yang Lengkap

Berikut adalah contoh form yang menggunakan semua elemen yang sudah kita pelajari di halaman ini:

```html
<form action="/inquiry" method="POST" enctype="multipart/form-data">
  
  <fieldset>
    <legend>Informasi Diri</legend>
    
    <label for="nama">Nama Lengkap:</label>
    <input type="text" id="nama" name="nama" required minlength="3" />
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
    
    <label for="kota">Kota:</label>
    <input type="text" id="kota" name="kota" list="saran-kota" />
    <datalist id="saran-kota">
      <option value="Jakarta">
      <option value="Bandung">
      <option value="Surabaya">
    </datalist>
  </fieldset>

  <fieldset>
    <legend>Detail Inquiry</legend>
    
    <label for="layanan">Jenis Layanan:</label>
    <select id="layanan" name="layanan" required>
      <option value="">-- Pilih --</option>
      <option value="web-dev">Web Development</option>
      <option value="design">UI/UX Design</option>
    </select>
    
    <p>Metode Kontak Pilihan:</p>
    <input type="radio" id="via-email" name="via_kontak" value="email" checked />
    <label for="via-email">Email</label>
    <input type="radio" id="via-wa" name="via_kontak" value="whatsapp" />
    <label for="via-wa">WhatsApp</label>
    
    <label for="pesan">Pesan:</label>
    <textarea id="pesan" name="pesan" rows="5" required minlength="20" 
      placeholder="Ceritakan kebutuhan proyekmu..."></textarea>
  </fieldset>

  <fieldset>
    <legend>Berkas Pendukung (Opsional)</legend>
    <label for="brief">Upload Brief / Referensi (PDF/gambar):</label>
    <input type="file" id="brief" name="file_brief" accept=".pdf,image/*" />
  </fieldset>

  <input type="checkbox" id="setuju" name="setuju" value="ya" required />
  <label for="setuju">Saya menyetujui penggunaan data ini untuk keperluan kontak.</label>

  <button type="submit">Kirim Inquiry</button>

</form>
```

---

Mari kita pelajari cara mengaktifkan sistem validasi bawaan browser agar form kita lebih kuat.

**[Lanjut: Validasi Form Bawaan →](/bab6/validasi-form-bawaan/)**
