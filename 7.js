// Определите, что переданная строка является емэйлом. 
// Примеры емэйлов для тестирования mymail @mail.ru, my.mail@mail.ru,
// my - mail@mail.ru, my_mail @mail.ru, mail @mail.com, mail @mail.by, 
// mail @yandex.ru.

function validateEmail(str) {
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regexp.test(str) ? "valid e-mail" : "error"
}

console.log(validateEmail('my-mail@yandex.ru'))

