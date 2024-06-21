const connection = require('./connection');

const getAll = async () => {
  const [actors] = await connection.execute(
      'SELECT actor_id, first_name, last_name FROM sakila.actor;');
  
  return actors;
};

module.exports = {
  getAll,
};