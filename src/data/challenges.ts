export type ChallengeType = 'CODE_COMPLETION' | 'BUG_FIX' | 'TYPE_PREDICTION' | 'REFACTORING' | 'SCENARIO' | 'MULTIPLE_CHOICE';
export type ChallengeSkill = 'Concept Understanding' | 'Code Completion' | 'Debugging' | 'Reasoning' | 'Problem Solving' | 'Refactoring' | 'Practical Application';
export type ChallengeDifficulty = 'easy' | 'medium' | 'hard';

export interface TestCase {
  input?: any[];
  expectedOutput?: any;
  testCode: string; // The TS code that runs the assertion
  description: string;
}

export interface Challenge {
  id: string;
  chapter: number;
  topic: string;
  type: ChallengeType;
  difficulty: ChallengeDifficulty;
  skill: ChallengeSkill;
  title: string;
  description: string;
  instructions?: string;
  starterCode?: string;
  solution?: string;
  tests?: TestCase[];
  options?: string[]; // for multiple choice / type prediction
  correctAnswer?: string; // for multiple choice
  explanation?: string;
  estimatedTime?: number; // in seconds
  tags?: string[];
}

export const challengeBank: Challenge[] = [
  // BAB 1: Variabel & Tipe Data
  {
    id: "ch1-001",
    chapter: 1,
    topic: "Tipe Data Primitif",
    type: "CODE_COMPLETION",
    difficulty: "easy",
    skill: "Code Completion",
    title: "Deklarasi Variabel",
    description: "Deklarasikan sebuah variabel dengan tipe data yang tepat.",
    instructions: "Lengkapi kode berikut agar variabel `umur` bertipe `number` dan variabel `nama` bertipe `string`.",
    starterCode: `let umur: ___ = 20;\nlet nama: ___ = "Budi";`,
    solution: `let umur: number = 20;\nlet nama: string = "Budi";`,
    tests: [
      {
        testCode: `return typeof umur === 'number' && umur === 20;`,
        description: "variabel 'umur' bertipe number dan bernilai 20"
      },
      {
        testCode: `return typeof nama === 'string' && nama === "Budi";`,
        description: "variabel 'nama' bertipe string dan bernilai 'Budi'"
      }
    ],
    explanation: "Di TypeScript, kita menggunakan ': number' untuk tipe angka dan ': string' untuk tipe teks."
  },
  {
    id: "ch1-002",
    chapter: 1,
    topic: "let vs const",
    type: "BUG_FIX",
    difficulty: "easy",
    skill: "Debugging",
    title: "Mengubah Konstanta",
    description: "Perbaiki kesalahan dalam penggunaan variabel.",
    instructions: "Kode di bawah ini menghasilkan error karena mencoba mengubah nilai `const`. Ubah deklarasi variabel agar nilainya bisa diubah.",
    starterCode: `const skor = 100;\nskor = 150;\nreturn skor;`,
    solution: `let skor = 100;\nskor = 150;\nreturn skor;`,
    tests: [
      {
        testCode: `return skor === 150;`,
        description: "skor harus bernilai 150 dan tidak error"
      }
    ],
    explanation: "Variabel yang dideklarasikan dengan 'const' tidak dapat diubah nilainya (re-assigned). Gunakan 'let' jika nilai variabel akan berubah."
  },
  {
    id: "ch1-003",
    chapter: 1,
    topic: "Type Inference",
    type: "TYPE_PREDICTION",
    difficulty: "medium",
    skill: "Concept Understanding",
    title: "Type Inference pada Variabel",
    description: "Tentukan tipe data yang disimpulkan (inferred) oleh TypeScript.",
    instructions: "Jika kita mendeklarasikan `let isDone = false;`, apa tipe data yang akan disimpulkan oleh TypeScript untuk variabel `isDone`?",
    options: ["string", "boolean", "any", "undefined"],
    correctAnswer: "boolean",
    explanation: "TypeScript secara otomatis menyimpulkan (infer) tipe data berdasarkan nilai awal yang diberikan. Karena 'false' adalah nilai boolean, maka tipe isDone adalah boolean."
  },
  
  // BAB 2: Operator & Percabangan
  {
    id: "ch2-001",
    chapter: 2,
    topic: "Operator Aritmatika",
    type: "CODE_COMPLETION",
    difficulty: "easy",
    skill: "Code Completion",
    title: "Menghitung Luas Persegi Panjang",
    description: "Gunakan operator yang tepat untuk menghitung luas.",
    instructions: "Lengkapi fungsi `hitungLuas` untuk mengembalikan hasil perkalian panjang dan lebar.",
    starterCode: `function hitungLuas(panjang: number, lebar: number): number {\n  return panjang ___ lebar;\n}`,
    solution: `function hitungLuas(panjang: number, lebar: number): number {\n  return panjang * lebar;\n}`,
    tests: [
      {
        testCode: `return hitungLuas(5, 4) === 20;`,
        description: "hitungLuas(5, 4) harus mengembalikan 20"
      },
      {
        testCode: `return hitungLuas(10, 10) === 100;`,
        description: "hitungLuas(10, 10) harus mengembalikan 100"
      }
    ],
    explanation: "Gunakan operator '*' (bintang) untuk perkalian."
  },
  {
    id: "ch2-002",
    chapter: 2,
    topic: "Percabangan",
    type: "BUG_FIX",
    difficulty: "medium",
    skill: "Debugging",
    title: "Perbaiki Percabangan If-Else",
    description: "Ada yang salah dengan logika percabangan di bawah ini.",
    instructions: "Fungsi `cekKelulusan` seharusnya mengembalikan 'Lulus' jika nilai >= 75, dan 'Gagal' jika di bawah itu. Perbaiki logikanya.",
    starterCode: `function cekKelulusan(nilai: number): string {\n  if (nilai > 75) {\n    return "Gagal";\n  } else {\n    return "Lulus";\n  }\n}`,
    solution: `function cekKelulusan(nilai: number): string {\n  if (nilai >= 75) {\n    return "Lulus";\n  } else {\n    return "Gagal";\n  }\n}`,
    tests: [
      {
        testCode: `return cekKelulusan(80) === "Lulus";`,
        description: "cekKelulusan(80) harus mengembalikan 'Lulus'"
      },
      {
        testCode: `return cekKelulusan(75) === "Lulus";`,
        description: "cekKelulusan(75) harus mengembalikan 'Lulus'"
      },
      {
        testCode: `return cekKelulusan(70) === "Gagal";`,
        description: "cekKelulusan(70) harus mengembalikan 'Gagal'"
      }
    ],
    explanation: "Kita harus menggunakan operator '>=' untuk 'lebih dari atau sama dengan', dan menukar urutan return agar sesuai dengan syarat kelulusan."
  },

  // BAB 3: Perulangan
  {
    id: "ch3-001",
    chapter: 3,
    topic: "For Loop",
    type: "CODE_COMPLETION",
    difficulty: "medium",
    skill: "Problem Solving",
    title: "Membuat Deret Angka",
    description: "Gunakan perulangan for untuk memanipulasi array.",
    instructions: "Lengkapi fungsi `buatDeret` agar mengembalikan array yang berisi angka 1 sampai `n`.",
    starterCode: `function buatDeret(n: number): number[] {\n  let hasil: number[] = [];\n  for (let i = 1; i ___ n; i++) {\n    hasil.push(i);\n  }\n  return hasil;\n}`,
    solution: `function buatDeret(n: number): number[] {\n  let hasil: number[] = [];\n  for (let i = 1; i <= n; i++) {\n    hasil.push(i);\n  }\n  return hasil;\n}`,
    tests: [
      {
        testCode: `const r = buatDeret(3); return r.length === 3 && r[0] === 1 && r[2] === 3;`,
        description: "buatDeret(3) mengembalikan [1, 2, 3]"
      }
    ],
    explanation: "Gunakan kondisional 'i <= n' agar perulangan berjalan dari 1 sampai dengan nilai n."
  },

  // BAB 4: Function
  {
    id: "ch4-001",
    chapter: 4,
    topic: "Return Value",
    type: "REFACTORING",
    difficulty: "medium",
    skill: "Refactoring",
    title: "Menambahkan Return Type",
    description: "Tingkatkan type safety pada function.",
    instructions: "Fungsi `sapa` saat ini tidak memiliki tipe pengembalian (return type) yang eksplisit. Tambahkan tipe pengembalian yang tepat.",
    starterCode: `function sapa(nama: string) {\n  return "Halo " + nama;\n}`,
    solution: `function sapa(nama: string): string {\n  return "Halo " + nama;\n}`,
    tests: [
      {
        testCode: `return sapa("Andi") === "Halo Andi";`,
        description: "Fungsi tetap berjalan dengan benar dan memiliki return type string"
      }
    ],
    explanation: "Meskipun TypeScript bisa menyimpulkan return type, mendefinisikannya secara eksplisit (seperti ': string') membuat kode lebih aman dan dokumentasi yang lebih baik."
  },
  {
    id: "ch4-002",
    chapter: 4,
    topic: "Optional Parameter",
    type: "CODE_COMPLETION",
    difficulty: "medium",
    skill: "Code Completion",
    title: "Optional Parameter",
    description: "Buat parameter fungsi menjadi opsional.",
    instructions: "Ubah parameter `salam` menjadi opsional. Jika `salam` tidak diberikan, gunakan 'Halo' sebagai default.",
    starterCode: `function sapa(nama: string, salam: string): string {\n  if (!salam) {\n    salam = "Halo";\n  }\n  return salam + " " + nama;\n}`,
    solution: `function sapa(nama: string, salam?: string): string {\n  if (!salam) {\n    salam = "Halo";\n  }\n  return salam + " " + nama;\n}`,
    tests: [
      {
        testCode: `return sapa("Budi") === "Halo Budi";`,
        description: "sapa('Budi') harus mengembalikan 'Halo Budi'"
      },
      {
        testCode: `return sapa("Budi", "Hai") === "Hai Budi";`,
        description: "sapa('Budi', 'Hai') harus mengembalikan 'Hai Budi'"
      }
    ],
    explanation: "Tambahkan tanda '?' setelah nama parameter untuk membuatnya opsional di TypeScript."
  },
  
  // BAB 5: Array (Example to support testing)
  {
    id: "ch5-001",
    chapter: 5,
    topic: "Array",
    type: "SCENARIO",
    difficulty: "hard",
    skill: "Practical Application",
    title: "Filter Array",
    description: "Filter data pada array.",
    instructions: "Terdapat array angka. Buat fungsi `ambilGenap` yang menerima array angka dan mengembalikan array baru yang hanya berisi angka genap.",
    starterCode: `function ambilGenap(angka: number[]): number[] {\n  // tulis kodenya di sini\n}`,
    solution: `function ambilGenap(angka: number[]): number[] {\n  return angka.filter(n => n % 2 === 0);\n}`,
    tests: [
      {
        testCode: `const r = ambilGenap([1,2,3,4,5,6]); return r.length === 3 && r[0]===2 && r[1]===4 && r[2]===6;`,
        description: "Mampu memfilter angka genap dari array"
      }
    ],
    explanation: "Gunakan method .filter() pada array dengan kondisi n % 2 === 0 untuk mencari angka genap."
  }
];
