import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super() 
    this.clickNoBotão = this.clickNoBotão.bind(this)
      this.state = {
        clicks: 0,
        style: {color: "green"}
    }
  }

  clickNoBotão() {
    this.setState((previousState, _props) => {
      console.log(previousState.style.color)
      const ximira = previousState.style.color === "green" ? "black" : "green"
      return{
        clicks: previousState.clicks + 1,
        style: {color: ximira}
      } 
    })
  }

  render() {
    return (
      <div>
        <h1>Evento e Estado</h1>
        <button onClick={ this.clickNoBotão} style={{color: this.state.style.color}}>Benjamim Button: { this.state.clicks }</button>
      </div>
    )  
  }
}
