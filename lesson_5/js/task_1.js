"use strict"


// Позначення

// Парні числа - evenNum
// Непарні числа - oddNum
// Кількість випадкових чисел - 100
// Діапазон випадкових чисел - від 1 до 1000
// Випадкове число - randomNum



// Введення даних

const randomNumAmount = 100
const rangeRandomNumStart = 1
const rangeRandomNumEnd = 1000

let evenNum = 0
let oddNum = 0
let randomNum

// Обчислення результатів

if (confirm('Почати тестування?')) {

    for (let i = 0; i < randomNumAmount; i++) {
        randomNum = rangeRandomNumStart + Math.floor(Math.random() * (rangeRandomNumEnd - rangeRandomNumStart + 1))
        if (randomNum % 2 === 0 ) 
            ++evenNum
        else ++oddNum
    }
}

// Виведення результатів

document.write(`
    <p><span>Парних чисел: ${evenNum}.</span></p>
    <p><span>Непарних чисел: ${oddNum}.</span></p>
    `)
