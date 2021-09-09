// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 10 42 57 60 62 57 113
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 10);
// console.log(sumNumbers); 
// output: 123

// let bigger = 0;

// function biggerNumber () {
//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] > bigger) {
//             bigger = numbers[index];
//         }
//     }
//     return bigger;
// }
// output: 56

// const getBigger = (bigger, number) => {
//     if (bigger > number) {
//         return bigger;
//     } else {
//         return number;
//     };
// }
// const biggerNumber = numbers.reduce(getBigger, 0);

// console.log(biggerNumber);
// output 56

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (even) => {
//     if (even % 2 === 0) {
//         return even;
//     };
// }

// const sum = (sum, number) => sum + number;

// const sumEven = (arr) => arr.filter(getEven).reduce(sum);

// console.log(sumEven(numbers));
// output: 152

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

// [
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Mario', materia: 'Biologia' },
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Maria', materia: 'Química' },
//   { name: 'Natalia', materia: 'Português' },
//   { name: 'Wilson', materia: 'Português' },
// ] resultado esperado

const highestGrade = (highest, grade) => (highest > grade) ? highest : grade;

const bestPerformance = (studants) => studants.map((studant) => {
    return {
        name: studant.nome,
        matéria: studant.materias.reduce(highestGrade).name
    }
});

console.log(bestPerformance(estudantes));