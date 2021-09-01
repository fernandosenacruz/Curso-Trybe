// Parte I
//1
// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// // implemente seus testes aqui
// // 1
// assert.strictEqual(sum(4, 5), 9);

// // 2
// assert.strictEqual(sum(0, 0), 0);

// //3 e 4
// assert.throws(() => {sum(4, '5'); }, /^Error: parameters must be numbers$/);

//2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// implemente seus testes aqui
//1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);

//2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);

//3
const array2 = [1, 2, 3, 4];
myRemove(array2, 4);
assert.deepStrictEqual(array2, [1, 2, 3, 4]);

//4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
