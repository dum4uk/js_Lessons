"use strict"


// Позначення

// Номер місяця - numMonth

// Введення даних

const numMonth = parseInt(prompt(`Введить номер місяця (від 1 до 12)`, '1'))


// Обчислення результатів

let result

switch (numMonth) {
    case 1:
    case 2:
    case 12:
        result = `Зима.`
        break;
    case 3:
    case 4:
    case 5:
        result = `Весна.`
        break;
    case 6:
    case 7:
    case 8:
        result = `Літо.`
        break;
    case 9:
    case 10:
    case 11:
        result = `Осінь.`
        break;
    default:
        result = `Нажаль, ви ввели некоректний номер тиждня.`
        break;
}

// Виведення результатів

document.write(`<span>${result}</span>`)
