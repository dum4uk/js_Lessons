"use strict"


// Позначення

// Число стовпців - columnNum
// Число рядків - rowNum

// Введення даних

if (confirm('Почати тестування?')) {
    const columnNum = 7
    const rowNum = 1

// Обчислення результатів
    let result = ""
    for (let i = 1; i <= columnNum; i++) {
        result += `<td>Колонка №${i}</td>`;
        
    }


// Виведення результатів

    document.write(`<table>
                        <caption>Таблиця (1 на 7)</caption>
                        <tbody>
                            <tr>
                                ${result}
                            </tr>
                        </tbody>
                    </table>`)
}