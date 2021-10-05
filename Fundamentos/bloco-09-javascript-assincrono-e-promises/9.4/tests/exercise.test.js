const {
  users,
  Animals,
  uppercase,
  findUserById,
  getUserName,
  getRepos,
  getListAnimals,
  getAnimal,
  findAnimalByName,
} = require("../exercise");

// exercício 1
describe("Retorna uma string de letras maiúsculas", () => {
  it("deveria retornar ABCDEF", (done) => {
    uppercase("abcdef", (result) => {
      try {
        expect(result).toBe("ABCDEF");
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

// exercício 3
describe("Verifica se um usuário foi encontrado em um banco de dados", () => {
  it("Deveria retornar um usuário", async () => {
    try {
      const getUser = await getUserName(3);
      expect(getUser).toBe("Mark");
    } catch (error) {
      expect(error).toEqual(new Error("User with 3 not found."));
    }
  });
});

// exercício 4
describe("Verifica um usuário do gitHub", () => {
  it("Deveria encontrar seus repositŕios", async () => {
    try {
      const getRep = await getRepos("https://api.github.com/orgs/tryber/repos");
      const repos = getRep.filter(
        (e) =>
          e === "sd-01-week4-5-project-todo-list" ||
          e === "sd-01-week4-5-project-meme-generator"
      );
      expect(repos).toEqual([
        "sd-01-week4-5-project-meme-generator",
        "sd-01-week4-5-project-todo-list",
      ]);
    } catch (error) {
      expect(error).toEqual(new Error("ximira"));
    }
  });
});

// exercício 6
// 6.1
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
