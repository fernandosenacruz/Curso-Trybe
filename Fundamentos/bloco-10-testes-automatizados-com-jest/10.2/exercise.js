const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

const users = [
  { id: 1, name: "Mark" },
  { id: 2, name: "Paul" },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

// assistir aula do oliva 13 b dia 10.2 aula ao vivo para entender promisse

const fetch = require("node-fetch");

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

const Animals = [
  { name: "Dorminhoco", age: 1, type: "Dog" },
  { name: "Soneca", age: 2, type: "Dog" },
  { name: "Preguiça", age: 5, type: "Cat" },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: "Não possui esse tipo de animal." });
    }, 100);
  });

const getListAnimals = (type) => findAnimalsByType(type).then((list) => list);

const findAnimalByName = (name) => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrAnimals = Animals.find((animal) => animal.name === name);
      if (arrAnimals !== undefined) {
        return resolve(arrAnimals);
      }
      return reject('Nenhum animal com esse nome!');
    }, 200);
  });


const getAnimal = (name) => findAnimalByName(name).then((obj) => obj);

module.exports = {
  users,
  Animals,
  uppercase,
  findUserById,
  getUserName,
  getRepos,
  getListAnimals,
  getAnimal,
  findAnimalByName,
};
