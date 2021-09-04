const assert = require("assert");

const books = require('./arrayBase');

const expectedResult = false;

function everyoneWasBornOnSecXX() {
  return books.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);