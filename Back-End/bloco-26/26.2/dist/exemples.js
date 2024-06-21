"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.birdDescription = void 0;
const birds = [
    {
        paws: 2,
        beak: 'pequeno',
        feathers: 'curtas',
        wings: 'frágeis',
        color: 'marrom'
    },
    {
        paws: 2,
        beak: 'curvo',
        feathers: 'curtas',
        wings: 'fortes',
        color: 'preta'
    }
];
function birdDescription(bird, i) {
    const { paws, beak, feathers, wings, color } = bird;
    console.log(`\n Bird ${i + 1}`);
    console.table({
        paws: paws,
        beak: beak,
        feathers: feathers,
        wings: wings,
        color: color
    });
}
exports.birdDescription = birdDescription;
birds.forEach(birdDescription);
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
class Person {
    constructor(name, birthDate, eyeColor) {
        this.name = name;
        this.birthDate = birthDate;
        this.eyeColor = eyeColor;
    }
    speak() {
        console.log(`${this.name} está falando.`);
    }
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    walk() {
        console.log(`${this.name} está andando.`);
    }
}
const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
// add posteriormente o argumento eyeColor
person1.eyeColor = EyeColor.Blue;
console.log(person1);
class House {
    constructor(size, price, address) {
        this._size = size;
        this._price = price;
        this._locationAddress = address;
    }
}
const house1 = new House(49.5, 375.000, 'Av. beira Mar nº 1100');
const house2 = new House(80, 175.000);
console.log({ house1 }, { house2 });
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
function processIdentity(value, message) {
    console.log(message);
    return value;
}
class ProcessIdentity {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor = new ProcessIdentity(100, "Olá");
processor.getIdentity(); // imprime "Olá" e retorna 100
