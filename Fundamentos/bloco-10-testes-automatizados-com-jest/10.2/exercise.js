const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);


// assistir aula do oliva 13 b dia 10.2 aula ao vivo para entender promisse

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
  .then(response => response.json())
  .then((data) => {
    return data.map((repo) => repo.name);
    });
  };

  module.exports = {
      users,
      uppercase,
      findUserById,
      getUserName,
      getRepos,
  };