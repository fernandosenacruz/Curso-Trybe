/*
Endereço - Texto
Limite de 200 caracteres
Remover qualquer caracter especial que seja digitado
Campo obrigatório
*/
import React from "react";
import '../../App.css';

export default class Endereco extends React.Component{
  render() {
    const {value, handleChange } = this.props;
    return (
      <label className="">
        Endereço: 
        <input
          type="text"
          name="endereco"
          id="endereco"
          value={value}
          onChange={handleChange}
          maxLength="200"
          required
        />
      </label>
    )
  }
}