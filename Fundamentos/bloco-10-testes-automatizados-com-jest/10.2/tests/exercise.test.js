const {
    uppercase,
    users,
    findUserById,
    getUserName,
    getRepos,
} = require ('../exercise');

describe('Retorna uma string de letras maiúsculas', () => {
    it('deveria retornar ABCDEF', (done) => {
        uppercase('abcdef', (result) => {
            try {
                expect(result).toBe('ABCDEF');
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});

describe('Verifica se um usuário foi encontrado em um banco de dados', () => {
    it('Deveria retornar um usuário', async () => {
        try {
            const getUser = await getUserName(3);
            expect(getUser).toBe('Mark');
        } catch (error) {
            expect(error).toEqual(new Error('User with 3 not found.'));
        }
    });
});

describe("Verifica um usuário do gitHub", () => {
    it('Deveria encontrar seus repositŕios', async () => {
        try {
            const getRep = await getRepos('https://api.github.com/orgs/tryber/repos');
            const repos = getRep.filter((e) => e === 'sd-01-week4-5-project-todo-list' || e === 'sd-01-week4-5-project-meme-generator');
            expect(repos).toEqual(['sd-01-week4-5-project-meme-generator','sd-01-week4-5-project-todo-list']);
        } catch (error) {
            expect(error).toEqual(new Error('ximira'));
        }
    });
})