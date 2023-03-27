// сгенерировать num чисел до 100 и отсортировать их 
// в порядке возрастания

const func = (num) => {
    let result = []
    for (let i = 0; i <= num; i++) {
        result.push(Math.floor((Math.random() * 100)))
    }
    return result
}

console.log(func(5))


