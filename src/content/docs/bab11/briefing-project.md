---
title: "Briefing Project — BAB 11"
description: Briefing lengkap Final Project SIAKAD-Konsol — konteks, ruang lingkup, aturan kerja, dan peta perjalanan implementasi dari awal hingga selesai.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu diharapkan dapat:

- Memahami latar belakang dan konteks masalah yang diselesaikan oleh SIAKAD-Konsol.
- Menjelaskan ruang lingkup fitur yang wajib dibangun.
- Mengenali aturan teknis dan batasan desain yang berlaku selama pengerjaan project.
- Memetakan urutan langkah implementasi dari setup awal hingga pengujian akhir.

---

## Latar Belakang

Sebuah **SMK Rekayasa Perangkat Lunak** ingin memodernisasi pengelolaan data akademiknya. Saat ini, data siswa dan guru masih dicatat secara manual menggunakan kertas dan spreadsheet sederhana yang rawan salah ketik dan sulit diperbarui.

Kepala sekolah meminta timmu untuk membangun **prototipe sistem informasi akademik berbasis terminal** sebagai bukti konsep sebelum dikembangkan menjadi aplikasi web penuh. Prototipe ini harus mampu:

1. Menyimpan dan menampilkan data siswa secara terstruktur.
2. Memperbarui nilai ujian siswa dengan validasi ketat.
3. Mengelola data guru beserta status kehadirannya.
4. Mengambil data tugas dari server eksternal secara asynchronous.

Inilah misi yang akan kamu selesaikan: membangun **SIAKAD-Konsol**.

---

## Analogi Kehidupan Sehari-hari: Briefing Kontraktor Bangunan

Bayangkan kamu adalah kontraktor yang baru saja mendapat proyek:

```text
Klien (Kepala Sekolah)  ──► memberikan Brief (spesifikasi kebutuhan)
        │
        ▼
Kontraktor (Kamu)  ──► membaca brief, menyusun RAB, memilih material
        │
        ▼
Tukang & Arsitek (Kode TypeScript)  ──► membangun sesuai spesifikasi
        │
        ▼
Gedung Jadi (Aplikasi SIAKAD-Konsol yang berjalan)
```

Sebelum memukul palu pertama, kontraktor yang baik selalu membaca brief dengan cermat. Halaman ini adalah brief resmimu.

---

## Nama Project

| Properti   | Detail                                            |
| ---------- | ------------------------------------------------- |
| Nama       | SIAKAD-Konsol                                     |
| Kepanjangan | Sistem Informasi Akademik — berbasis Konsol Terminal |
| Platform   | Node.js terminal (dijalankan dengan TSX)           |
| Bahasa     | TypeScript                                        |
| Jenis      | Aplikasi konsol interaktif (menu berbasis angka)  |

---

## Ruang Lingkup Fitur

### Fitur Wajib (Minimum Viable Product)

SIAKAD-Konsol wajib memiliki lima fitur utama yang dapat diakses dari menu:

```text
=== MENU UTAMA SIAKAD-Konsol ===
[1] Tampilkan Laporan Siswa
[2] Tambah Siswa Baru
[3] Update Nilai Ujian Siswa
[4] Tampilkan Daftar Guru
[5] Ambil Tugas Online (Fetch API Async)
[0] Keluar Aplikasi
```

**Fitur 1 — Tampilkan Laporan Siswa**

Menampilkan seluruh data siswa yang tersimpan dalam format tabel teks rapi. Setiap baris berisi: ID, nama siswa, kelas, NIS, dan nilai rata-rata.

**Fitur 2 — Tambah Siswa Baru**

Menerima input teks dari terminal: nama, kelas, dan NIS. Sistem membuat objek `SiswaClass` baru lalu menyimpannya ke `AcademicRepository`. Validasi tipe data dilakukan secara otomatis oleh TypeScript.

**Fitur 3 — Update Nilai Ujian Siswa**

Meminta input ID siswa yang ingin diperbarui nilainya, lalu meminta input nilai baru (0–100). Service layer memvalidasi bahwa nilai berada dalam rentang yang sah sebelum menyimpannya.

**Fitur 4 — Tampilkan Daftar Guru**

Menampilkan seluruh data guru yang telah di-seed ke repositori saat program pertama kali dijalankan. Data mencakup: ID, nama guru, mata pelajaran, dan status kehadiran (menggunakan Enum).

**Fitur 5 — Ambil Tugas Online**

Melakukan HTTP GET request ke API publik `https://jsonplaceholder.typicode.com/todos` secara asynchronous menggunakan `fetch`. Menampilkan 5 tugas pertama dari hasil response.

---

## Batasan Teknis

Berikut adalah aturan yang wajib dipatuhi selama pengerjaan project:

| Nomor | Aturan                                                                 |
| ----- | ---------------------------------------------------------------------- |
| 1     | Seluruh kode ditulis dalam **TypeScript** — tidak boleh menggunakan JavaScript murni. |
| 2     | Tidak boleh menggunakan database eksternal (MySQL, MongoDB, dll). Data disimpan di **array dalam memori RAM**. |
| 3     | Tidak boleh menggunakan library pihak ketiga selain TypeScript dan TSX. |
| 4     | Input terminal dibaca menggunakan modul `readline` bawaan Node.js — **tidak boleh menggunakan library prompt pihak ketiga**. |
| 5     | Setiap lapisan (**Presentation, Service, Repository**) harus dipisah ke file berbeda sesuai struktur folder yang ditentukan. |
| 6     | Properti `id` pada setiap model wajib menggunakan `readonly`. |
| 7     | Nilai siswa (0–100) wajib divalidasi di dalam **Service Layer**, bukan di `main.ts`. |

---

## Konsep TypeScript yang Diintegrasikan

Project ini adalah bukti bahwa kamu menguasai seluruh materi dari BAB 1 hingga BAB 10:

| Konsep                   | Bab Asal | Digunakan di Project                              |
| ------------------------ | -------- | ------------------------------------------------- |
| Variabel & Tipe Data     | BAB 1    | Properti `nama: string`, `nilai: number`          |
| Percabangan              | BAB 2    | Validasi menu pilihan `switch-case`               |
| Perulangan               | BAB 3    | Loop menu `while`, iterasi data `for...of`        |
| Function                 | BAB 4    | Method di setiap class layer                      |
| Array                    | BAB 5    | Penyimpanan data siswa di `AcademicRepository`    |
| Object                   | BAB 6    | Struktur data setiap entitas (Siswa, Guru)        |
| Interface & Type Alias   | BAB 7    | Kontrak `IRepository<T>` dan `IService`           |
| OOP (Class)              | BAB 8    | `SiswaClass`, `GuruClass`, `AcademicRepository`   |
| Generic & Utility Types  | BAB 9    | `AcademicRepository<T>` yang reusable             |
| Async & Module           | BAB 10   | `fetch` tugas online, `import/export` antar file  |

---

## Arsitektur yang Digunakan

Project menggunakan pola **Layered Architecture** (Arsitektur Berlapis) yang membagi kode menjadi tiga lapisan terpisah:

```text
┌─────────────────────────────────────────┐
│  PRESENTATION LAYER                     │
│  main.ts — Menu & Input terminal        │
│  (Hanya boleh memanggil Service Layer)  │
├─────────────────────────────────────────┤
│  SERVICE LAYER                          │
│  siswa-service.ts — Logika bisnis       │
│  (Validasi, kalkulasi, async fetch)     │
├─────────────────────────────────────────┤
│  REPOSITORY LAYER                       │
│  academic-repository.ts — Data storage │
│  (CRUD ke array RAM, Generic)           │
└─────────────────────────────────────────┘
```

---

## Struktur File yang Akan Dibuat

Selama pengerjaan bab ini, kamu akan membuat file-file berikut secara bertahap:

```text
siakad-final/
└── src/
    ├── models/
    │   ├── siswa-model.ts       ← Class & tipe data Siswa
    │   ├── guru-model.ts        ← Class & tipe data Guru + Enum
    │   └── index.ts             ← Re-export (satu pintu masuk)
    ├── interfaces/
    │   ├── repository-interface.ts  ← Kontrak Generic IRepository<T>
    │   └── service-interface.ts     ← Kontrak ISiswaService
    ├── repositories/
    │   └── academic-repository.ts   ← Database array Generic
    ├── services/
    │   └── siswa-service.ts         ← Logika bisnis & async fetch
    ├── helpers/
    │   └── display-helper.ts        ← Fungsi bantu cetak & format
    └── main.ts                       ← Entry point (menu utama)
```

---

## Peta Perjalanan Implementasi

Pengerjaan dilakukan secara berurutan. Setiap halaman berikutnya bergantung pada hasil halaman sebelumnya:

```text
[1] Setup Awal          ── Inisialisasi project & tsconfig
        │
        ▼
[2] Implementasi Model  ── Buat class SiswaClass & GuruClass
        │
        ▼
[3] Implementasi Interface ── Buat kontrak IRepository & IService
        │
        ▼
[4] Implementasi Class (Repository) ── Bangun database array Generic
        │
        ▼
[5] Implementasi Service ── Logika bisnis & fetch async
        │
        ▼
[6] Implementasi Helper  ── Fungsi bantu tampilan
        │
        ▼
[7] Implementasi main.ts ── Rakit menu utama & hubungkan semua layer
        │
        ▼
[8] Testing & Debugging  ── Uji setiap fitur menu
        │
        ▼
[9] Best Practice Review ── Audit kualitas kode & dokumentasi
```

---

## Kriteria Keberhasilan

Project dinyatakan **selesai** dan berhasil jika memenuhi semua kriteria berikut:

- [ ] Semua 5 fitur menu berjalan tanpa error saat dijalankan dengan `tsx src/main.ts`.
- [ ] Data siswa berhasil ditambah, ditampilkan, dan diperbarui nilainya.
- [ ] Data guru tampil dengan status kehadiran dari Enum.
- [ ] Fetch API berhasil mengambil dan menampilkan 5 tugas dari internet.
- [ ] Kode terorganisir sesuai struktur folder yang ditentukan.
- [ ] Tidak ada penggunaan tipe `any` di seluruh kode.
- [ ] Properti `id` menggunakan `readonly` di setiap model.
- [ ] Validasi nilai (0–100) berada di Service Layer.
- [ ] Program kembali ke menu utama setelah setiap aksi tanpa crash.

---

## Tips Sebelum Mulai

:::tip[Baca Dulu, Baru Kode]
Luangkan 10 menit untuk membaca seluruh halaman dalam bab ini sebelum mulai mengetik kode. Memahami gambaran besar terlebih dahulu akan menghemat banyak waktu debug di tengah jalan.
:::

:::tip[Ikuti Urutan Halaman]
Jangan melompati halaman. Setiap file yang dibuat di halaman sebelumnya akan di-import oleh halaman berikutnya. Melompati berarti kamu akan mendapat error import yang membingungkan.
:::

:::tip[Jalankan Setelah Setiap Langkah]
Setelah membuat setiap file baru, jalankan `tsx src/main.ts` untuk memastikan tidak ada error sebelum melanjutkan ke langkah berikutnya.
:::

---

## Ringkasan

- SIAKAD-Konsol adalah prototipe sistem informasi akademik berbasis terminal untuk SMK RPL.
- Project memiliki 5 fitur utama yang diakses dari menu interaktif.
- Seluruh kode dipisah ke dalam tiga lapisan: Presentation, Service, dan Repository.
- Pengerjaan dilakukan secara berurutan sesuai peta implementasi.
- Project ini adalah bukti nyata penguasaan seluruh konsep TypeScript dari BAB 1 hingga BAB 10.