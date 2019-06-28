import { connect } from 'react-redux';
import { ItemDetail } from './item_detail';
// import { selectPokemonItem } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state,ownProps) => {
  // const itemIdstate.entities.items
  return {
  // items: selectPokemonItem(state,itemId)
  items: state.entities.items
 }
};


export default withRouter(connect(mapStateToProps,null)(ItemDetail));