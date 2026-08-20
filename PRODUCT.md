# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Siswa SMK Rekayasa Perangkat Lunak (RPL) kelas X dan XI, serta developer pemula yang sedang mempelajari dasar pemrograman dan ingin menguasai TypeScript modern hingga siap membangun aplikasi nyata.

## Product Purpose
Menyediakan media panduan pembelajaran TypeScript modern berbahasa Indonesia yang komprehensif, interaktif, mudah dipahami dari nol, dan berorientasi praktik untuk membangun aplikasi di dunia nyata.

## Positioning
Panduan berjenjang 14 Bab (Bab 0 sampai Bab 13) yang memadukan teori fundamental (computational thinking, tipe data, OOP, generic, async) dengan studi kasus nyata, best practice industri, dan bahasa pengantar Indonesia yang ramah pemula SMK.

## Operating Context
Dibaca melalui web browser (desktop maupun mobile) saat belajar mandiri di rumah atau praktik lab komputer sekolah; pembaca mengoperasikan VS Code, terminal, Node.js, dan compiler TypeScript di sisi mereka sambil mengikuti materi dan contoh kode.

## Capabilities and Constraints
- Fitur aktif: 14 modul bab materi lengkap, navigasi sidebar terstruktur & table of contents, full-text search (Pagefind), code block with copy & syntax highlighting, dark/light/auto theme.
- Fitur masa depan: TypeScript Playground interaktif, Quiz/Latihan coding, video materi, dan progress tracker belajar.
- Batasan teknis: Static site berbasis Astro Starlight dengan fokus performa cepat, aksesibilitas tinggi, dan kemudahan navigasi dokumentasi.

## Brand Commitments
- Nama: TypeScript Guidebook
- Inisiator/Kreator: SmartOne Dev
- Bahasa: Bahasa Indonesia yang santun, komunikatif, dan terstruktur.

## Evidence on Hand
- Dokumentasi materi komprehensif 14 bab (`src/content/docs/bab0` s/d `bab13`)
- Custom UI components (`src/components/Hero.astro`, `SeoHead.astro`, `src/styles/custom.css`)
- Repository & demo publik: `https://typescript-guidebook.vercel.app`

## Product Principles
1. Ramah Pemula & Terstruktur: Konsep rumit diurai bertahap dari analogi sederhana hingga contoh kode konkret.
2. Berorientasi Praktik Industri: Setiap bab mengaitkan teori dengan studi kasus nyata dan standar kerja profesional.
3. Keterbacaan & Navigasi Cepat: Tipografi jernih, hierarki visual kuat, dan aksesibilitas tema gelap/terang yang optimal.

## Accessibility & Inclusion
- Responsif penuh untuk perangkat mobile, tablet, hingga layar lab sekolah.
- Rasio kontras teks dan warna yang nyaman untuk membaca jangka panjang.
