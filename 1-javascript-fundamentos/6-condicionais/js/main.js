const a = 10
const b = 5
const c = '5'

/*
  Operadores de comparação
  - igual a
  - identico a 
  - diferente
  - maior que
  - maior ou igual a
  - menor que
  - menor ou igual a
*/

console.log('igual a', a == b)

console.log('identico a', b === c)

console.log('diferente', b != c)

console.log('realmente é diferente', b !== c)

console.log('maior que', a > b)

console.log('maior ou igual a', a >= b)

console.log('menor que', a < b)

console.log('menor ou igual a', a <= b)



/*
 Operadores Lógicos
 - e &&
 - ou ||
 - negação !
*/

console.log('maior ->', a > b && b == c)


console.log('maior ->', a > b || b == c)


console.log('maior ->', !(a > b) && b == c)



/*
 - If
 - ternário
*/

if (4 > 2) {
  console.log('é')
} else {
  console.log('não é')
}

if (4 > 2 && 1 < 3) {
  console.log('é')
} else {
  console.log('não é')
}

const maior = (4 > 2) ? 'é' : 'não é'

