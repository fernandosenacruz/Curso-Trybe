/*Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros
 foram lançados.*/

const assert = require("assert");
const { release } = require("os");

const books = require('../8.2/arrayBase')

const expectedResult = 43;

const yearInTheRelease = ((releaseYear, birthYear, authors) => (releaseYear - birthYear) / authors);

function averageAge() {
  return books.reduce((yearInTheRelease));
}

assert.strictEqual(averageAge(), expectedResult);