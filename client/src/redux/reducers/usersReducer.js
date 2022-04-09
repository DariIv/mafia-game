import { INIT_USER, ADD_USERS, INIT_USER_SUCCESS, INIT_USER_ERROR, LOGOUT_USER } from "../actionTypes/usersAT";

const initialState = { users: {} }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_USER:
      return { ...state, users: action.payload }

    case ADD_USERS:
      return { ...state, users: [...state.users, action.payload]}  

    default:
      return state
  }
}
