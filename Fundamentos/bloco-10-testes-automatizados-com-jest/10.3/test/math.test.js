const math = require('../math');
jest.mock('../math');

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test('#subtrair', () => {
    math.subtrair = jest.fn()
    math.subtrair(1, 2);
    math.subtrair(10, 5);

    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(2);
    expect(math.subtrair).toHaveBeenCalledWith(1, 2);
    expect(math.subtrair).toHaveBeenCalledWith(10, 5);
    expect(math.subtrair(1, 2)).toBe(-1);
    expect(math.subtrair(10, 5)).toBe(5);
})

test("#multiplicar", () => {
  // testando a implementação original, o mock e a restauração da função original
    math.multiplicar = jest.fn()
  // criando o mock e substituindo a implementação para uma subtração
  expect(math.multiplicar(2, 5)).resolves.toBe(10);
  const multiplicar = jest
  // implementação original
  .spyOn(math, "multiplicar")
  .mockImplementation((a, b) => a / b);

  math.multiplicar(6, 2);
  expect(multiplicar).toHaveBeenCalledTimes(1);
  expect(multiplicar(6, 2)).toBe(3);
  expect(multiplicar).toHaveBeenCalledTimes(2);
  expect(multiplicar).toHaveBeenLastCalledWith(6, 2);

  // restaurando a implementação original
  math.multiplicar.mockRestore();
  expect(math.multiplicar(2, 2)).resolves.toBe(4);
});