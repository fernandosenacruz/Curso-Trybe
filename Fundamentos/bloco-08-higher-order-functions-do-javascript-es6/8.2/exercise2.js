const assert = require("assert")

const books = require('./arrayBase');
//2
function smallerName() {
  let nameBook;
//   books.forEach((element, index, arr) => {
//     if (index + 1 < arr.length) {
//       if (element.name.length > arr[index + 1].name.length) {
//         nameBook = element;
//       } else {
//         nameBook = arr[index + 1];
//       }
//     } else {
//       return nameBook;
//     }
//   });
  const xelo = books.sort((a, b) => a.name.length - b.name.length);
  nameBook = xelo[0].name;
  //nameBook = xelo[xelo.length-1].name; forma de pegar o maior 
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');