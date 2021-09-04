// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach(element => showEmailList(element));

/* output: O email roberta@email.com esta cadastrado em nosso banco de dados!
O email paulo@email.com esta cadastrado em nosso banco de dados!
O email anaroberta@email.com esta cadastrado em nosso banco de dados!
O email fabiano@email.com esta cadastrado em nosso banco de dados
*/

// // 2

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((numbers) => numbers % 3 === 0 && numbers % 5 === 0);

// console.log(findDivisibleBy3And5);

//output: 30

//3

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = names.find((names) => names.length === 5);

// console.log(findNameWithFiveLetters);

// output: Irene

// //4
// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ]

// function findMusic(id) {return musicas.find((musica) => musica.id === id);};

// console.log(findMusic('31031685'));

// output: { id: '31031685', title: 'Partita in C moll BWV 997' }

//5

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((element) => element === name);

console.log(hasName(names, 'Ana'))

//output: true

//6

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((element) => element >= minimumAge);

console.log(verifyAges(people, 18));

//output: false

// 7

console.log(people.sort((a, b) => a.age - b.age)); // crescente
console.log(people.sort((a, b) => b.age - a.age)); // decrescente
console.log(people.sort((a, b) => a.name.localeCompare(b.name, 'pt-br')));// ordena letras e aceita uma sabe de lingua específica, ex 'en'.

/*output: 
[
  { name: 'José', age: 16 },
  { name: 'Mateus', age: 18 },
  { name: 'Bruna', age: 19 },
  { name: 'Cláudia', age: 20 },
  { name: 'Ana', age: 23 }
]
[
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 }
]
[
  { name: 'Ana', age: 23 },
  { name: 'Bruna', age: 19 },
  { name: 'Cláudia', age: 20 },
  { name: 'José', age: 16 },
  { name: 'Mateus', age: 18 }
]
*/
