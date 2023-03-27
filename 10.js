// Напишите функцию change_register(str), которая принимает 
// в качестве аргумента строку и и заменяет регистр каждого 
// символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
// то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
    let newStr = str.split("").map(function (el) {
        if (el[0] === el.toUpperCase()) {
            return el.toLowerCase()
        } else {
            return el.toUpperCase()
        }
    })
    return newStr.join("")
}

console.log(changeRegister('КаЖдЫй ОхОтНиК'))