export default class OrderItem {
    private _name: string = String();
    private _price: number = Number();

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) throw new Error('O preço deve ser positivo.');
        this._price = value;
    }
};
