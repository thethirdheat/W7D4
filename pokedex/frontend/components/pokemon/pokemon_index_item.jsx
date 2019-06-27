import React from 'react';
import { Link } from 'react-router-dom';
// import { fetchOnePokemon } from '../../actions/pokemon_actions';

export const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.id}`}>
        <p>{props.pokemon.name}</p>
        <img src={props.pokemon.image_url}/>
      </Link>
    </li>
  );
}

// window.fetchOnePokemon = fetchOnePokemon;