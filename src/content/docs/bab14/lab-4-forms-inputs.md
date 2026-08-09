---
title: "Lab 4 — Forms & Inputs"
description: Lab Debugging 4 — Menemukan bug pengiriman data form, miskoneksi label-input, radio group name yang salah, dan tombol submit yang hilang.
---

## 🔬 CHALLENGE 4.1 — Data Input Hilang Saat Pengiriman Form

### Scenario
Seorang pengguna mengisikan nama lengkap di dalam formulir kontak, lalu menekan tombol "Kirim Pesan". Namun di sisi server backend, data nama pengirim bernilai kosong/null.

### Expected Behavior
Server menerima pasangan data `nama_lengkap=Budi+Santoso` saat formulir dikirimkan.

### Broken Code
```html
<form action="/proses-kontak.php" method="POST">
  <label for="input-nama">Nama Lengkap:</label>
  <input type="text" id="input-nama" placeholder="Ketik nama..." required />
  
  <button type="submit">Kirim Pesan</button>
</form>
```

### Symptoms
Di Network Tab Chrome DevTools (Request Payload), data yang terkirim hanya `{}` tanpa ada kunci parameter nama.

---

### 🕵️ Investigation & Hints
1. *Atribut apakah yang digunakan oleh browser sebagai KUNCI data saat mengirimkan form ke server?*
2. *Apakah `id="input-nama"` ikut dikirimkan ke server backend?*

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<form action="/proses-kontak.php" method="POST">
  <label for="input-nama">Nama Lengkap:</label>
  <input 
    type="text" 
    id="input-nama" 
    name="nama_lengkap" 
    placeholder="Ketik nama..." 
    required 
  />
  
  <button type="submit">Kirim Pesan</button>
</form>
```

**Alasan Teknis**:
Browser mengumpulkan dan mengemas data formulir berdasarkan pasangan atribut **`name`** dan nilainya (`name=value`). Atribut `id` hanya digunakan untuk identitas lokal di sisi browser (styling CSS, target label `for`, dan JavaScript). Karena tag `<input>` di atas **tidak memiliki atribut `name`**, browser mengabaikan kotak isian tersebut saat pengiriman data form.

---

## 🔬 CHALLENGE 4.2 — Radio Button yang Bisa Dicentang Semua

### Scenario
Dalam formulir pendaftaran, terdapat pertanyaan "Pilih Metode Pembayaran". Pengguna mendapati bug aneh di mana mereka bisa mencentang KEDUA pilihan radio button (Transfer Bank DAN QRIS) secara bersamaan.

### Broken Code
```html
<p>Pilih Metode Pembayaran:</p>
<input type="radio" id="pay-bank" name="bayar_bank" value="bank" />
<label for="pay-bank">Transfer Bank</label>

<input type="radio" id="pay-qris" name="bayar_qris" value="qris" />
<label for="pay-qris">QRIS</label>
```

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<fieldset>
  <legend>Pilih Metode Pembayaran:</legend>
  
  <input type="radio" id="pay-bank" name="metode_pembayaran" value="bank" checked />
  <label for="pay-bank">Transfer Bank</label>

  <input type="radio" id="pay-qris" name="metode_pembayaran" value="qris" />
  <label for="pay-qris">QRIS</label>
</fieldset>
```

**Alasan Teknis**:
Browser mengenali sekumpulan elemen `<input type="radio">` berada di dalam satu kelompok pertanyaan yang sama jika dan hanya jika mereka **memiliki atribut `name` yang sama persis**. Ketika atribut `name` dibuat berbeda (`bayar_bank` dan `bayar_qris`), browser menganggap keduanya adalah dua pertanyaan terpisah sehingga pengguna bisa memilih keduanya sekaligus.

---

**[Lanjut: Lab 5 — Attributes & Data →](/bab14/lab-5-attributes-data/)**
