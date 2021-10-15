import React, { Component }from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
        loading: true,
    };
  }

  fetchCharacters = async () => {
    this.setState(
      { loading: true },
      async () => {
        const requestHeaders = { headers: { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'}}
        const requestReturn = await fetch('https://rickandmortyapi.com/api/character', requestHeaders)
        const requestObj = await requestReturn.json()
        this.setState({
          characters: requestObj.results,
          loading: false,
        })
      })
    }

  componentDidMount = () => this.fetchCharacters();

  render() {
    const { characters, loading } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        { loading ? (
          <span>Loading</span>
        ) : (
          <div className="body">
          {characters.map(({ name, image}) => {
            return(
              <div className="container" key={ name }>
                <h3>{ name }</h3>
                <img src={ image } alt={ name } />
              </div>  
              )
            })}
          </div>)
        }   
      </div>
    )
  }
}