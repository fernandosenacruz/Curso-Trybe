const assert = require("assert")

const books = require('./arrayBase');
//2
function smallerName() {
  let nameBook = books[0].name;
  books.forEach((element) => {
    if (element.name.length < nameBook.length) nameBook = element.name}
  );
  // return [...books].sort((a, b) => a.name.length - b.name.length)[0].name;
  // return [...books].sort((a, b) => b.name.length - a.name.length)[0].name; forma de pegar o maior 
  // return nameBook;
}
assert.strictEqual(smallerName(), 'Duna');
