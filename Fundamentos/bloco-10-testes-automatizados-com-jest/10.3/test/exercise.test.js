/*Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes 
para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi 
chamada, qual seu retorno e quantas vezes foi chamada.*/

const exercise = require('../exercise');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    exercise.randomNumber = jest.fn().mockReturnValue(10);
    
    expect(exercise.randomNumber()).toBe(10);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
});

/*Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
Essa implementação deve ocorrer uma única vez. Faça os testes necessários.*/

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  exercise.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(exercise.randomNumber(10, 2)).toBe(5);
  expect(exercise.randomNumber).toHaveBeenCalled();
  expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise.randomNumber).toHaveBeenCalledWith(10, 2);
});

/*Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação 
que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela,
resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. 
Faça os testes necessários.*/

describe("testando implementações", () => {
  test("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    exercise.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(exercise.randomNumber(2, 3, 4)).toBe(24);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.randomNumber).toHaveBeenCalledWith(2, 3, 4);
  });

  test("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    exercise.randomNumber.mockReset();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(0);

    exercise.randomNumber.mockImplementation(a => a * 2);

    expect(exercise.randomNumber(5)).toBe(10);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.randomNumber).toHaveBeenCalledWith(5);
  });
});

/*Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e 
retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira 
letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. 
Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em 
caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de 
uma string. A terceira deve receber três strings e concatená-las.*/

jest.mock("../exercise");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    exercise.firstFunction.mockImplementation(a => a.toLowerCase());

    expect(exercise.firstFunction("UPPERCASE")).toBe("uppercase");
    expect(exercise.firstFunction).toHaveBeenCalled();
    expect(exercise.firstFunction).toHaveBeenCalledTimes(1);
    expect(exercise.firstFunction).toHaveBeenCalledWith("UPPERCASE");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    exercise.secondFunction.mockImplementation(a => a.charAt(a.length - 1));

    expect(exercise.secondFunction("letter")).toBe("r");
    expect(exercise.secondFunction).toHaveBeenCalled();
    expect(exercise.secondFunction).toHaveBeenCalledTimes(1);
    expect(exercise.secondFunction).toHaveBeenCalledWith("letter");
  });

  test("mockando função que recebe 3 parâmetros e os concatena", () => {
    exercise.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));

    expect(exercise.thirdFunction("tr", "y", "be")).toBe("trybe");
    expect(exercise.thirdFunction).toHaveBeenCalled();
    expect(exercise.thirdFunction).toHaveBeenCalledTimes(1);
    expect(exercise.thirdFunction).toHaveBeenCalledWith("tr", "y", "be");
  });
});

/*Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira
função. Após repetir a implementação, restaure a implementação original e crie os testes 
necessários para validar.*/

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const first = jest
      .spyOn(exercise, "firstFunction")
      .mockImplementation(a => a.toLowerCase());

    expect(first("UPPERCASE")).toBe("uppercase");
    expect(first).toHaveBeenCalled();
    expect(first).toHaveBeenCalledTimes(2);
    expect(first).toHaveBeenCalledWith("UPPERCASE");

    exercise.firstFunction.mockRestore();
    first.mockImplementation(a => a.toUpperCase());
    expect(exercise.firstFunction("lowercase")).toBe("LOWERCASE");
  });
});

/*Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois 
testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request 
sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". 
Crie todos os testes que achar necessário.*/

describe("testando a requisição", () => {
  exercise.fetchDog = jest.fn();
  afterEach(exercise.fetchDog.mockReset);

  test("testando requisição caso a promisse resolva", async () => {
    exercise.fetchDog.mockResolvedValue("request sucess");

    exercise.fetchDog();
    expect(exercise.fetchDog).toHaveBeenCalled();
    expect(exercise.fetchDog).toHaveBeenCalledTimes(1);
    await expect(exercise.fetchDog()).resolves.toBe("request sucess");
    expect(exercise.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    exercise.fetchDog.mockRejectedValue("request failed");

    expect(exercise.fetchDog).toHaveBeenCalledTimes(0);
    await expect(exercise.fetchDog()).rejects.toMatch("request failed");
    expect(exercise.fetchDog).toHaveBeenCalledTimes(1);
  });
});