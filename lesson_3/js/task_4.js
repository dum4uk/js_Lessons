"use strict"


// Позначення

// Вік користувача - userAge

// Введення даних

const userAge = parseInt(prompt(`Введіть ваш вік`,`1`))

// Обчислення результатів
// let result
// switch (true) {
//     case userAge < 7:
//         result = `дитинa у садочку`
//         break;
//     case userAge < 18:
//         result = `школяр`
//         break;
//     case userAge < 23:
//         result = `студент`
//         break;
//     case userAge < 65:
//         result = `працівник`
//         break;
//     default:
//         result = `пенсіонер`
//         break;
// }

let result

if (userAge < 7)
    result = `дитинa у садочку`
else if (userAge < 18) 
    result = `школяр`
else if (userAge < 23) 
    result = `студент`
else if (userAge < 65) 
    result = `працівник`
else result = `пенсіонер`


// Виведення результатів

document.write(`<span>Вітаю ви є ${result}.</span>`)
