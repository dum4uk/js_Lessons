"use strict"


// Позначення

// Перше число користувача - firstUserNum
// Друге число користувача - secondUserNum
// min число - minNum
// max число - maxNum
// Рандомне число -  randomNum

// Введення даних

const firstUserNum = parseInt(prompt(`Перша спроба. Введить число від 1 до 5`,`1`))
const secondtUserNum = parseInt(prompt(`Друга спроба. Введить число від 1 до 5`,`1`))
const minNum = 1
const maxNum = 5
const randomNum = minNum + Math.floor(Math.random() * (maxNum - minNum + 1))

// Обчислення результатів
let result
if (firstUserNum === randomNum)
    result = `Вітаю!!! Ви вгадали з першої спроби.`
else if (secondtUserNum === randomNum)
    result = `Вітаю!!! Ви вгадали з другої спроби.`
else result = `Нажаль ви не вгадали.`

// Виведення результатів

document.write(`<span>${result}<br>
                Випадкове число: ${randomNum}</span>`)
