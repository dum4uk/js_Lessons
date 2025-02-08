"use strict"


// Позначення

// Число рядків - rowNum
// Число стовпців - columnNum

// Введення даних

if (confirm('Почати тестування?')) {
    const rowNum = 3
    const columnNum = 7

// Обчислення результатів
    let rowResult = ""
    let columnResult = ""
    for (let i = 1; i <= rowNum; i++) {
        for (let k = 1; k <= columnNum; k++) {
            columnResult += `<td>Колонка №${k}</td>`
        }
        rowResult += `<tr>${columnResult}</tr>`
        columnResult = ""
    }


// Виведення результатів

    document.write(`<table>
                        <caption>Таблиця (3 на 7)</caption>
                        <tbody>
                                ${rowResult}
                        </tbody>
                    </table>`)
}

