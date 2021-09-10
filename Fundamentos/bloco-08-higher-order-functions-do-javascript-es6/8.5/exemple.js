// spread operator

//const imc = (peso, altura) => (peso / (altura * altura)).toFixed(1);
// const patientInfo = [122, 1.83];

// console.log(imc(...patientInfo)); 
// output: 36.4

// const randomNumbers = [57, 8, 5, 100, 152, 4, 630, 98, 40];

// console.table(randomNumbers)
// console.log(Math.max(...randomNumbers)); 
// // output: 630
// console.log(Math.min(...randomNumbers)); 
// //output: 4

// const person = {
//   id: 101,
//   name: 'Alysson',
//   age: 25,
// };

// const about = {
//   address: 'Av. Getúlio Vargas, 1000',
//   occupation: 'Developer',
// };

// const customer = { ...person, ...about };
// console.log(customer); 
//output:
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

//Rest

// Faça uma lista com as suas frutas favoritas
// const specialFruit = ['bread', 'cake', 'pizza'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['chease', 'chocolate', 'katchup'];

// const fruitSalad = (fruit, additional) => {
//   return {fruit:[...fruit], additional: [...additional]};
// };

// console.table(fruitSalad(specialFruit, additionalItens));

// Object destructing

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// // const { name, seller } = product;
// // console.log(name); // Smart TV Crystal UHD
// // console.log(seller); // Casas de Minas

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;

// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

//Array destructing

// const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
// const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry); // Brazil
// console.log(secondCountry); // Japan
// console.log(thirdCountry); // China
// console.log(fourthCountry); // Canada

//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// const [saudacao] = saudacoes;
// console.log(saudacao);

//2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // console.log(comida, animal, bebida); // arroz gato água

// const arr = ['gato', 'água', 'arroz']; 
// const [pet, drink, food] = arr;

// console.log(pet, drink, food);

//3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .

// let numerosPares = [1, 3, 5, 6, 8, 10, 12];


// [ , , ,...numerosPares] = numerosPares;

// console.log(numerosPares); // [6, 8, 10, 12];
