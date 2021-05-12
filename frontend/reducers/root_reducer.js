import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import errors from './errors_reducer';
import sessionReducer from './session_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors
})

export default rootReducer;