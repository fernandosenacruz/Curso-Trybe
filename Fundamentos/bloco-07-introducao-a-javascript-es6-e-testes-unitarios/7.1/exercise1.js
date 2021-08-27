// 1
//   function testingScope(escopo) {
//     if (escopo === true) {
//       console.log(`Não devo ser utilizada fora do meu escopo (if).\nÓtimo, fui utilizada no escopo !`);
//     } else {
//       console.log(`Não devo ser utilizada fora meu escopo (else)`);
//     }
//   }

//   testingScope(true);

const testingScope = (escopo) =>
  escopo === true
    ? `Não devo ser utilizada fora do meu escopo (if).\nÓtimo, fui utilizada no escopo !`
    : `Não devo ser utilizada fora meu escopo (else)\n`;

console.log(testingScope(true));
console.log(testingScope(false));

// 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((ximira, xibil) => {
  if (ximira > xibil) return 1;
  if (xibil > ximira) return -1;
  return 0;
});

console.log(oddsAndEvens);


// aula ao vivo

const studant = {
  name: 'ximira',
  tryber: true,
  greet: (greet) => 
  (greet === true) ? `Olá, ${studant.name}, seja benvindo`
  : `Pega o beco ${studant.name}, c não é tryber!`
}

console.log(studant.greet(false));