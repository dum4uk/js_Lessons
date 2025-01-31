"use strict"


// Позначення

// Ціна товару - priceOfGoods          
// Кількість грошей - amountOfMoney    



// Введення даних

const priceOfGoods = parseFloat(prompt(`Ціна товару`,`1.0`))
const amountOfMoney = parseFloat(prompt(`Кількість грошей`,`1.0`))

// Обчислення результатів
let result
if (priceOfGoods > amountOfMoney)
    result = `У вас не вистачає грошей`
else if ((amountOfMoney - priceOfGoods) <= 3.99)
    result = `Дякуємо за покупку!`
else result = `Дякуємо за покупку! Бажаєте придбати лотерейний квиток за 4 грн.`

// Виведення результатів

document.write(`<span>${result}</span>`)
