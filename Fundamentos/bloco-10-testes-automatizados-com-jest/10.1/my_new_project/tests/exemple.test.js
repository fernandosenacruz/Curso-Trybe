// // loginValidation.test.js
// const {
//   greetingMessage,
//   loginErrorMessage,
//   verifyCredentials,
//   multiplyByTwo,
//   weekDays,
//   workDays,
//   identity,
//   myName,
// } = require("../exemple.js");

// describe("a função verifyCredentials()", () => {
  
//   it("verifyCredentials() calls the correct function depending on the user and password input", () => {
    
//     const user = {
//       userName: 'Bob',
//       password: 123456,
//     };
      
//     const { userName, password } = user;

//     expect(verifyCredentials({ userName, password })).toBe(
//       "Hello, Joana! Que bom ter você de volta"
//     ); 
//   });

//   it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
//     expect(greetingMessage("Lucas")).toBe(
//       "Hello, Lucas! Que bom ter você de volta"
//     );
//   });

//   it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
//     expect(loginErrorMessage("Bob")).toBe(
//       "Pessoa usuária 'Bob' não encontrada, tente novamente!"
//     );
//   });  
// });

// test('array and object equality', () => {
//   const arr = [1, 2 ,3];
//   const obj = { a: 1, b: 2, c: 3};

//   expect(arr).toBe([1, 2, 3]); // fails
//   expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
//   expect(arr).toEqual([1, 2, 3]); // OK
//   expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
// });

// test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
//   expect(multiplyByTwo(4)).toBe(8);
// });
// test('testa se é lançado um erro quando number é indefinido', () => {
//   expect(() => { multiplyByTwo() }).toThrow();
// });
// test('testa se a mensagem de erro é "number é indefinido"', () => {
//   expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
// });

// test('Sunday is a week day', () => {
//   expect(weekDays).toContain('Sunday');
// });

// test('Sunday is not a workday', () => {
//   expect(workDays).not.toContain('Sunday');
// });