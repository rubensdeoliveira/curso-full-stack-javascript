// Strings

const string1 = "Olá mundo, esse é um texto com aspas duplas" // Aspas duplas
const string2 = 'Olá mundo, esse é um texto com aspas simples"' // Aspas simples
console.log(string1)
console.log(string2)

// O padrāo da comunidade é usar aspas simples onde é possível

console.log('----------------------------')

// String tem varias funções nativas, teste todas e veja o que acontete, a seguir alguns exemplos

console.log(string1.charAt(1))
console.log(string1.concat('-'.concat(string2)))
console.log(string1.endsWith('s'), string1.endsWith('a'))
console.log(string1.includes('mun'))
console.log(string1.indexOf('o'))
console.log(string1.replace('Olá mundo', 'Adeus mundo'))
console.log(string1.length)
console.log(string1.split(','))
console.log(string1.toLowerCase())
console.log(string1.toUpperCase())
console.log(string1.slice(0,10))

