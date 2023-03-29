//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

const cutWord = (str, word) => {

    return str.replace(word, '').replace(/\s+/g, ' ')
}
console.log(cutWord('aaa bbb ccc', 'bbb'))