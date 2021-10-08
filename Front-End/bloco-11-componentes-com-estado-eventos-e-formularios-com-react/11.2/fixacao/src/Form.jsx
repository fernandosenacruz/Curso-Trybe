import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div>
        <h1>Exercício de Fixação</h1>
        <form className="form">
          <label>
            Escreve qualquer mera aí...
            <textarea
              name="textoDigitado"
              value={value}
              onChange={handleChange}
            />
          </label>
          <input
            type="number"
            name="idade"
            value={value}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            name="eDentu"
            value={value}
            onChange={handleChange}
          />
        </form>
      </div>
    );
  }
}
