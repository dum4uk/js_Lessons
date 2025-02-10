"use strict"


// Позначення

// Мінімальне число користувача - minUserNumber
// Максимальне число користувача - maxUserNumber


// Введення даних

if (confirm('Почати тестування?')) {
    
    const minUserNumber = parseInt(prompt("Введить перше число (1 - 100)","1")) 
    const maxUserNumber = parseInt(prompt("Введить друге число (1 - 100)","1"))
    let sumUserNumber = 0
    
    // Обчислення результатів

    for (let i = minUserNumber; i <= maxUserNumber; i++) {
        if (i % 2 !==0)
            sumUserNumber += i
    }

    // Виведення результатів

    document.write(`<p><span>Сума всіх непарних чисел у діапазоні (${minUserNumber} - ${maxUserNumber}) дорівнює ${sumUserNumber}.</span></p>`)
}
