// pessoa -> 123 -> {...}
const pessoa = {nome: 'Leandro'}
pessoa.nome = 'Leo'
console.log(pessoa)

// pessoa -> 456=> {...}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)