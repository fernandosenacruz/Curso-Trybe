const books = require("../8.2/arrayBase");
const assert = require("assert");

const expectedResult = [
  "Frank Herbert",
  "George R. R. Martin",
  "Isaac Asimov",
  "J. R. R. Tolkien",
];

function fantasyOrScienceFictionAuthors() {
  let authors = [];
  books.filter((book) => {
    if (book.genre === "Ficção Científica" || book.genre === "Fantasia") {
      return authors.push(book.author.name);
    }
  });
  return authors.sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
