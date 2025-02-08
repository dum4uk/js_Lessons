"use strict"


// Позначення

// Перший місяць - firstMonthNum          
// Останій місяць - lastMonthNum    



// Введення даних

const firstMonthNum = 3
const lastMonthNum = 8
let monthNum

// Обчислення результатів

if (confirm('Почати тестування?')) {
    for (let i = firstMonthNum; i <= lastMonthNum; i++) {
        monthNum = i
        document.write(`<p><span>${monthNum}</span></p>`)
    }
}
// Виведення результатів


