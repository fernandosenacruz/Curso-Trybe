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

//3

const benjaminButton = document.getElementById('benjamin_button');
const clickCounter = document.getElementById('click_counter');
let clickCount = 1;
benjaminButton.addEventListener('click', () => {
    clickCounter.innerHTML = clickCount ++;  
});

// 4
const skills = ['Colaborativo', 'Comunicativo', 'Liderança', 'Iniciativa', 'Criaticidade']

const ximira = xibil => xibil.replace('x' , 'Fernando');

function Xirunda() {
  return `Minhas principais skills são:\n${skills.sort().join('\n')}`
}

console.log(Xirunda(ximira('Tryber x aqui!')));