import { FETCH_RELATED_ARTISTS } from '../actions/index';

export default function(state = null, action) {
 switch (action.type) {
    case FETCH_RELATED_ARTISTS:
      return action.payload.data;
 }

 return state;
}