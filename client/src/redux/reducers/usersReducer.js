import { INIT_USER, ADD_USERS, INIT_USER_SUCCESS, INIT_USER_ERROR, LOGOUT_USER } from "../actionTypes/usersAT";

const initialState = { users: {} }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_USER":
      return { ...state, users: action.payload.name }

    case "ADD_USERS":
        console.log(action.payload)
        localStorage.setItem('user', action.payload.name)
      return { ...state, users: action.payload.name}  

    case "DEL_USER":
      localStorage.removeItem('user')
      return { ...state, users: '' }

    default:
      return state
  }
}
