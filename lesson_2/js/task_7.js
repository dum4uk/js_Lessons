"use strick"

// Введення даних

const minMonthNum = 1
const maxMonthNum = 12
const minDayNum = 0
const maxDayNum = 6


// Обчислення результатів

const randomMonth = minMonthNum + Math.floor(Math.random() * (maxMonthNum - minMonthNum + 1))
const randomDay = minDayNum + Math.floor(Math.random() * (maxDayNum - minDayNum + 1))
const sumRandomNum = randomMonth + randomDay

// Виведення результатів

document.write(`<p><span>Випадковий номер місяця: ${randomMonth}</span></p>
                <p><span>Випадковий номер дня: ${randomDay}</span></p>
                <p><span>Сума випадкових номерів: ${sumRandomNum}</span></p>`)