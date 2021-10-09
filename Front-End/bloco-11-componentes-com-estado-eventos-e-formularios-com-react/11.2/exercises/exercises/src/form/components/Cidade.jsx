/*
Cidade - Texto
Limite de 28 caracteres
Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. 
Caso comece, limpar o campo.
Campo obrigatório.
*/
import React from "react";
import '../../App.css';

export default class Cidade extends React.Component{
  render() {
    const {value, handleChange } = this.props;
    return (
     <label className="">
        Cidade: 
        <input
          type="text"
          name="cidade"
          id="cidade"
          value={value}
          onBlur={handleChange}
          maxLength="28"
          required
        />
      </label> 
    )
  }
}