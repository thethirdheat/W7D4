import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    // const PokemonId = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(this.props);
  }

  componentDidUpdate(prevProps){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    if (!this.props.pokemon) return null;
    // debugger
  
    return(
      <div>
        {this.props.pokemon.name}
      </div>
    )
  }
}

export default PokemonDetail;