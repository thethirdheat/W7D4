import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from '../frontend/components/root';

//for testing
import { fetchAllPokemon } from './util/api_util';
import { receiveAllPokemon , requestAllPokemon } from './actions/pokemon_actions';
import { selectAllPokemon } from './reducers/selectors';



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");

  let store = configureStore();

  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store}/>, root);
});