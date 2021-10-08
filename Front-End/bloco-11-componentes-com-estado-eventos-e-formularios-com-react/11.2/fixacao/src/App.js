import React from 'react';
import './App.css';
import Form from './Form';

export default class App extends React.Component {
   constructor() {
    super();
    this.state = {
      textoDigitado: '',
      idade: 0,
      eDentu: false,
    };
  }
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value)

    this.setState({
      [name]: value,
    });
  };
  render(){
    return (
     <Form handleChange={ this.handleChange }/> 
    );
  }
}
