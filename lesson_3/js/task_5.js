"use strict"


// Позначення

// Назва категорії водія - driverСategory

// Введення даних

const driverСategory = prompt(`Введить назву категорії водія (А, В, С).`,)


// Обчислення результатів

let result

// if (driverСategory === `А`)
//     result = `Вітаю!!! Ви  може керувати мотоциклом.`
// else if (driverСategory === `В`)
//     result = `Вітаю!!! Ви  може керувати легковим автомобілем.`
// else if (driverСategory === `С`)
//     result = `Вітаю!!! Ви  може керувати вантажним автомобілем.`
// else result = `Нажаль, такої категорії не існує.`

switch (driverСategory.toUpperCase()) {
    case `A`:
        result = `Вітаю!!! Ви  може керувати мотоциклом.`
        break;
    case `B`:
        result = `Вітаю!!! Ви  може керувати легковим автомобілем.`
        break;
    case `C`:
        result = `Вітаю!!! Ви  може керувати вантажним автомобілем.`
        break;
    default:
        result = `Нажаль, такої категорії не існує.`
        break;
}

// Виведення результатів

document.write(`<span>${result}</span>`)
