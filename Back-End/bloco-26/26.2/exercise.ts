enum enumColor  {
black = 'preta', 
white ='branca',
red = 'vermelha',
silver = 'prata'
};

enum enumDirection  {
  left = 'esquerda',
  rigth = 'direita'
};

enum enumDoor {
  driver = 'do motorista',
  passenger = 'do passageiro',
  backDoorLeft = 'traseira esquerda',
  backDoorRigth = 'traseira direita'
}

interface Car {
  _brand: string;
  _color: enumColor;
  _doors: number;
}

class Car {
  
  constructor(brand: string, color: enumColor, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('Fom fom!');
  }

  openTheDoor(d:enumDoor, door: string): void {
    switch (door) {
      case 'driver':
        console.log(`abre a porta ${d}`);
      break;
      case 'passenger':
        console.log(`abre a porta ${d}`);
      break;
      case 'backDoorLeft':
        console.log(`abre a porta ${d}`);
      break;
      case 'backDoorRigth':
        console.log(`abre a porta ${d}`);
      break;    
      default:
        console.log('Informe uma das opções: driver, passenger, backDoorLeft ou backDoorRigth');
        break;
    }
  }

  closeTheDoor(d:enumDoor, door: string): void {
    switch (door) {
      case 'driver':
        console.log(`fecha a porta ${d}`);
      break;
      case 'passenger':
        console.log(`fecha a porta ${d}`);
      break;
      case 'backDoorLeft':
        console.log(`fecha a porta ${d}`);
      break;
      case 'backDoorRigth':
        console.log(`fecha a porta ${d}`);
      break;    
      default:
        console.log('Informe uma das opções: driver, passenger, backDoorLeft ou backDoorRigth');
        break;
    }
  }

  turnOn(): void {console.log(`Liga o carro`)};
  turnOff(): void {console.log(`Desliga o carro`)}
  speedUp(): void {console.log(`Acelera o carro`)}
  speedDown(): void {console.log(`Desacelera o carro`)}
  stop(): void {console.log(`Para o carro`)}
  turn(d: enumDirection, comand: string): void {
    console.log(`${comand} ${d}`);
  }
}

const car = new Car('volkswagen', enumColor.silver, 4);

car.turnOn();
car.speedUp();
car.turn(enumDirection.left, 'Em 600 metros vire a');
car.turn(enumDirection.left, 'Vire a');
car.turn(enumDirection.rigth, 'Em 200 metros na rotatória pegue a segunda saída a');
car.turn(enumDirection.rigth, 'Em 300 metros vire a');
car.turn(enumDirection.rigth, 'Vire a');
car.speedDown();
car.stop();
car.openTheDoor(enumDoor.backDoorRigth, 'backDoorRigth');
car.closeTheDoor(enumDoor.backDoorRigth, 'backDoorRigth');
car.speedUp();
car.turn(enumDirection.rigth, 'Vire a');
car.speedDown();
car.stop();
car.turnOff();
