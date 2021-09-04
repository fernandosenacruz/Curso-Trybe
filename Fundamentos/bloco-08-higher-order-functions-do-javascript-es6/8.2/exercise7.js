const assert = require("assert");

// const books = require("./arrayBase");
const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1965,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

function authorUnique(array) {
  //   books.every((element) => {
  //     books.some((element2) => {
  //       element.releaseYear === element2.releaseYear;
  //     });
  //   });
  for (let index = 0; index < array.length; index++) {
    for (let index1 = 1; index1 < array.length; index1++) {
        if (array[index].releaseYear === array[index1].releaseYear && array[index].name !== array[index1].name) {
            return false;
      } 
    }
  }
  return true;
}

assert.strictEqual(authorUnique(books), expectedResult);
