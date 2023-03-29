// Дана строка с буквами, пробелами и цифрами. 
// Найдите сумму всех чисел из данной строки.

let str = 'hello 1 2 4'
const filtered = str.split(" ").map(el => parseInt(el)).filter(el => !isNaN(el))
const sum = filtered.reduce((acc, el) => acc + el)

console.log(sum)