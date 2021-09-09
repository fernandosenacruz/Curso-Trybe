/*Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros
 foram lançados.*/

const assert = require("assert");
const { release } = require("os");

const books = require('../8.2/arrayBase')

const expectedResult = 43;

const yearInTheRelease = ((releaseYear, birthYear, books) => (releaseYear.releaseYear - birthYear.author.birthYear) / books.length);

function averageAge(books) {
  return books.reduce((yearInTheRelease));
}

console.log(averageAge(books))
// assert.strictEqual(averageAge(books), expectedResult);