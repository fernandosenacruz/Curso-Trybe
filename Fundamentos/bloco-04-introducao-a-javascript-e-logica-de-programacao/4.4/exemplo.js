// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// console.log("Carro: " + car.type + " modelo: " + car.model + " cor: " + car.color + ".");

// let player = {
//     name:'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 }
// };

// console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade.");

// player["bestOfInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

// let count = player.bestOfInTheWorld.length;

// // for (let index = 0; index < player.bestOfInTheWorld.length; index += 1){
// //     count += 1;
// // } inútil

// console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + count + " vezes.");

// console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata."); ok

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }
// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) { // acessa a posição (index)
//   console.log(index, car[index]);
// }
// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//   console.log(position);
// };
// //resultado: 0, 1, 2;
// food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) { //acessa o valor 
//   console.log(value);
// };
// //resultado: hamburguer, bife, acarajé;

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// };

// for(let hello in names){
//     console.log("Olá " + names[hello]);
// }
// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car){
//     console.log(index +":", car[index]);
// }

let statusCar = "turn off";
let speedUp = 0;
let steereingWheelRotation = 0;

function turnOnTurnOff(){
    if(statusCar === "turn off"){
        statusCar = "turn on";
    }else {
        statusCar = "turn off";
    }
    return statusCar;
}

function speedUp(value){
    speedUp = speedUp + value;
    return "Aceleração a " + speedUp + "km/h."
}

function speedDown(value){
    speedDown = speedDown - value;
    return "Desaceleração a " + speedDown + "km/h."
}

function steereingWheelRotation(rotationAngle){
    steereingWheelRotation = rotationAngle;
    return rotationAngle + "o"
}
turnOnTurnOff();
speedUp(80);
steereingWheelRotation(-45);
speedDown(60);
steereingWheelRotation(0);
speedDown(20);
turnOnTurnOff();