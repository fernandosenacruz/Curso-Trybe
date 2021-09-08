const books = require("../8.2/arrayBase");
const assert = require('assert');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
    // let countDot = 0;
    // let nameAuthor = '';
    // books.forEach((xelo) => {
    //     let ximira = xelo.author.name.split('');
    //     let xibil = ximira.filter((element) => element === '.')
    //     if (xibil.length > countDot) {
    //         countDot = xibil.length;
    //         nameAuthor = xelo.name;
    //     }
    // })
    // return nameAuthor;
    return books.find((book) => book.author.name.split(' ').filter((name) => name.endsWith('.')).length === 3).name;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);