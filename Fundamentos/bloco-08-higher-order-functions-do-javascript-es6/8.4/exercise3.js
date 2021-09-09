/*Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros
 foram lançados.*/

const assert = require("assert");
const books = require("../8.2/arrayBase");

const expectedResult = 43;

function averageAge(books) {
  return books.reduce((acc, current) => {
    return (acc += current.releaseYear - current.author.birthYear);
  }, 0) / books.length;
}

assert.strictEqual(averageAge(books), expectedResult);