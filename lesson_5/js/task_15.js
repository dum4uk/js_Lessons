"use strict"


// Позначення

// Кількість позицій зображень - numberOfImagePositions
// Кількість зображень - numberOfImage
// результат - result
// Виграш - prize


// Введення даних


    
    const numberOfImagePositions = 3
    const numberOfImage = 4
    let result = ''
    let prize
    
    // Обчислення результатів

    for (let i = 0; i < numberOfImagePositions; i++) {
        const randomNum = 1 + Math.floor(Math.random() * (numberOfImage - 1 + 1))
        result += randomNum
        let imageNum
        switch (randomNum) {
            case 1:
                imageNum = 'img/gaming_dice.png'
                break;
            case 2:
                imageNum = 'img/chip.png'
                break;
            case 3:
                imageNum = 'img/seven.png'
                break;
            case 4:
                    imageNum = 'img/bag_of_money.png'
                break;
        }
        document.write(`<img src = "${imageNum}">`)
}
    switch (result) {
        case '111':
            prize = 100
            break;
        case '222':
            prize = 200
            break;
        case '333':
            prize = 500
            break;
        case '444':
            prize = 1000
            break;
        default:
            prize = 0
            break;
    }

// Виведення результатів
    
document.write(`<p>
                    <span>Ваш виграш: ${prize}</span>
                </p>`)

