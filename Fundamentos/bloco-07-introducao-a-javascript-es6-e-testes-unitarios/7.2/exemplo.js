//const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const property in coolestTvShow) {
//   console.log(property);
// }

// console.log(Object.keys(coolestTvShow).join('\n'));

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const levelStudentSkills = (student) => {
//   const objectKeys = Object.keys(student);
//   const objectValues = Object.values(student);
//   for (const key in objectKeys) {
//     console.log(`Nome da halilidade: ${objectKeys[key]},\nNível: ${objectValues[key]}`);  
//   }
// };

// console.log('Student 1')
// levelStudentSkills(student1);
// console.log('Student 2')
// levelStudentSkills(student2);

// const countries = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(countries);

// const pairKeyValueApart = (pairKeyValue) => {
//   for(index in pairKeyValue) {
//   console.log('');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };
// }
// console.log(pairKeyValueApart(pairKeyValue));


const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);

newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);