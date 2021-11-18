import React from 'react'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import clickReducer from './reducers';
import App from './App';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText, getByRole } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = getByRole('button', { name: /clique aqui/i });

    expect(queryByText('5')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);

    expect(queryByText('6')).toBeInTheDocument();

  });
});
