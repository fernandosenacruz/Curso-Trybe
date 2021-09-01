// const assert = require('assert'); // Sintaxe para incluir o módulo assert

//assert.strictEqual(50, 50); // Sem erros: 50 === 50
// assert.strictEqual(50, 70); // AssertionError: 50 === 70

// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// const expected = division(9, 3);

// assert.equal(expected, '3', 'Nove dividido por três é igual a três');
// assert.strictEqual(expected, '3', 'Nove dividido por três é igual a três');
// assert.deepStrictEqual(expected, 3, 'Nove dividido por três é igual a três');

// const assert = require('assert');

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [1, 2, 3, 4, 5];

// assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

// const person1 = { name: 'john', age: 21 };
// const person2 = { name: 'john', age: 21 };

// assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

// const person3 = { name: 'john', age: 19 };

// assert.notDeepStrictEqual(person1, person2, 'Erro: os valores dos objetos são estritamente iguais');

// const assert = require('assert');

// function division(x, y) {
//   return x / y;
// }

// assert.strictEqual(division(10, 2), 5); // OK
// assert.strictEqual(division(10, 0), 0); // 💣

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK