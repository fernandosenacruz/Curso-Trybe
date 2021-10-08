import React from 'react';
import '../App.css';
import Nome from './components/Nome';

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      uf: '',
      complemento: false,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    let value  = 
      target.type === 'checkbox' ? target.checked : target.value;

    if (target.type === 'textarea') value = target.value.toUpperCase();
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form className="form">
        <Nome value={this.state.nome} handleChange={this.handleChange} />
      </form>
    );
  }
}
