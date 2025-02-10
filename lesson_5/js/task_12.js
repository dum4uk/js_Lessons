"use strict"


// Позначення

// Число користувача - userNumber
// Мінімальне число користувача - minUserNumber
// Максимальне число користувача - maxUserNumber


// Введення даних

if (confirm('Почати тестування?')) {
    
    const userNumber = parseInt(prompt("Введить число (1 - 10)","1"))
    const minUserNumber = 1
    const maxUserNumber = 10
    let numberOfSamples = 0
    
    // Обчислення результатів

    let compNumber = ''
    do {
        numberOfSamples ++
        compNumber = minUserNumber + Math.floor(Math.random() * (maxUserNumber - minUserNumber - 1))
        confirm(`Ви це число загадали: ${compNumber}?`)
    } while (compNumber !== userNumber);

    // Виведення результатів

    document.write(`<p><span>Число відгадано за ${numberOfSamples}  спроб</span></p>`)
}
