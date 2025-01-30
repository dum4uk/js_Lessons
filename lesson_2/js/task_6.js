"use strick"

// Введення даних

const quantityOfGoods1 = parseFloat(prompt('Хліб кількість','1'))
const productPrice1 = parseFloat(prompt('Хліб ціна','1'))
const quantityOfGoods2 = parseFloat(prompt('Молоко кількість','1'))
const productPrice2 = parseFloat(prompt('Молоко ціна','1'))
const quantityOfGoods3 = parseFloat(prompt('Сіль кількість','1'))
const productPrice3 = parseFloat(prompt('Сіль ціна', '1'))

// Обчислення результатів

const totalProductPrice1 = quantityOfGoods1 * productPrice1
const totalProductPrice2 = quantityOfGoods2 * productPrice2
const totalProductPrice3 = quantityOfGoods3 * productPrice3
const totalPrice = totalProductPrice1 + totalProductPrice2 + totalProductPrice3

// Виведення результатів

document.write(`
    <table class="check">
        <tr class="check__title">
            <td colspan="4">Крамниця</td>
        </tr>
        <tr class="check__subtitle">
            <td colspan="4">Чек №01</td>
        </tr>
        <tr class="check__subtitle">
            <td>Товар</td>
            <td>Кількість</td>
            <td>Ціна за одиницю, грн</td>
            <td>Загальна вартість, грн</td>
        </tr>
        <tr class="check__item">
            <td>Хліб</td>
            <td>${quantityOfGoods1}</td>
            <td>${productPrice1}</td>
            <td>${totalProductPrice1.toFixed(2)}</td>
        </tr>
        <tr class="check__item">
            <td>Молоко</td>
            <td>${quantityOfGoods2}</td>
            <td>${productPrice2}</td>
            <td>${totalProductPrice2.toFixed(2)}</td>
        </tr>
        <tr class="check__item">
            <td>Сіль</td>
            <td>${quantityOfGoods3}</td>
            <td>${productPrice3}</td>
            <td>${totalProductPrice3.toFixed(2)}</td>
        </tr>
        <tr class="check__sum">
            <td colspan="2">Загальна сума, грн</td>
            <td class="check__sum--right" colspan="2">${totalPrice.toFixed(2)}</td>
        </tr>
        <tr class="check__wish">
            <td colspan="4">Дякуєммо затпокупку!</td>
        </tr>
        <tr class="check__wish">
            <td colspan="4">Гарного дня!</td>
        </tr>
    </table>`)