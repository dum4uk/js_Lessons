"use strict"


// Позначення

// Елемент введення цін - priceEntryElements

// Введення даних

if (confirm('Почати тестування?')) {
    const priceEntryElements = 10

    // Обчислення результатів

    let priceElement = ""
    for (let i = 1; i <= priceEntryElements; i++) {
        priceElement += `<div class="inp">
                            <label for="prices">Продукт №${i}:</label>
                            <input type="number" name="prices"      placeholder="Введить ціну">
                        </div>`
    }

    // Виведення результатів

    document.write(`<span>${priceElement}</span>`)
}
