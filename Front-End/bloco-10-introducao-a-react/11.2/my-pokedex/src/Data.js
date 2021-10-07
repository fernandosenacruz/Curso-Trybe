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

import React from 'react';
import PropTypes from 'prop-types';

/* 2 - Pokedex : esse componente representa a enciclopédia de pokemons. 
Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.
Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon.
*/

export default class Pokemon extends React.Component {
  render() {
    const {pokemon: {name, type, image, moreInfo,averageWeight:{value, measurementUnit}}} = this.props;
    return (
      <section>
        <h3>{name}</h3>
        <p>Tipo: {type}</p>
        <p>
          Peso:{' '}
          {`${value}/${measurementUnit}`}
        </p>
        <img src={image} alt={moreInfo} />
      </section>
    );
  }
}

Pokemon.proptype = {
    pokemon: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.number,
        measurementUnit: PropTypes.string,
    })).isRequired,
};

Pokemon.defaultProps = {
    pokemon: []
}
