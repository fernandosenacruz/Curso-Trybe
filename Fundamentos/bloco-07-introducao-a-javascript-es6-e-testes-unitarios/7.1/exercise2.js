// 1
// function factorial(n) {
//     let count = 1;
//     let fatorial = 1;
//     while(count <= n){
//         fatorial *= count;
//         count += 1;
//     }
//     return fatorial;
// }
// refatorando...
const factorial = (n) => n === 0 ? 1 :n * factorial(n -1);

console.log(factorial(6));


// 2

console.log(`Antônio foi ao banheiro e não sabemos o que aconteceu.`.match(/\w+/g).sort((a,b) => b.length - a.length)[0]);