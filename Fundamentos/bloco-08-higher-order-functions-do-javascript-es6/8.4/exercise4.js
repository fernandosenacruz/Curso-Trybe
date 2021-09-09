//Encontre o livro com o maior nome.

const assert = require("assert");

const books = require('../8.2/arrayBase');


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // escreva seu código aqui
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);