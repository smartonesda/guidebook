---
title: "Project 5 — Event Registration"
description: Mini Project 5 — Membangun formulir pendaftaran seminar/event multi-seksi yang aman, valid, dan sangat aksesibel.
---

## 📄 1. Project Brief

- **Project**: Formulir Pendaftaran Workshop / Event (*Event Registration Form*)
- **Level**: Intermediate → Advanced
- **Estimasi Waktu**: 60 Menit

---

## 🎭 2. Scenario & Problem

Ekstrakurikuler Coding Club sekolah akan mengadakan workshop bertajuk *"Web Development Roadmap 2026"*. Kamu bertugas merancang halaman pendaftaran peserta online. Formulir ini harus mampu mengumpulkan data diri, pilihan sesi workshop, kebutuhan diet/konsumsi, dan berkas kartu pelajar.

---

## 🎯 3. Goal & Target User

- **Goal**: Membangun formulir pendaftaran yang lengkap, aman, mencegah pengiriman data kosong, dan dapat diakses dengan mudah oleh pengguna keyboard.
- **Target User**: Siswa peserta workshop, pendaftar umum, dan panitia acara.

---

## 📋 4. Requirements Wajib

### A. Pengelompokan & Aksesibilitas Form
- [ ] Seluruh input dibungkus dalam elemen `<form method="POST" action="/daftar-event">`.
- [ ] Pengelompokan input menggunakan minimal 3 elemen `<fieldset>` dengan `<legend>` deskriptif:
  1. `<fieldset>` Data Diri Peserta
  2. `<fieldset>` Pilihan Sesi & Konsumsi
  3. `<fieldset>` Berkas Pendukung & Persetujuan
- [ ] Seluruh input wajib memiliki pasangannya yaitu `<label for="id">` yang terhubung presisi.
- [ ] Tanda bidang wajib menggunakan `<abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>`.

### B. Variasi Elemen & Validasi HTML5
- [ ] **Nama & Email**: Input teks & email dengan `required` dan `autocomplete`.
- [ ] **Nomor HP**: Input `type="tel"` dengan atribut `pattern="[0-9]{10,13}"`.
- [ ] **Pilihan Sesi**: Grup Radio Button (`type="radio"`) dalam `<fieldset>` khusus.
- [ ] **Pilihan Sesi Tambahan**: Dropdown menu `<select>` dengan pilihan terkelompok (`<optgroup>`).
- [ ] **Upload Kartu Pelajar**: Input `type="file"` dengan `accept="image/*,.pdf"`. (Form harus menyertakan `enctype="multipart/form-data"`).
- [ ] **Teks Catatan**: Input multi-baris `<textarea>` dengan `minlength="10"`.
- [ ] **Checkbox Syarat**: Input `type="checkbox"` wajib dicentang (`required`).

---

## 🧠 5. Concepts Used (BAB 1–11)

- **BAB 6**: Elemen formulir lengkap (`<form>`, `<input>`, `<select>`, `<optgroup>`, `<textarea>`, `<button>`).
- **BAB 7**: Validasi HTML5 bawaan (`required`, `pattern`, `minlength`, `accept`).
- **BAB 10**: Form accessibility (`aria-required`, `aria-describedby`, `<abbr>`).

---

## 🏗️ 6. Suggested Page Structure

```html
<main>
  <section id="pendaftaran-workshop">
    <h1>Pendaftaran Workshop Web Dev 2026</h1>

    <form action="/proses.php" method="POST" enctype="multipart/form-data">
      <fieldset>
        <legend>1. Data Diri Peserta</legend>
        <div class="form-group">
          <label for="nama">Nama Lengkap <abbr title="Wajib diisi">*</abbr></label>
          <input type="text" id="nama" name="nama" required autocomplete="name" />
        </div>
      </fieldset>

      <fieldset>
        <legend>2. Pilihan Sesi Workshop</legend>
        <fieldset>
          <legend>Pilih Waktu Sesi:</legend>
          <input type="radio" id="sesi-pagi" name="sesi" value="pagi" checked />
          <label for="sesi-pagi">Sesi Pagi (08:00 - 12:00)</label>
        </fieldset>
      </fieldset>

      <fieldset>
        <legend>3. Berkas & Persetujuan</legend>
        <div class="form-group">
          <label for="kartu">Upload Kartu Pelajar (PDF/Gambar):</label>
          <input type="file" id="kartu" name="kartu_pelajar" accept="image/*,.pdf" />
        </div>
      </fieldset>

      <button type="submit">🚀 Daftar Sekarang</button>
    </form>
  </section>
</main>
```

---

## 🛠️ 7. Implementation Tasks

1. Buat file `event-registration.html`.
2. Tambahkan atribut `enctype="multipart/form-data"` pada tag `<form>`.
3. Kelompokkan input ke dalam 3 `<fieldset>` yang dilengkapi judul `<legend>`.
4. Pasang atribut `pattern="[0-9]{10,13}"` pada input nomor HP.
5. Sediakan tombol submit (`<button type="submit">`) dan tombol reset (`<button type="reset">`).

---

## ✅ 8. Quality & Accessibility Checklist

```
[ ] Tag <form> menyertakan enctype="multipart/form-data" untuk pengiriman file.
[ ] Semua input radio dalam 1 pertanyaan berbagi nama atribut (name) yang sama.
[ ] Seluruh label terhubung ke input via atribut for dan id.
[ ] Lolos uji 0 Error di validator.w3.org.
```

---

**[Lanjut: Everything Comes Together →](/bab12/everything-comes-together/)**
