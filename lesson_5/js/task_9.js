"use strict"


// Позначення

// Число таблиць - tableNum
// Число рядків - rowNum
// Число стовпців - columnNum

// Введення даних

if (confirm('Почати тестування?')) {
    const tableNum = 3
    const rowNum = 3
    const columnNum = 7

// Обчислення результатів
    let tdNum = 1
    for (let i = 0; i < tableNum; i++) {
        document.write(`<table >`)
            for (let rowNum = 0; rowNum < 3; rowNum++) {
                document.write(`<tr>`)
                for (let colNum = 0; colNum < 3; colNum++) {
                    document.write(`<td>${tdNum}</td>`)
                    ++tdNum
                }
        document.write(`</tr>`)
            }
    document.write(`</table>`)
        
    }


// Виведення результатів

}

