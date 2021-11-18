import { createStore } from 'redux';

const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const NEXT_COLOR = 'NEXT_COLOR';
const BTN_PREVIOUS_COLOR = document.getElementById('previous');
const BTN_NEXT_COLOR = document.getElementById('next');
const SPAN_COLOR = document.getElementById('value');


 const ESTADO_INICIAL = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };

const reducer = (state = ESTADO_INICIAL, action) => {
  const { index, colors } = ESTADO_INICIAL;
  switch (action.type) {
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: index === colors.length -1 ? index : index--,
      }

      case NEXT_COLOR:
      return {
        ...state,
        index: index++ === colors.length ? index : index++,
      }

    default:
      return state;
  }
};

console.log(BTN_PREVIOUS_COLOR)
BTN_PREVIOUS_COLOR.addEventListener('click', () => { console.log('qualqur coisa')});
BTN_NEXT_COLOR.addEventListener('click', () => { store.dispatch({ type: NEXT_COLOR }) });

const store = createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  console.log(colors, index);
})