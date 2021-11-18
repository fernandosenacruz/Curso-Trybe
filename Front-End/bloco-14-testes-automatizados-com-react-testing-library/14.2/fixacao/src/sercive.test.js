import * as service from '../services/service';

describe('1. Crie uma função que gere um número aleatório', () => {
  
  it('Utilize o mock e defina o retorno padrão como 10', () => {
    service.randomNumber= jest.fn().mockReturnValue(10);
    
    expect(service.randomNumber()).toBe(10);
  });

  it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
    service.randomNumber= jest.fn().mockReturnValue(5);
    
    expect(service.randomNumber()).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez', () => {
  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((x, y) => x / y);

    expect(service.randomNumber(100, 10)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(100, 10);
  });

  it('Verifique se a aplicação da nova implementação acontece apenas uma vez', () => {
    service.randomNumber= jest.fn().mockReturnValue(10);
    
    expect(service.randomNumber()).toBe(10);
  });
});

describe('3. Use a mesma função do primeiro exercício', () => {
  
  it('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros e Retorne a multiplicação dos parâmetros', () => {
    service.randomNumber = jest.fn().mockImplementation((x, y, z) => x * y * z);

    expect(service.randomNumber(1, 2, 3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalledWith(1, 2, 3);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro', () => {
    service.randomNumber = jest.fn().mockReset();
    service.randomNumber = jest.fn().mockImplementation((x) => x * 2);

    expect(service.randomNumber(10)).toBe(20);
  });
});

describe('4. a) Faça o mock das funções para com os seguintes casos', () => {
  
  it('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa', () => {
    service.toUpperCase = jest.fn().mockImplementation((string) => string.toLowerCase());

    expect(service.toUpperCase('AbcDe')).toBe('abcde');
    expect(service.toUpperCase).toHaveBeenCalledWith('AbcDe');
    expect(service.toUpperCase).toHaveBeenCalledTimes(1);
  });

  it('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string', () => {
    service.firstChar = jest.fn().mockImplementation((string) => {
      const CHAR = string.split('');
      return CHAR[CHAR.length -1];
    });

    expect(service.firstChar('ximira')).toBe('a');
  });

  it('Implemente, na terceira função: ela deve receber três strings e concatená-las', () => {
    service.concatStrings = jest.fn().mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

    expect(service.concatStrings('ximira', 'xelo', 'xibiu')).toBe('ximiraxeloxibiu');
  });
});

describe('4. c) Após criar os testes, restaure a implementação da primeira função', () => {
  // service.toUpperCase = jest.fn();
  // afterEach(service.toUpperCase.mockReset);
  it('Faça o teste necessário para garantir que a implementação da função foi restaurado', () => {
    service.toUpperCase = jest.fn().mockReset();
    service.toUpperCase = jest.fn().mockImplementation((string) => string.toUpperCase());
    service.firstChar = jest.fn().mockReset();
    service.firstChar = jest.fn().mockImplementation((string) => {
      const CHAR = string.split('');
      return CHAR[0];
      });
    service.concatStrings = jest.fn().mockReset();
    service.concatStrings = jest.fn().mockImplementation((str1, str2) => `${str1}${str2}`);

    expect(service.toUpperCase('ximira')).toBe('XIMIRA');
    expect(service.firstChar('thundercats')).toBe('t');
    expect(service.concatStrings('abc', '123')).toBe('abc123');
  });
});

describe('5. Mocke a requisição e crie dois testes', () => {
  // service.fetchDog = jest.fn();
  // afterEach(service.fetchDog.mockReset);

  it('O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess"', async () => {
    service.fetchDog = jest.fn().mockResolvedValue("request sucess");

    await expect(service.fetchDog()).resolves.toBe("request sucess");
    expect(service.fetchDog).toHaveBeenCalled();
  });

  it('O segundo deve interpretar que a requisição falhou e ter como valor "request failed"', async () => {
    service.fetchDog = jest.fn().mockRejectedValue("request failed");

    await expect(service.fetchDog()).resolves.toBe("request failed");
    expect(service.fetchDog).toHaveBeenCalled();
  });
});
