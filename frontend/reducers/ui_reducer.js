import { combineReducers } from 'redux';
// import filtersReducer from './filters_reducer';
import modalsReducer from './modals_reducer';

const UiReducer = combineReducers({
  modal: modalsReducer,
  // filters: filtersReducer
})

export default UiReducer;