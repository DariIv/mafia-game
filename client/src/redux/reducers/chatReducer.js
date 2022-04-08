import { ADD_MESS } from "../actionTypes/shatAT";
const initialState = { mess: [] };

export const messReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESS:
      return { ...state, mess: [...state.mess, action.payload] };

    default:
      return state;
  }
};
