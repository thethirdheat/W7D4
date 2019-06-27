import React from 'react';


class PokemonIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render () {
    return (
      <div>
        {this.props.pokemon.map(poke => (
          <div>
            <div>{poke.name}</div>
            <img src={poke.image_url}/>
          </div>
        ))}
      </div>
    );
  }

}

export default PokemonIndex;