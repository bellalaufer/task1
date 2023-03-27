// Реализуйте функцию, принимающую слово и возвращающую количество 
// заглавных букв в нем  
// ПРИМЕР
// ("проКрАСТИНация") -> 6


const getCapitalLetter = (str) => {
    const regex = /[А-Я]/g;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}
console.log(getCapitalLetter("проКрАСТИНация"))

