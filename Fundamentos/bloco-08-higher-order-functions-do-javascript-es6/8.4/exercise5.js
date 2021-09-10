/*Dada o array de nomes, retorne a quantidade de vezes em que aparecem a 
letra a maiúscula ou minúscula.*/

const books = require('../8.2/arrayBase');

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
    return acc += name.match(/a/gi).length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);