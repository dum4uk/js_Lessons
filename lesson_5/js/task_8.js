"use strict"


// Позначення

// Номер клітинки - tdNum

// Введення даних

if (confirm('Почати тестування?')) {

    // Обчислення результатів
    let tdNum = 1
    document.write(`<table>`)
    for (let rowNum = 0; rowNum < 3; rowNum++) {
        document.write(`<tr>`)
        for (let colNum = 0; colNum < 3; colNum++) {
            document.write(`<td>${tdNum}</td>`)
            ++tdNum
        }
        document.write(`</tr>`)
    }
    document.write(`</table>`)
// Виведення результатів
    
}

