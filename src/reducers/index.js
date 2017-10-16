import { combineReducers } from 'redux';
import EnterCity from './reducer_enter_city';
import EnterArtist from './reducer_enter_artist';
import RelatedArtists from './reducer_related_artists';

const rootReducer = combineReducers({
  city: EnterCity,
  artist: EnterArtist,
  relatedArtists: RelatedArtists
});

export default rootReducer;