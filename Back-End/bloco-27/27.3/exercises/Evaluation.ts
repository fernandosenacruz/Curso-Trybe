import Teacher from './Teacher';

export default class Evaluation {
    private _teacher: Teacher;
    private _score: number = Number();

    constructor(teacher: Teacher, score: number) {
        this._teacher = teacher;
        this.score = score;
    }

    get teacher(): Teacher {
        return this._teacher;
    }

    set teacher(value: Teacher) {
        this._teacher = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        if (value < 0) throw new Error('A pontução deve ser positiva.');

        this._score = value;
    }

}