import { combineReducers } from 'redux';
import EnterCity from './reducer_enter_city';
import EnterArtist from './reducer_enter_artist';
import RelatedArtists from './reducer_related_artists';
import Events from './reducer_events';
import SavedEvents from './reducer_saved_events';

const rootReducer = combineReducers({
  city: EnterCity,
  artist: EnterArtist,
  relatedArtists: RelatedArtists,
  events: Events,
  savedEvents: SavedEvents
});

export default rootReducer;