// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log("Bem-vinda, " + info.personagem);

// info["recorrente"] = "sim";

// console.log(info);

// for (let key in info){
//     console.log(key);
// }
// console.log();

// for (let key in info){
//     console.log(info[key]);
// }
// console.log();

// for (let key in info){
//     console.log(key);
// }
// let info2 = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
// };
// console.log();

// for (let key in info, info2){
//     console.log(info[key] + " e " + info2[key]);
// }

// function palindrome(word){
//     if (word === word.split('').reverse().join('')){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(palindrome("arara"));
// console.log(palindrome("desenvolvimento")); 1 ok
let arrayTest = [2,3,6,7,10,1];

// function maxValue(arrayNumber){
//     let maxNumber = arrayNumber[0];
//     let maxIndex = 0;
//     for(let index = 0; index < arrayNumber.length; index += 1){
//         if(maxNumber < arrayNumber[index]){
//             maxNumber = arrayNumber[index];
//             maxIndex = index;
//         }
//     }
//     return maxIndex;
// }
// console.log(maxValue(arrayTest)); ok

// arrayTest = [2,3,6,7,10,0,-3];

// function maxValue(arrayNumber){
//     let minNumber = arrayNumber[0];
//     let minIndex = 0;
//     for(let index = 0; index < arrayNumber.length; index += 1){
//         if(minNumber > arrayNumber[index] ){
//             minNumber = arrayNumber[index];
//             minIndex = index;
//         }
//     }
//     return minIndex;
// }
// console.log(maxValue(arrayTest)); ok

// arrayTest = [2, 3, 2, 5, 8, 2, 3];

// function numberRepite(arrayTest){
//     let countRepited = 0;
//     let indexNumRepeted = 0;
//     let numRepited = 0;

//     for (let index = 0; index < arrayTest.length; index += 1){
        
//         for (let indexArray = 0;indexArray < index; indexArray += 1){
//             if (arrayTest[index] == arrayTest[indexArray]){
//                 countRepited += 1;
//             }
//         }
//         if (countRepited > numRepited){
//             numRepited = countRepited;
//             indexNumRepeted = index;
//         }
//         countRepited = 0;
//     }
//     return arrayTest[indexNumRepeted];
// }
// console.log(numberRepite(arrayTest)); ok