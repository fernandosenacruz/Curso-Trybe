const {myRemove, sum} = require('../../../../bloco-07-introducao-a-javascript-es6-e-testes-unitarios/7.3/exercise');

describe('Implemente os testes jest ao bolco 7', () => {
    describe('Crie uma função que recebe dois valores e retorna a soma deles', () => {
        it('Retorne 10 quando os parametros forem 8 e 2 respectivamente', () => {
            expect(sum(8,2)).toBe(10);
        });
        it('Retorne 0 quando os parametros forem 0 e 0 respectivamente', () => {
            expect(sum(0,0)).toBe(0);
        });
        it('Retorna -1 queando os paramentors forem -3 e 2 respectivamente', () => {
            expect(sum(-3,2)).toBe(-1);
        });
        it('Retorna -5 queando os paramentors forem -3 e -2 respectivamente', () => {
            expect(sum(-3,-2)).toBe(-5);
        });
    });
    
    describe('Crie uma função que recebe um array com paramentro e remove um valor passado como segundo parametro', () => {
        it('Remove o valor 3 do array [1, 2, 3, 4]', () => {
            expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        });
        it('Verifique se o array [1, 2, 3, 4] não sofreu alterações', () => {
            expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        });
        it('Verifique e ao passa um um parametro não pertencente ao array passado', () => {
            expect(myRemove([1, 2, 3, 4], -5)).toEqual([1, 2, 3, 4]);
        });
    });
})
