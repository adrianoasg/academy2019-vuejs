//const objeto = {
  //nome: 'Margaret J. Shah',
  //idade: 23,
  //soma: function (a, b) {
    //return a + b
  //},
  //nomeInteiro (nome, sobrenome) {
    //return `${nome} ${sobrenome}`
  //},
  //usuario: {
    //nome: 'Diane M. Bankston',
    //telefone: '843-469-9199',
  //}
//}

//Object.freeze(objeto)
//Object.freeze(objeto.usuario)

//objeto.nome = 'Breno'

//console.log(objeto) 


const produto = {
  descricao: 'Pastel',
  recheio: 'Queijo',
  peso: '100g',
  preco: 5.99,

  valorPedido: function (qtd) {
    return this.preco * qtd
  }  
  
}



produto.descricao = 'Coxinha'
produto.recheio = 'frango'

console.log(produto)

console.log(produto.valorPedido(3))

console.log(produto.descricao)
