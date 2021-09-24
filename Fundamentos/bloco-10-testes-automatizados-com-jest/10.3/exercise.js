const randomNumber = () => Math.floor(Math.random() * 101);

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) => str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
    response
      .json()
      .then((json) =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = {
  randomNumber,
  firstFunction,
  secondFunction,
  thirdFunction,
  fetchDog,
};
