"use strict"


// Позначення

// Номер дня тижня - numWeekDay

// Введення даних

const numWeekDay = parseInt(prompt(`Введить номер дня тижня (від 1 до 7)`, '1'))


// Обчислення результатів

let result

switch (numWeekDay) {
    case 1:
        result = `Понеділок.`
        break;
    case 2:
        result = `Вівторок.`
        break;
    case 3:
        result = `Середа.`
        break;
    case 4:
        result = `Четвер.`
        break;
    case 5:
        result = `П'ятниця.`
        break;
    case 6:
        result = `Субота.`
        break;
    case 7:
        result = `Неділя.`
        break;
    default:
        result = `Нажаль, ви ввели некоректний номер тиждня.`
        break;
}

// Виведення результатів

document.write(`<span>${result}</span>`)
