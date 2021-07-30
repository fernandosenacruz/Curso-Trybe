let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index <= numbers.length-1; index +=1){
//     console.log(numbers[index]);
// }  1 ok

// let sum = 0;

// for (let index = 0; index <numbers.length; index +=1){
//     sum += numbers[index];
// }
// console.log(sum); 2 ok

// // let sum = numbers.reduce(function(sum, numbers){
// //     return sum + numbers;
// // }, 0);
// // console.log(sum); outra forma de resolver a questão 2

// let sum = 0;

// for (let index = 0; index <numbers.length; index +=1){
//     sum += numbers[index];
// }
// let media = sum / numbers.length;
// console.log(media); 3 ok

// if (media >= 20){
//     console.log("Valor maior que 20");
// }else{
//     console.log("Valor nemor que 20");
// } 4 ok

// let maxNumber = numbers[0];

// for (let index = 0; index <= numbers.length-1; index +=1){
//     if (numbers[index] > maxNumber){
//         maxNumber = numbers[index];
//     }
// } 

// console.log(maxNumber); 5 ok

// let odd = 0;

//  for (let index = 0; index <= numbers.length-1; index +=1){
//      if (numbers[index] % 2 != 0){
//          odd += 1;
//      }
// } 
//     if (odd != 0){
//         console.log(odd);
//     }else{
//         console.log("nenhum valor ímpar encontrado")
//     } 6 ok

// let minNumber = numbers[0];

//  for (let index = 0; index <= numbers.length-1; index +=1){
//      if (numbers[index] < minNumber){
//          minNumber = numbers[index];
//      }
// } 

// console.log(minNumber); 7 ok

// const MAX_LENGTH = 25;
// let division = 0;

// for (index = 1; index <= MAX_LENGTH; index += 1){
//     division = index/2;
//     console.log(division);
//     // console.log(index); 8 ok
// }
// 9 ok

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if (numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//       console.log(position);
//     }
//   }
// }
// console.log();

// for (let index = 1; index < numbers.length; index += 1) {
//     numbers.sort((a,b) => b -a);
// }
// console.log(numbers); ok com método sort

let numbersMultiplicaded = [];

for (let index = 0; index < numbers.length; index += 1){
    numbersMultiplicaded.push(numbers[index] * numbers[index+1] || numbersMultiplicaded.push(numbers[index] * 2));      
}

console.log(numbersMultiplicaded);
