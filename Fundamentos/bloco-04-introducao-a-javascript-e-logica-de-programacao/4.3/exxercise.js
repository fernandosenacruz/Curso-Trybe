const n = 5;
let squareAsterisk = "";





// for (let line = 1; line <= n; line += 1){
//     squareAsterisk += "*";
//     console.log(squareAsterisk);
// } 2 ok


// // https://www.javascriptprogressivo.net/2019/01/Matriz-Declarar-Criar-Inicializar-Exibir-Alterar-Apostila.html // método com matriz

for (iColunm= 1; iColunm <= n; iColunm += 1){
    let matrix = new Array(iColunm);
    matrix.unshift("*");
     for (iLine = 1; iLine < n; iLine += 1){
         matrix.unshift("*");
        }console.log(matrix);
   }
        
