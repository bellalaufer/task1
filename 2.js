// Дана строка 'aaa@bbb@ccc'.Замените все @на '!'

//regexp

const replaceAts = (str) => {
    const regexp = /@/g;
    return str.replace(regexp, '!')
}

console.log(replaceAts('aaa@bbb@ccc'))


// Без регулярки
// const replaceAts = (str) => {
//     let newStr = ''
//     for (let i = 0; i <= str.length; i++) {
//         if (str.charAt(i) === '@') {
//             newStr += '!'
//         } else {
//             newStr += str.charAt(i)
//         }
//     }
//     return newStr
// }

// console.log(replaceAts('aaa@bbb@ccc'))

