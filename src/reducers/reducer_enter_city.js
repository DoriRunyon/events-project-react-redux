import { ENTER_CITY } from '../actions/index';

export default function(state = null, action) {
 switch(action.type) {
    case ENTER_CITY:
      return action.payload;
 }

 return state;
}