const books = require("../8.2/arrayBase");
const assert = require("assert");

const expectedResult = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];

function nameAndAge() {
  let authors = [];
  authors = books.map((book) => {
    let age = book.releaseYear - book.author.birthYear;
    return { age: age, author: book.author.name };
  });
  return authors.sort((a, b) => a.age - b.age);
}

assert.deepStrictEqual(nameAndAge(), expectedResult);
