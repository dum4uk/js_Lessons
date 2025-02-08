"use strict"


// Позначення

// Мінімальне рандомне число - minRandomNumber
// Максимальне рандомне число - maxRandomNumber
// Кількість випадкових чисел - numberOfNumbers

// Введення даних

if (confirm('Почати тестування?')) {
    const minRandomNumber = 1
    const maxRandomNumber = 100
    const numberOfNumbers = parseInt(prompt(`Введить кількість випадкових чисел`, '1'))

// Обчислення результатів
    let result = ''
    for (let i = 0; i < numberOfNumbers; i++) {
        const randomNumber = minRandomNumber + Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1));
        result += `<li><span>${randomNumber}</span></li>`
    }

// Виведення результатів
    document.write(`<ol>
                        ${result}
                    </ol>`)
}


