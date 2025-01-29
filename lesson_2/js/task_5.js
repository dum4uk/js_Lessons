"use strict"

// Введення даних

const timeInSec = parseInt(prompt(`Скільки пройшло секунд?`, `1`))
const secInMin = 60
const secInHour = 3600
const minInHour = 60


// Обчислення результатів

const timeInHour = Math.floor(timeInSec /secInHour) 
// const timeInMin =  Math.floor((timeInSec / secInMin)) - (timeInHour * secInMin)
const timeInMin = Math.floor((timeInSec / secInMin)) % (timeInHour * minInHour)

// Виведення результатів

document.write(`<p><span>Пройшло ${timeInHour}год. та ${timeInMin}хв.</span><p>`)


