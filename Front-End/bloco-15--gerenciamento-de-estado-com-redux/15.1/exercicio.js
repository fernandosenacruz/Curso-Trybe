import { createStore } from 'redux';

const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';

 const ESTADO_INICIAL = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case PREVIOUS_COLOR:
      return {
        
      }

      case NEXT_COLOR:
      return {
        
      }

    default:
      return state;
  }
}

const store = createStore(reducer);