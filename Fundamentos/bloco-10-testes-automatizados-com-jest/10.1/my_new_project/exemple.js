// loginValidation.js
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};

const loginErrorMessage = (user) => {
  return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
};

const user = {
  userName: "Joana",
  password: 123456,
};

const verifyCredentials = ({ userName, password }) => {
  if (password === 123456 && userName === "Joana") {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

const { userName, password } = user;


let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

// console.log(myName.firstName); // Carol
// console.log(identity.firstName); // Carol

const multiplyByTwo = (number) => {
    if (!number) {
        throw new Error('number é indefinido')
    }
    return number * 2;
};

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials, multiplyByTwo , workDays, weekDays, myName, identity }