import { INIT_USER, INIT_USER_SUCCESS, INIT_USER_ERROR, LOGOUT_USER } from "../actionTypes/usersAT";

const initialState = { users: {} }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, users: action.payload }

    default:
      return state
  }
}
