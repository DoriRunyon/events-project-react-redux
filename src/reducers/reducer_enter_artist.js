export default function(state = null, action) {
 switch(action.type) {
    case 'ENTER_ARTIST':
      return action.payload;
 }

 return state;
}