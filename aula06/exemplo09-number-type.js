// Tipo number

const idade1 = 14
const idade2 = 14.0
const idade3 = 14.1
const idade4 = Number('14')
const idade5 = Number('14.0')
const idade6 = Number('14.1') 

console.log(idade1, typeof idade1, Number.isInteger(idade1))
console.log(idade2, typeof idade2, Number.isInteger(idade2))
console.log(idade3, typeof idade3, Number.isInteger(idade3))
console.log(idade4, typeof idade4, Number.isInteger(idade4))
console.log(idade5, typeof idade5, Number.isInteger(idade5))
console.log(idade6, typeof idade6, Number.isInteger(idade6))

const altura = 1.7534324234
console.log(altura.toFixed(1),altura.toFixed(2),altura.toFixed(3)) //toFixed
console.log(altura.toString(), typeof altura.toString()) //toString



