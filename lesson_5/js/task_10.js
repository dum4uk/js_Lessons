"use strict"


// Позначення

// Кількість абзаців - numberOfParagraphs


// Введення даних

if (confirm('Почати тестування?')) {
    
    const numberOfParagraphs = parseInt(prompt(`Введить кількість абзаців`,`1`))
    
    // Обчислення результатів

    for (let paragraph = 1; paragraph <= numberOfParagraphs; paragraph++) {
        document.write(`<h3 style="font-size: 28px; font-weight: 700; color: black;">Заголовок ${paragraph}</h3>`)
        for (let content = 1; content <= paragraph; content++) {
            document.write(`<p><span>Розділ ${paragraph}, параграф ${content}</span></p>`)
        }
    }

    // Виведення результатів
}
