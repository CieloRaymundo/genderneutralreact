import { CURR_POS } from '../actions/';

// action creator
function getUserPos() {
  const location = navigator.geolocation.getCurrentPosition;
  
  return {
    type: CURR_POS,
    payload: location
  };
}


// action reducer
const initialState = {}

export default function userPostion(state = initialState, action) {
  const payload = action.payload;
  
  switch (action.type) {
    case 'CURR_POS':
      return {
        ...state, 
        payload
      };
    
    default:
      return state
  }
}

