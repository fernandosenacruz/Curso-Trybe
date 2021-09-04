const assert = require("assert");

const books = require('./arrayBase');

const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear > 1980 && element.releaseYear < 1990);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);