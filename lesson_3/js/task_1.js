"use strict"


// Позначення

// Ім'я першої дитини - firstChildName
// Ім'я другої дитини - secondChildName
// Кількість цукерок першої дитини - firstChildCandy
// Кількість цукерок другої дитини - secondChildCandy


// Введення даних

const firstChildName = prompt(`Ім'я першої дитини`)
const secondChildName = prompt(`Ім'я другої дитини`)
const firstChildCandy =parseInt(prompt(`Кількість цукерок першої дитини`, `1`))
const secondChildCandy =parseInt(prompt(`Кількість цукерок другої дитини`, `1`))

// Обчислення результатів
let winner
if (firstChildCandy > secondChildCandy)
    winner = `У ${firstChildName} кількість цукерок є більшою.`
else if (firstChildCandy < secondChildCandy)
    winner = `У ${secondChildName} кількість цукерок є більшою.`
else winner = `Кількість цукерок у дітей однакова.`




// Виведення результатів

document.write(`<span>${winner}</span>`)
