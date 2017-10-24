import { SAVE_EVENT } from '../actions';

export default function(state={}, action) {
	switch (action.type) {
		case SAVE_EVENT:
			return {...state, [action.payload.uri]: action.payload}
		default:
			return state
	}
}