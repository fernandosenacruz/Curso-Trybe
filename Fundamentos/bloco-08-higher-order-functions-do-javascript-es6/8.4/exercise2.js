const assert = require("assert");

const books = require("../8.2/arrayBase");

//Crie uma string com os nomes de todos os autores.

const expectedResult =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, cur, index) => {
    if (index == books.length - 1) {
      return (acc += `${cur.author.name}.`);
    } else {
      return (acc += `${cur.author.name}, `);
    }
  }, '');
}

assert.strictEqual(reduceNames(), expectedResult);
