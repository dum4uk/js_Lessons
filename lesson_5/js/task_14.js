"use strict"


// Позначення

// Мінімальне число користувача - minUserNumber
// Максимальне число користувача - maxUserNumber


// Введення даних

if (confirm('Почати тестування?')) {
    
    const minUserNumber = parseInt(prompt("Введить перше число (1 - 100)","1")) 
    const maxUserNumber = parseInt(prompt("Введить друге число (1 - 100)","1"))
    let sum = 0
    let counter = 0
    
    // Обчислення результатів

    for (let i = minUserNumber; i <= maxUserNumber; i++) {
        if (i % 2 > 0) {
            document.write(`<p><span>Непарні числа: ${i}</span></p>`)
            sum += i
            counter++
        }
        if (counter === 5)
            break
    }

    // Виведення результатів

    document.write(`<p><span>Сума перших 5 непарних чисел у діапазоні (${minUserNumber} - ${maxUserNumber}) дорівнює ${sum}.</span></p>`)
}
