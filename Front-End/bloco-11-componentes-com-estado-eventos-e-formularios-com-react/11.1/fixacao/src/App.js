import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super() 
    this.clickNoBotão = this.clickNoBotão.bind(this)
      this.state = {
        clicks: 0
    }
  }

  clickNoBotão() {
    this.setState((previousState, _props) => ({
      clicks: previousState.clicks + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>Evento e Estado</h1>
        <button onClick={ this.clickNoBotão}>Benjamim Button: { this.state.clicks }</button>
      </div>
    )  
  }
}
