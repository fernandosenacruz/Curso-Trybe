const assert = require("assert");

const books = require('./arrayBase');

// 1
function authorBornIn1947() {
  const ximira = books.find((element) => element.author.birthYear === 1947);
  return ximira.author.name;
}

assert.strictEqual(authorBornIn1947(), "Stephen King");
