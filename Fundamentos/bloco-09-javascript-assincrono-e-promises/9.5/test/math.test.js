const math = require("../math");
jest.mock("../math");

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

test("#subtrair", () => {
  math.subtrair.mockImplementation((a, b) => a - b);
  math.subtrair(1, 2);
  math.subtrair(10, 5);

  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(2);
  expect(math.subtrair).toHaveBeenCalledWith(1, 2);
  expect(math.subtrair).toHaveBeenCalledWith(10, 5);
  expect(math.subtrair(1, 2)).toBe(-1);
  expect(math.subtrair(10, 5)).toBe(5);
});

test("#multiplicar", () => {
  const multiplicacao = jest
  .spyOn(math, 'multiplicar')
  .mockReturnValue(10);
  // math.multiplicar(2, 5);
  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar).toHaveBeenCalled();
    // implementação diferente
    // .spyOn(math, "multiplicar")
    multiplicacao.mockImplementation((a, b) => a / b);

  math.multiplicar(6, 2);
  expect(multiplicacao).toHaveBeenCalledTimes(2);
  expect(multiplicacao(6, 2)).toBe(3);
  expect(multiplicacao).toHaveBeenCalledTimes(3);
  expect(multiplicacao).toHaveBeenLastCalledWith(6, 2);

  // restaurando a implementação original
  math.multiplicar.mockRestore();
  math.multiplicar.mockImplementation((a, b) => a * b);
  expect(math.multiplicar(2, 2)).toBe(4);
});

test('#dividir', () => {
  math.dividir = jest.fn()
  .mockReturnValue(15)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(5);

  expect(math.dividir()).toBe(2);
  expect(math.dividir()).toBe(5);
  expect(math.dividir()).toBe(15);
  expect(math.dividir).toHaveBeenCalled();
  expect(math.dividir).toHaveBeenCalledTimes(3);
})