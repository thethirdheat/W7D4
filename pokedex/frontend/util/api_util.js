export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'Get',
    url: 'api/pokemon'
  });
};