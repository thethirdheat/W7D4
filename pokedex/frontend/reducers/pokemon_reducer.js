import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {

  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;