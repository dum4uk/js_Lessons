"use strict"

// Введення даних

const yearOfBirth = parseInt(prompt(`Введіть рік вашого народження`, `1900`))
const currentYear = 2025  //Поточний рік

// Обчислення результатів

const userAge = currentYear - yearOfBirth

// Виведення результатів

document.write(`<span>Цього року вам виповнилося ${userAge}.</span>`)