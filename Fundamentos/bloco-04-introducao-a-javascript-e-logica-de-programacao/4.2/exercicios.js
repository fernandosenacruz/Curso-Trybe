let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index <= numbers.length-1; index +=1){
//     console.log(numbers[index]);
// }  ok

let sum = 0;

for (let index = 0; index <numbers.length; index +=1){
    sum += numbers[index];
}
console.log(sum);

// let sum = numbers.reduce(function(sum, numbers){
//     return sum + numbers;
// }, 0);
// console.log(sum); outra forma de resolver a questão 2

