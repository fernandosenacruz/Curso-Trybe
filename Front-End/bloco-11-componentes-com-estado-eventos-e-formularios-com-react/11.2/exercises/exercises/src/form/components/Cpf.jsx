/*
CPF - Texto
Limite de 11 caracteres
Campo obrigatório
*/
import React from 'react';
import '../../App.css';

export default class Cpf extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    let error = undefined;
    if (typeof value !== 'number') error = 'Apenas números viu!'
    return (
      <label className="">
        CPF:
        <input
          type="text"
          name="cpf"
          id="cpf"
          value={value}
          onChange={handleChange}
          maxLength="11"
          required
        />
        <span>{ error ? error : '' }</span>
        <br />
      </label>
    );
  }
}
