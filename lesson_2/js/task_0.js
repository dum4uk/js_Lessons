"use strict"

// Введення даних

const a =parseFloat(prompt(`Введіть значення першого числа`, `0`))
const b =parseFloat(prompt(`Введіть значення другого числа`, `0`))
const c =parseFloat(prompt(`Введіть значення третього числа`, `0`))

// Обчислення результатів

const s1 = a + 12 + b
const s2 = Math.sqrt((a+ b) /(2 * a))
const s3 = Math.cbrt((a - b) * c)
const s4 = Math.sin(a / -b)

// Виведення результатів

document.write(`<span>S<sub>1</sub> = ${s1.toFixed(1)}</span> <br>
                <span>S<sub>2</sub> = ${s2.toFixed(1)}<span> <br>
                <span>S<sub>3</sub> = ${s3.toFixed(1)}<span> <br>
                <span>S<sub>4</sub> = ${s4.toFixed(1)}<span> <br>`)