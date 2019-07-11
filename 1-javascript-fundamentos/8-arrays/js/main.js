//const numeros = [10, 5, 3, 3, 2, 9]
//const pessoas = [
  //{
    //nome: 'Christie C. Craighead',
    //idade: 15
  //},
  //{
    //nome: 'Arlene T. Baker',
    //idade: 14
  //},
  //{
   // nome: 'Christie C. Craighead',
    //idade: 18
 // },
  //{
    //nome: 'Scott K. Parham',
    //idade: 23
  //},
  //{
    //nome: 'Christie C. Craighead',
    //idade: 30
  //},
  //{
    //nome: 'Jeremiah J. Lobel',
    //idade: 8
  //},
  //{
  //  nome: 'Deborah W. Coulter',
//    idade: 21
  //},
//]
//const salas = ['A', 'B', 'C', 'D', 'E']

// map

//const alunosSalas = pessoas.map(pessoa => {
  //const teste = { a: 3434, b: 49878}
  //return { 
    //...pessoa,
    //a: teste.a,
    //sala: salas[Math.floor(Math.random()*salas.length)]
  //}
//})

//console.log('novo array' ,alunosSalas)

// filter

//const alunosMaioresDeIdade = pessoas.filter(pessoa => {
  //return pessoa.idade >= 18
//})

//console.log(alunosMaioresDeIdade)

// reduce
//const valorInicial = 0
//const somaDosNumeros = numeros.reduce((acumulador, valorAtual) => {
  //return acumulador + valorAtual
//}, valorInicial)

//console.log(somaDosNumeros)

//const debora = pessoas.find(pessoa.nome === 'Deborah W. Coulter')

//console.log(debora)



const nomes = ['Rafael', 'Maria', 'Marta', 'Jaqueline', 'Bruno']

const carros = [
  {
    modelo: 'Fusca',
    ano: '1976',
    cor: 'branco',
    valor: 9.000
  },
  {
    modelo: 'Vectra',
    ano: '2002',
    cor: 'prata',
    valor: 18.000

  },
  {
  modelo: 'Uno',
  ano: '1997',
  cor: 'verde',
  valor: 12.000 
  },
  {
  modelo: 'Mustang',
  ano: '1966',
  cor: 'preto',
  valor: 70.000
  }
]

const saloes = ['Lançamentos', 'Populares', 'Classicos']

const salaoAutomovel = carros.map(carro => {
  return { 
    ...carro,
    salao: saloes[Math.floor(Math.random()*saloes.length)]
  }
})

console.log(salaoAutomovel)

const carrosValorMaisAlto = carros.filter(carro => {
  return carro.valor >= 12.000
})


console.log(carrosValorMaisAlto)


const valorInicial = 0
const somaDosPrecos = carros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.valor
}, valorInicial)

console.log(somaDosPrecos)