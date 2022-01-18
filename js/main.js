/**
 * Вывод в консоль
 * @param {any} m сообщение 
 * @returns 
 */
let log = (m) => console.log(m);
/**
 * Первая заглавная
 * @param {string} s 
 * @returns 
 */
let firstUpperCase = (s) => {
    let str = s.trim().toLocaleLowerCase();
    return str[0].toUpperCase() + str.slice(1);
}
/**
 * Числа Фибоначи
 * @param {number} count кол-во чисел
 * @returns 
 */
let fibonachi = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr[i] = (i < 2) ? i : arr[i - 1] + arr[i - 2];
    }
    return arr;
};
/**
 * Факториал
 * @param {number} number 
 * @returns 
 */
let factorial = (number) => {
    if (!number) return 1;
    return number * factorial(--number);
};
/**
 * Сложить и умножить цифры числа
 * @param {number} number 
 * @returns sum - сумма, mul - произведение
 */
let sumAndMulNumbers = (number) => {
    number += '';
    let sum = 0, mul = 1;
    for (let i = 0; i < number.length; i++) {
        sum += +number[i];
        mul *= +number[i];
    }
    return {
        'sum': sum,
        'mul': mul
    };
}
/**
 * перевернуть строку
 * @param {string} str 
 * @returns 
 */
let reverse = (str) => {
    return String(str).split('').reverse().join('');
};
/**
 * Кол-во четных и нечетных цифр в числе
 * @param {number} number число
 * @returns even - четных, odd - нечетных
 */
let evenAndOdd = (number) => {
    let even = 0, odd = 0;
    let arr = String(number).split('');
    for (const item of arr) {
        if (item % 2 == 0) even++;
        else odd++;
    }
    return { 'even': even, 'odd': odd };
};
/**
 * Эта функция JavaScript всегда возвращает случайное число от min (включено) до max (исключено fmax==false, включено fmax==true):
 * @param {number} min минимальное значение
 * @param {number} max максимальное значение
 * @param {boolean} fmax включая max?
 * @returns {number} случайное значение из диапазона
 */
function getRndInteger(min, max, fmax = false) {
    return Math.floor(Math.random() * (max - min + Number(fmax))) + min;
}


//=========================
log(firstUpperCase('          ПРивеТ  '));
log(fibonachi(11));
log(factorial(8));
log(sumAndMulNumbers(795));
log(reverse('012345678 9'));
log(evenAndOdd(65275));
for (let i = 0; i < 100; i++)
    log(getRndInteger(1, 3, true));
