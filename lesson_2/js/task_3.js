"use strict"

// Введення даних

const priceOfGoods = parseFloat(prompt(`Вартість товару`, `1`))
const quantityOfGoods = parseFloat(prompt(`Кількість товару`, `1`))
const valueAddedTax = 5

// Обчислення результатів

const totalPrice = priceOfGoods * quantityOfGoods
const totalVat = totalPrice * (valueAddedTax / 100)

// Виведення результатів

document.write(`<p><span>Загальна вартість товару ${totalPrice}грн.</span><p>
                <p><span>ПДВ від загальної вартості ${totalVat}грн.</span><p>`)
