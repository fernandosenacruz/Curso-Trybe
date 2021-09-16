/*Dada o array de nomes, retorne a quantidade de vezes em que aparecem a 
letra a maiúscula ou minúscula.*/

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((acc, name) => acc += name.match(/a/gi).length, 0);

assert.deepStrictEqual(containsA(), 20);