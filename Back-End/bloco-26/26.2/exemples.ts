type Bird = {
  paws: number,
  beak: string,
  feathers: string,
  wings: string,
  color: string
}

const birds: Bird[] = [
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
]

export function birdDescription(bird: Bird, i: number) {
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

birds.forEach(birdDescription);



export function sum(a: number, b: number): number {
  return a + b;
}

enum EyeColor {
    Black = "Pretos",
    Blue = "Azuis",
    Green = "Verdes",
    Brown = "Castanhos",
}

class Person {
    name: string;
    birthDate: Date;
    eyeColor?: EyeColor;

    constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
      this.name  = name;
      this.birthDate  = birthDate;
      this.eyeColor  = eyeColor;
    }

    speak(): void {
        console.log(`${this.name} está falando.`);
    }

    eat(): void {
        console.log(`${this.name} está comendo.`)
    }

    walk(): void {
        console.log(`${this.name} está andando.`)
    }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"));
const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(person1);
person1.speak()

console.log(person2);
person2.walk();

// add posteriormente o argumento eyeColor
person1.eyeColor = EyeColor.Blue;
console.log(person1);

interface House {
  _size: number;
  _price: number;
  _locationAddress?: string;
}

class House {
  constructor(size: number, price: number, address?: string) {
    this._size = size;
    this._price = price;
    this._locationAddress = address;
  }
}

const house1 = new House(49.5, 375.000, 'Av. beira Mar nº 1100');
const house2 = new House(80, 175.000);

console.log({ house1 }, { house2 });

function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação

interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

class ProcessIdentity<T, U> {
    _value: T;
    _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}

let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity();  // imprime "Olá" e retorna 100
