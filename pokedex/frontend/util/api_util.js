export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'Get',
    url: 'api/pokemon'
  });
};


//look here if something breaks
export const fetchSinglePokemon = (pokeId) => {
  return $.ajax({
    method: 'Get',
    url: `api/pokemon/${pokeId}`
  });
};