import React from 'react';
import '../../App.css';
import Nome from './components/Nome';

export default class Form extends React.Component {
  constructor() {
    super();
  }

  handleChange = () => {};

  render() {
    return (
      <form>
        <Nome />
      </form>
    );
  }
}
