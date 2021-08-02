let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

console.log("Carro: " + car.type + " modelo: " + car.model + " cor: " + car.color + ".");

let player = {
    name:'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

player["bestOfInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018, 2020];

let count = player.bestOfInTheWorld.length;

// for (let index = 0; index < player.bestOfInTheWorld.length; index += 1){
//     count += 1;
// } inútil

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + count + " vezes.");