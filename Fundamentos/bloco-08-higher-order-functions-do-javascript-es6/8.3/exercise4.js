const books = require("../8.2/arrayBase");
const assert = require('assert');

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

let date = new Date();

const oldBooksOrdered = () => books.filter((book) => (date.getFullYear() - book.releaseYear) > 60).sort((a, b) => a.releaseYear - b.releaseYear);

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);