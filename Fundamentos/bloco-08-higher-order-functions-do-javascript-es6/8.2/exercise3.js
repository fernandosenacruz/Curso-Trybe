const assert = require("assert");

const books = require('/.arrayBase'); 

//3
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((element) => element.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);