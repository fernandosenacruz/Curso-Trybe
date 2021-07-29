let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index <= cars.length-1; index ++) {
  console.log(cars[index]);
}

console.log();

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i = 0; i < groceryList.length; i++ ){
    console.log(groceryList[i]);
}

console.log();


let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

console.log();

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

console.log();


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
} // não altera o vaor do array.

console.log(arrOfNumbers); // o valor continua o mesmo
console.log();

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (elements of names) {
    console.log(elements);
}