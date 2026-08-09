---
title: "break & continue"
description: Mengendalikan alur perulangan dengan break untuk berhenti lebih awal dan continue untuk melewati satu putaran.
---

## Tujuan Pembelajaran

Setelah membaca halaman ini, kamu dapat:

- Menggunakan `break` untuk menghentikan loop sebelum kondisi selesai.
- Menggunakan `continue` untuk melewati satu putaran tanpa menghentikan loop.
- Membedakan kapan harus menggunakan `break` dan kapan menggunakan `continue`.

---

## Pendahuluan

Sejauh ini loop yang kamu buat berjalan dari awal hingga akhir tanpa gangguan. Namun dalam situasi nyata, kamu sering butuh:

- **Berhenti di tengah jalan** ketika data yang dicari sudah ditemukan — gunakan `break`.
- **Melewati satu data tertentu** tanpa menghentikan loop — gunakan `continue`.

---

## Analogi Kehidupan Sehari-hari

### break — Bel Ujian Berbunyi

Kamu sedang mengerjakan soal ujian satu per satu. Ketika bel berbunyi, kamu langsung berhenti meskipun soal belum habis.

```text
Untuk setiap soal:
  Kerjakan soal
  Jika bel berbunyi → berhenti seketika (break)
```

### continue — Absensi Siswa

Guru memanggil nomor absen satu per satu. Jika seorang siswa tidak hadir, guru langsung memanggil nomor berikutnya — tidak berhenti, hanya melewati.

```text
Untuk setiap nomor absen 1-36:
  Jika siswa tidak hadir → lewati, panggil berikutnya (continue)
  Jika siswa hadir → panggil nama
```

---

## break — Berhenti Lebih Awal

`break` langsung menghentikan loop — tidak menunggu kondisi loop berakhir secara normal.

```ts
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i)
}
```

Loop seharusnya berjalan 10 kali, tetapi `break` pada `i === 5` menghentikannya di angka 4.

### Visual Illustration

```text
i=1 → cetak → i=2 → cetak → i=3 → cetak → i=4 → cetak
  │
i=5 → break → KELUAR DARI LOOP
  │
Kode setelah loop berjalan normal
```

### Mari Mencoba

Buat `src/bab3/break.ts`:

```ts
const namaSiswa: string[] = ["Andi", "Budi", "Citra", "Dian", "Eko", "Fira"]
const targetCari: string = "Dian"

console.log(`Mencari siswa: ${targetCari}`)

for (const nama of namaSiswa) {
  if (nama === targetCari) {
    console.log(`Ditemukan: ${nama}`)
    break
  }
  console.log(`Bukan ${nama}, lanjut...`)
}

console.log("Pencarian selesai.")
```

Jalankan:

```text
tsx src/bab3/break.ts
```

### Output

```text
Mencari siswa: Dian
Bukan Andi, lanjut...
Bukan Budi, lanjut...
Bukan Citra, lanjut...
Ditemukan: Dian
Pencarian selesai.
```

Loop berhenti setelah Dian ditemukan — Eko dan Fira tidak diperiksa sama sekali.

### break di while

`break` sangat berguna di dalam `while (true)` untuk membuat loop berhenti berdasarkan logika internal:

```ts
let skor: number = 0

while (true) {
  skor += 10
  console.log(`Skor: ${skor}`)
  if (skor >= 50) {
    break
  }
}

console.log("Game selesai!")
```

---

## continue — Lewati Satu Putaran

`continue` berbeda dari `break`. Ia hanya melewati satu putaran dan langsung melanjutkan ke putaran berikutnya — loop tetap berjalan.

```ts
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue // lewati angka 5
  }
  console.log(i)
}
```

Angka 5 tidak dicetak, tetapi loop tetap berjalan sampai angka 10.

### Visual Illustration

```text
i=1 → cetak
i=2 → cetak
i=3 → cetak
i=4 → cetak
i=5 → continue → LANGSUNG KE i=6 (lewati cetak)
i=6 → cetak
...
i=10 → cetak
SELESAI
```

### Mari Mencoba

Buat `src/bab3/continue.ts`:

```ts
const nilaiSiswa: number[] = [80, 55, 90, 45, 75, 30, 88]

console.log("=== Siswa yang Lulus (nilai >= 75) ===")
for (const nilai of nilaiSiswa) {
  if (nilai < 75) {
    continue // lewati siswa yang belum lulus
  }
  console.log(`Lulus dengan nilai: ${nilai}`)
}

console.log("\n=== Angka Kecuali Kelipatan 3 ===")
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    continue
  }
  console.log(i)
}
```

Jalankan:

```text
tsx src/bab3/continue.ts
```

### Output

```text
=== Siswa yang Lulus (nilai >= 75) ===
Lulus dengan nilai: 80
Lulus dengan nilai: 90
Lulus dengan nilai: 75
Lulus dengan nilai: 88

=== Angka Kecuali Kelipatan 3 ===
1
2
4
5
7
8
10
11
13
14
```

---

## break vs continue

| | `break` | `continue` |
|---|---|---|
| Efek | Keluar dari loop sepenuhnya | Lewati satu putaran saja |
| Putaran setelahnya | Tidak ada | Tetap berjalan |
| Loop berlanjut? | Tidak | Ya |
| Analogi | Bel ujian berbunyi | Siswa absen, lanjut absensi |

---

## Kesalahan yang Sering Terjadi

### break di luar loop

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i)
}
break // Error! break hanya valid di dalam loop atau switch
```

`break` dan `continue` hanya bisa digunakan **di dalam** loop atau `switch`.

### Kode mati setelah continue

```ts
for (let i = 1; i <= 5; i++) {
  console.log(i)
  continue
  console.log("Ini tidak akan pernah tercetak") // kode mati
}
```

Kode setelah `continue` dalam blok yang sama tidak akan pernah dijalankan.

---

## Tips

:::tip[break untuk Pencarian]
`break` sangat berguna saat mencari elemen dalam array. Begitu ditemukan, hentikan loop agar tidak membuang waktu memproses sisa data yang tidak dibutuhkan.
:::

:::tip[continue vs if-else]
`continue` sering bisa diganti dengan logika `if-else`. Gunakan `continue` saat ingin menghindari kode bersarang yang terlalu dalam agar kode lebih mudah dibaca.
:::

---

## Latihan

1. Buat array 10 angka acak. Hentikan loop ketika menemukan angka yang lebih dari 50.
2. Buat loop 1–20. Tampilkan hanya angka yang **bukan** kelipatan 2 atau 5.
3. Buat array nama siswa. Tampilkan semua kecuali nama yang panjangnya kurang dari 4 karakter.

---

## Ringkasan

- `break` langsung keluar dari loop tanpa menyelesaikan putaran tersisa.
- `continue` melewati sisa kode dalam putaran saat ini dan melanjutkan ke putaran berikutnya.
- Keduanya hanya valid di dalam loop atau `switch`.
- Gunakan `break` untuk pencarian dan `continue` untuk filter data.

:::tip[Langkah Selanjutnya]
Lanjut ke **Nested Loop** untuk belajar loop di dalam loop.
:::