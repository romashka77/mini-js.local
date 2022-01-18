/**
 * Первая заглавная
 * @param {string} s 
 * @returns 
 */
const firstUpperCase = s => {
    let str = s.trim().toLocaleLowerCase();
    return str[0].toUpperCase() + str.slice(1);
};

/**
 * Перевернуть строку
 * @param {string} str 
 * @returns 
 */
const reverse = str => {
    return String(str).split('').reverse().join('');
};
