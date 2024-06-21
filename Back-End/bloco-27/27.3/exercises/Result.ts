import Evaluation from './Evaluation';

export default class EvaluationResult {
    private _evaluation: Evaluation;
    private _score: number = Number();

    constructor(evaluation: Evaluation, score: number) {
        this._evaluation = evaluation;
        this.score = score;
    }

    get evaluation(): Evaluation {
        return this._evaluation;
    }

    set evaluation(value: Evaluation) {
        this._evaluation = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        if (value < 0) throw new Error('A pontução deve ser positiva.');
        if (value > this.evaluation.score) {
            throw new Error(`A pontução máxima é ${this._evaluation.score} pontos.`);
        }

        this._score = value;
    }

}
