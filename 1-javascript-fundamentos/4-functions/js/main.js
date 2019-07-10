/*
  soma
  subtrai
  multiplica
  divide
  full-name
*/

//function minhaFuncao(name) {
  //return `Olá, ${name}`
//}

//const minhaFuncao = function (name) {
  // return `Olá, ${name}`
//}

const minhaFuncao = name => `Olá, ${name}`

console.log(minhaFuncao('Breno'))


function soma(x, y) {
   return x + y
}

const subtrai = function(a, b){ 
  return a - b 
}

const multiplica = (x, y) => x * y

const divide = (a, b) => a / b

const fullName = (fisrtName, lastName) => `${fisrtName} ${lastName}`

console.log('Soma = ', soma(3, 4))

console.log('Subtração = ', subtrai(10, 6))

console.log('Multiplicação = ', multiplica(7, 9))

console.log('Divisão = ', divide(99, 20))

console.log(fullName('Adriano', 'Guimarães'))

