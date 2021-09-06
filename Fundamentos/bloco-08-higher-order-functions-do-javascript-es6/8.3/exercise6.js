const books = require("../8.2/arrayBase");
const assert = require('assert');

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const date = new Date();

function oldBooks() {
  let oldBookTitles = [];
  books.filter((book) => {
    if ((date.getFullYear() - book.releaseYear) > 60) {
        oldBookTitles.push(book.name);
    };
  });
  return oldBookTitles;
}

assert.deepStrictEqual(oldBooks(), expectedResult);