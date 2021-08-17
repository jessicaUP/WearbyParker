// // import { CHANGE_FILTER, CLEAR_FILTER } from '../actions/'

// const defaultFilters = {
//   name: [],
//   color: [],
//   shape: [],
//   frameWidth: [],
//   material: [],
//   nose_bridge: []
// }

// const filtersReducer = (state = defaultFilters, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case CHANGE_FILTER:
//       return Object.assign({}, state, { [action.filter]: action.value })
//     case CLEAR_FILTER:
//       return defaultFilters;
//     default:
//       return state;
//   }
// }

// export default filtersReducer;