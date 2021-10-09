import React from 'react';
import '../App.css';
import Cidade from './components/Cidade';
import Cpf from './components/Cpf';
import Email from './components/Email';
import Endereco from './components/Endereco';
import Nome from './components/Nome';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      uf: '',
      complemento: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (target.id === 'nome') value = target.value.toUpperCase();
    if (target.id === 'cpf') value = target.value.match(/\d+/g);
    if (target.id === 'cidade') value = 'ximira' // implementar a lógica de retirar números

    this.setState({
      [name]: value,
    });
  };
  
  render() {
    return (
      <form className="form">
        <Nome value={this.state.nome} handleChange={this.handleChange} />
        <Email value={this.state.email} handleChange={this.handleChange} />
        <Cpf value={this.state.cpf} handleChange={this.handleChange} />
        <Endereco value={this.state.endereco} handleChange={this.handleChange} />
        <Cidade value={this.state.cidade} handleChange={this.handleChange} />
      </form>
    );
  }
}
