const Redux = require('redux');

const ximira = (email) => ({
  type: 'LOGIN',
  email});

const INITIAL_STATE = {
  login: false,
  email: '',
};


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
        return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(ximira('ximira_xelo@xamail.com'))

console.log(store.getState());
