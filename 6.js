// Дана строка 'ahb acb aeb aeeb adcb axeb'. 
// Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: 
// буква 'a', любой символ, буква 'b'.

const regexp = /a.b/g
console.log(regexp.test('ahb acb aeb aeeb adcb axeb'))

