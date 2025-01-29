"use strict"

// Введення даних

const lengthInCm = parseFloat(prompt(`Довжина у сантиметрах`, `1`))

// Обчислення результатів

const lengthInM = lengthInCm * Math.pow(10,-2)
const lengthInKm = lengthInCm * Math.pow(10,-3)

// Виведення результатів

document.write(`<p><span>Довжина у метрах: ${lengthInM}м.</span><p>
                <p><span>Довжина у клометрах: ${lengthInKm}км.</span><p>`)
