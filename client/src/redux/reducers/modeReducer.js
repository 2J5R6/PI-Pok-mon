import { SET_MODE } from '../actions/actionTypes';

const initialState = {
  mode: 'db',
};

const modeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default modeReducer;
