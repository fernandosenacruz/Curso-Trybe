let n = 5;
let squareAsterisk = "";

// for (let line = 0; line < n; line += 1){
//     squareAsterisk += "*";
// }
// for (let xablau = 1; xablau <= n; xablau += 1){
//     console.log(squareAsterisk);
// } 1 ok


// for (let line = 1; line <= n; line += 1){
//     squareAsterisk += "*";
//     console.log(squareAsterisk);
// } 2


// https://www.javascriptprogressivo.net/2019/01/Matriz-Declarar-Criar-Inicializar-Exibir-Alterar-Apostila.html // método com matriz

// for (iColunm= 1; iColunm <= n; iColunm += 1){
//     let matrix = new Array(iColunm);
//     matrix.unshift("*");
//      for (iLine = 1; iLine < n; iLine += 1){
//          matrix.unshift("*");
//         }console.log(matrix);
//    } não deu certo :(
  

// let asterisks ="" , spaces = "";


// for (let i = 0; i < n; i += 1){
//     for (let line = 0; line < n - i; line += 1){
//     spaces += " ";        
//     }
// for (let line = 0; line < i; line += 1){
//     asterisks += "*";
// }
//     console.log(spaces+asterisks);
//     asterisks = ""; spaces = "";
// } 3 ok
    
// let numbersOfAsterisk = 1;
// let numbersOfSoaces = (n - 1)/2; 
// let heigth = n / 2;


//  for (let lines = 0; lines < 3; lines += 1){
//     let left = "";
//     let rigth ="";
//     let meio = "";
//     for (let spaces = 0; spaces < numbersOfSoaces; spaces += 1){ // spaços esquerda
//         left += " ";
        
//     }
    
//     for(let spaces = 0; spaces < numbersOfAsterisk; spaces += 1){
//         meio += "*";
        
//     }
//     for (let spaces = 0; spaces < numbersOfSoaces; spaces += 1){ // spaços esquerda
//         rigth += " ";
        
//     }
    
//     asterisks = left + meio + rigth;
    
//     console.log(asterisks);
//     numbersOfSoaces -= 1;
//     numbersOfAsterisk += 2;
    
// }