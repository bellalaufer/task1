// Удалите одной регуляркой все повторяющиеся слова из строки, 
// например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'

const str = 'dsf xxx xxx sd'
const regex = /\b(\w+)\b(?=.*\b\1\b)/gi;
const result = str.replace(regex, "");
console.log(result)


// \b matches a word boundary.
// (\w+) matches one or more word characters and captures them in a group.
// (?=.*\b\1\b) is a positive lookahead that checks if the captured group appears again later in the string (i.e., if it's a duplicate). .* matches any characters (except newline) zero or more times, \b is used to ensure that we match only complete words, and \1 is a backreference to the captured group.
// gi are flags that make the regular expression global (to match all duplicates) and case-insensitive (to match words regardless of their case).
