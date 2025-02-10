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
    
    // Обчислення результатів

    let numberOfSamples = 3
    let result = ''
    for (let i  = 1; i <= numberOfSamples; i++) {
        const compNumber = minUserNumber + Math.floor(Math.random() * (maxUserNumber - minUserNumber - 1))
        document.write(`<p><span>${i} спроба. Згенероване комп'ютером число: ${compNumber}.</span></p>`)
        if (compNumber === userNumber) {
            confirm(`Загадане число: ${compNumber}. Комп'ютер вгадав загадане число. Число спроб ${i}.`)
            result = `Загадане число: ${compNumber}. Комп'ютер вгадав загадане число. Число спроб: ${i}.`
            break
        }
        else 
            confirm(`Комп'ютер не вгадав загадане число. Число спроб: ${i}.`)
            result = `Комп'ютер не вгадав загадане число. Число спроб: ${i}.`
    }

    // Виведення результатів

    document.write(`<p><span>${result}</span></p>`)
}
