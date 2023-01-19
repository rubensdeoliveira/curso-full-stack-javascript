// Strings

const string1 = "Olá mundo, esse é um texto com aspas duplas" // Aspas duplas
const string2 = 'Olá mundo, esse é um texto com aspas simples' // Aspas simples
console.log(string1)
console.log(string2)

// O padrāo da comunidade é usar aspas simples onde é possível

console.log('----------------------------')

// String tem varias funções nativas, teste todas e veja o que acontete, a seguir alguns exemplos

console.log(string1.charAt(1)) // Qual é o caractere da posicao informada por parametro, lembrando que começa com 0
console.log(string1.concat('Banana')) // Concatenar uma string em outra
console.log(string1.endsWith('s'), string1.endsWith('a')) // Retornar true or false se uma string termina com determinado caractere passado por parametro
console.log(string1.includes('mun')) // Retorna true ou false se um determinada string contem uma outra string passada por parametro
console.log(string1.indexOf('osdasdasd')) // Retornar um numero referente a posicao da primeira ocorrencia de uma string passada por parametro, caso nao ache retorna -1
console.log(string1.replace('Olá mundo', 'Adeus mundo')) // Substituir uma string por outra passada por parametro, a primeira é a string que quer substituir, e a segunda o que deve ser substituido no lugar
console.log(string1.length) // Retornar o tamanho da string 
console.log(string1.split(',')) // Ele vai separar a string de acordo com a quantidade de ocorrencias que a string passada por parametro aparece na string usada como referencia, ou seja, se a string procurada existir 1 vez, ele vai separar em um array de duas posicoes, na primeira posicao tudo que existia antes da ocorrencia e a segunda tudo que existia depois 
console.log(string1.toLowerCase()) // E uma funcao que vai retornar a string original toda minuscula
console.log(string1.toUpperCase()) // E uma funcao que vai retornar a string original toda maiscula
console.log('012345678901234567890123456789012345678901234567890123456789'.slice(0,12)) // Ele vai cortar a string, com o primeiro parametro sendo o index inicial do corte, e o segundo a quantidade de caracteres que ele vai cortar