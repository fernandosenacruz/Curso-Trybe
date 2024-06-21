function cals(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number')
      reject('C tá maluko é? apenas números!');
    const result = (n1 + n2) * n3;
    if(result < 50) return reject('sobe mais um pouquinho... sobe de vagarinho :)');
    return resolve(result);
  });
};

// cals(1, 10, 15)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error));

// cals(1, 5, 'ximira')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error));

// cals(1, 0, 1)
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error));

// exercício 2

const randomNum = () => Math.floor(Math.random() * 100 + 1);

// function callCalcs() {
//   const arr = [];
//   const N = 3;

//   for (let i = 0; i < N; i++) {
//     arr.push(randomNum());    
//   }
 
//   cals(...arr)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message));  
// };

// callCalcs();

// exercicio 3

// async function callCalcs() {
//   const arr = [];
//   const N = 3;

//   for (let i = 0; i < N; i++) {
//     arr.push(randomNum());    
//   };
 
//   try {
//     const call = await cals(...arr); 
//     console.log(call);
//   } catch (error) {
//     console.log(error);
//   };
// };

// callCalcs();

// exercicio 4

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content))
  .then((simpsons) => simpsons.map(({ id, name }) => `${ id } ${ name }`))
  .then((str) => str.forEach((character) => console.log(character)));

const simpsons = () => await fs
    .readFile('./simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content));

async function getSimpsons(id = String) {
  const simpson = simpsons().find((character) => character.id === id);

  if (!simpson) throw new Error('Character not found');

  return simpson;
};

async function filterSimpsons() {
  const filteredSimpsons = simpsons()
    .filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
};

async function simpsonsFamily() {
  const family = simpsons().filter((simpson) => [1, 2, 3, 4].includes(simpson.id));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
};

async function addPerson(id = String, name= String) {
  const family = simpsons();
  family.push({ 'id': id, 'name': name });

  await fs.writeFile('./simpsonsFamily.json', family);
};

async function replaceCharacter() {
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((content) => JSON.parse(content))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((changeCharacter) => changeCharacter
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    .then((addMaggie) => fs
      .writeFile('./simpsonsFamily.json', JSON.stringify(addMaggie)));
};

console.log(getSimpsons('1'));
// console.log(filterSimpsons());
// console.log(simpsonsFamily());
// console.log(addPerson('8', 'Nelson Muntz'));
// console.log(replaceCharacter());

