import { connect } from 'react-redux';
import { ItemDetail } from './item_detail';
// import { selectPokemonItem } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,{ match }) => {
  debugger
  return {
    items: selectPokemonItem(state, match.params.itemId)
  // items: state.entities.items
 }
};


export default withRouter(connect(mapStateToProps,null)(ItemDetail));