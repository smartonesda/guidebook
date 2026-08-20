---
title: "3.1 Studi Kasus — Menyelesaikan Specificity War"
description: "Studi kasus mendiagnosis perang spesifisitas pada komponen tombol dan membersihkan penggunaan !important yang berlebihan."
---

Perang spesifisitas (*specificity war*) terjadi ketika developer menaikkan bobot selector secara berlebihan demi menimpa style sebelumnya.

Di modul ini, kita membedah bagaimana merefaktor CSS yang dipenuhi `!important` menjadi arsitektur layer yang bersih menggunakan `@layer` dan class berspesifisitas datar.
