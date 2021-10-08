/*
Nome - Texto
Limite de 40 caracteres
Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
Campo obrigatório
*/
import React from 'react';
import '../../App.css';

export default class Nome extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label className="">
        Nome:
        <textarea name="nome" value={value} onChange={handleChange} maxLength='40'/>
      </label>
    );
  }
}
