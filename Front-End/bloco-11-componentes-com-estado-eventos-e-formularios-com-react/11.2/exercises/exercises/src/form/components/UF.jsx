/*
Estado - ComboBox
Todos os estados do Brasil
Campo obrigatório.
*/
import React from "react";
import '../../App.css';
import States from './states_data'

export default class UF extends React.Component{
  render() {
    const {value, handleChange } = this.props;
    return (
     <select id='states' value={value} name='uf' onChange={handleChange}>
      {States.map((state) => {
      return <option value={state} name='uf'>{ state }</option>
      })} 
     </select> 
    )
  }
}