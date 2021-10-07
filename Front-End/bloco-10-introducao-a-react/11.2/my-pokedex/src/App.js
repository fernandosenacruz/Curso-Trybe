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

import Pokemon from './Data';
import array_pokemon from './array_pokemon'
import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      position: 0
    }

    this.xelo = this.xelo.bind(this)
  }

xelo(char) {
    this.setState((prevState, _props) => {
      let heman;
    if (prevState.position < 0 || prevState.position === array_pokemon.length) {
      heman = 0
    }else {
    if (char === 'a') heman = prevState.position + 1;
    if (char === 'b') heman = prevState.position - 1;
    }
    return {
        position: heman
      }
    })
  }
  
  render() {
    return (
        <><h1 className='xibil'>FATDex</h1><main>
          <div className="ximira">
            <Pokemon key={array_pokemon[this.state.position].name} pokemon={array_pokemon[this.state.position - 1]} />
          </div>
          <button onClick={() => this.xelo('b')}>Previous pokemon</button>
          <button onClick={() => this.xelo('a')}>Next pokemon</button>
      </main></>
    )
  }
}
