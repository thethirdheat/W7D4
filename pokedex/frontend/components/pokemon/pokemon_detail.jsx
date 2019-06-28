import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const PokemonId = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(PokemonId);
  }

  componentDidUpdate(prevProps){
    // debugger
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    // debugger
    if (!this.props.pokemon) return null;
  
    return(
      <div>
        <p>{this.props.pokemon.name}</p>
        <img src={this.props.pokemon.image_url}/>
        <p>{ this.props.items }</p >
        <ItemDetailContainer />
      </div>
    )
  }
}

export default PokemonDetail;