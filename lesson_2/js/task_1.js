"use strict"

// Введення даних

const a =parseFloat(prompt(`Введіть значення першого числа`, `0`))
const b =parseFloat(prompt(`Введіть значення другого числа`, `0`))

// Обчислення результатів

const sumResult = a + b
const multiplicationRes = a * b
const divisionRes = a / b

// Виведення результатів

document.write(`<p><span>Перше число = ${a}.</span></p>
                <p><span>Друге число = ${b}.</span></p>
                <table>
                    <thead>
                        <tr>
                            <th>Сума</th>
                            <th>Добуток</th>
                            <th>Частка</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>${sumResult.toFixed(1)}</td>
                        <td>${multiplicationRes.toFixed(1)}</td>
                        <td>${divisionRes.toFixed(1)}</td>
                    <tbody>
                </table>`)
