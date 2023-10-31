import { TOGGLE_MODE } from '../actions/modeActions';

const initialState = {
  darkMode: false
};

function modeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
}

export default modeReducer;
