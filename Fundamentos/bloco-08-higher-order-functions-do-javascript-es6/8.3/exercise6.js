const books = require("../8.2/arrayBase");
const assert = require("assert");

const expectedResult = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

const date = new Date();

function oldBooks() {
  return books
    .map((book) => {
      if (date.getFullYear() - book.releaseYear > 60) {
        return book.name;
      }
    })
    .filter((name) => name);
}

assert.deepStrictEqual(oldBooks(), expectedResult);
