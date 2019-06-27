import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state,ownProps) => {
  // debugger
  return {
    // pokemon: state.entities.pokemon
    pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
  }
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail);