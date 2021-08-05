import FiltersReducer from './filters_reducer';

const UiReducer = combineReducers({
  filters: FiltersReducer
})

export default UiReducer;