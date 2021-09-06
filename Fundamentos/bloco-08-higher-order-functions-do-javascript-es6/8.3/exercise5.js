const books = require("../8.2/arrayBase");
const assert = require('assert');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  let nameAuthor = [];
  books.filter((book) => {
    if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia') {
      nameAuthor.push(book.author.name);
    };
  });
    return nameAuthor.sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);