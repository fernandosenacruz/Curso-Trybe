// //1

const newEmployees = (funkFunk) => {
  const employees = {
    id1: funkFunk('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funkFunk('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funkFunk('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const employee = (fullName) => {    
    const email = fullName.split(' ').join('_').toLowerCase();
    return {name: fullName, email: `${email}@trybe.com`}
}

const site = (fullName) => {
    const siteName = fullName.split(' ').join('_').toLowerCase();
    return {name: fullName, siteName: `https://www.${siteName}.seusitepersonalizado.com.br`}
}

console.table(newEmployees(employee));
console.table(newEmployees(site));
// output
/*
┌─────────┬─────────────────┬───────────────────────────┐
│ (index) │      name       │           email           │
├─────────┼─────────────────┼───────────────────────────┤
│   id1   │ 'Pedro Guerra'  │ 'pedro_guerra@trybe.com'  │
│   id2   │ 'Luiza Drumond' │ 'luiza_drumond@trybe.com' │
│   id3   │  'Carla Paiva'  │  'carla_paiva@trybe.com'  │
└─────────┴─────────────────┴───────────────────────────
└─────────┴─────────────────┴───────────────────────────┘
┌─────────┬─────────────────┬─────────────────────────────────────────────────────────┐
│ (index) │      name       │                        siteName                         │
├─────────┼─────────────────┼─────────────────────────────────────────────────────────┤
│   id1   │ 'Pedro Guerra'  │ 'https://www.pedro_guerra.seusitepersonalizado.com.br'  │
│   id2   │ 'Luiza Drumond' │ 'https://www.luiza_drumond.seusitepersonalizado.com.br' │
│   id3   │  'Carla Paiva'  │  'https://www.carla_paiva.seusitepersonalizado.com.br'  │
└─────────┴─────────────────┴─────────────────────────────────────────────────────────
*/

//2

const randonNumber = () => Math.round(Math.random() * 5 + 1);

const raffle = (bet, drawnNumber) => bet === drawnNumber() ? `Parabéns você ganhou` : `Tente novamente`;

console.log(raffle(3, randonNumber));

// 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUNDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const ANWERS = (funkFunk) => funkFunk(RIGHT_ANSWERS, STUNDENT_ANSWERS);

const correct = (arr, arr2) => {
    let rigths = 0;
    let wrongs = 0;
    // for (let index = 0; index < arr.length; index += 1) {
    //     if (arr[index] === arr2[index]) rigths += 1;
    //     if (arr[index] !== arr2[index] && arr2[index] !== 'N.A') {
    //         rigths -= 0.5;
    //          wrongs++
    //     };
    //     if (wrongs === 2) return "Desclassificado!"        
    // }
    arr.forEach((element, index) => {
        if (element === arr2[index]) rigths += 1;
        if (arr[index] !== arr2[index] && arr2[index] !== 'N.A') {
            rigths -= 0.5;
             wrongs++
        };
    });
    return wrongs > 3 ? `Desclassificado!` : `${rigths}\nSeu gabarito: ${STUNDENT_ANSWERS}`;
}

console.log(ANWERS(correct));
