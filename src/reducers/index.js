import { combineReducers } from 'redux';
import EnterCity from './reducer_enter_city';
import EnterArtist from './reducer_enter_artist';

const rootReducer = combineReducers({
  city: EnterCity,
  artist: EnterArtist
});

export default rootReducer;