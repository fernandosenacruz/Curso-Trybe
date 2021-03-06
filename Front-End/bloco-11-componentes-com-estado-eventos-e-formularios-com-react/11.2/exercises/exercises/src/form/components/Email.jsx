/*Email - Texto
Limite de 50 caracteres
Campo obrigatório
*/
import React from 'react';
import '../../App.css';

export default class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label className="">
        e-mail:
        <input
          type="email"
          name="email"
          value={value}
          onChange={handleChange}
          maxLength="50"
          required
        />
      </label>
    );
  }
}
