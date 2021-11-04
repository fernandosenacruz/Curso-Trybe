/*
1 - Crie uma função que gere um número aleatório
Defina uma função que gere um número aleatório entre 0 e 100.
*/

export function randomNumber() {
  return Math.round(Math.random() * 101);
}

/*
4 - Crie três funções.
Desenvolva a primeira função: essa função deve receber uma string e retorná-la em caixa alta.
Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
Elabore a terceira função: essa função deve receber duas strings e concatená-las.
*/

export function toUpperCase(string) {
  return string.toUpperCase();
}

export function firstChar(string) {
  const CHAR = string.split('');
  return CHAR[0];
}

export function concatStrings(str1, str2) {
  return `${str1}${str2}`;
}

/*
5 - Crie uma função que faça requisição para a api dog pictures
*/

export async function fetchDog() {
  const RESPONSE = await fetch("https://dog.ceo/api/breeds/image/random");
  const JSON = await RESPONSE
    .json();
  return await (
    RESPONSE.ok ? Promise.resolve(JSON) : Promise.reject(JSON));
}
