/* 1 - Pokemon : como o próprio nome diz, esse componente representa um pokemon.
Esse componente recebe como entrada um objeto que contém informações referentes 
a um pokemon específico. Esse componente precisa retornar as seguintes informações
obrigatórias para serem mostradas para quem usar a aplicação,
essas informações devem ser validadas utilizando PropTypes:
nome do pokemon;
tipo do pokemon;
peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon.
*/

/* 2 - Pokedex : esse componente representa a enciclopédia de pokemons. 
Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.
Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.
*/

/*Altere a sua página para que, ao invés de exibir toda a lista de pokémons, ela exiba um pokémon por vez. 
Ao apertar um botão de Próximo pokémon, a página passa a exibir o próximo pokémon da lista,
 e depois o próximo, e assim sucessivamente. Ao se chegar ao último pokémon da lista, 
 a pokedex deve voltar para o primeiro pokémon no apertar do botão. Dica: Lembre-se disso!
 */

 /*Sua pokedex deve ter dois botões contendo os tipos Fire e Psychic. A partir dessa seleção, 
 a pokedex deve circular somente pelos pokémons daquele tipo. Quando a página carrega, um desses 
 filtros deve estar selecionado.
 */

import Pokemon from './Data';
import array_pokemon from './array_pokemon';
import React from 'react';
// import ToggleSwitch from './ToggleSwitch';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      position: 0,
      disabled: false,
      type: 'fire',
      array: [],
      // Psychic: true,
    };
  }

  xelo = (char) => {
    this.setState((prevState, _props) => {
      let heman;
      if (char === 'a')
        this.state.position + 1 === array_pokemon.length
          ? (heman = 0)
          : (heman = prevState.position + 1);
      if (char === 'b')
        this.state.position - 1 < 0
          ? (heman = array_pokemon.length - 1)
          : (heman = prevState.position - 1);
      return {
        position: heman,
      };
    });
  };

  shera = () => {
    const gorpo = array_pokemon.filter((poke) => poke.type === this.state.type);
    this.setState((prevState, _props) => {
      if (gorpo.length !== 0) {
        prevState.disabled = false;
      } else {
        prevState.disabled = true;
      }
    });
    return gorpo;
  }

  render() {
    return (
      <>
        <h1 className="xibil">FATDex</h1>
        <main>
          <div className="ximira">
            <Pokemon
              key={array_pokemon[this.state.position].name}
              pokemon={array_pokemon[this.state.position]}
            />
          </div>
          <section className='xelo'>
            <button onClick={() => this.shera()}>Fire</button>
            {/* <ToggleSwitch Name='Psychic' checked={this.state.Psychic}>Psychic</ToggleSwitch> */}
          </section>
          <button disabled={this.state.disabled} onClick={() => this.xelo('b')}>Previous pokemon</button>
          <button disabled={this.state.disabled} onClick={() => this.xelo('a')}>Next pokemon</button>
        </main>
      </>
    );
  }
}
