// Напиши функцию, которая в массиве чисел находит и 
// возвращает наименьшее число.
// [94, 2, 71, 10, 22, 71] —>  2

const func = (arr) => {
    return Math.min(...arr)
}

console.log(func([94, 2, 71, 10, 22, 71]))
