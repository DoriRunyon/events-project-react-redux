import { combineReducers } from 'redux';
import EnterCity from './reducer_enter_city';

const rootReducer = combineReducers({
  city: EnterCity
});

export default rootReducer;