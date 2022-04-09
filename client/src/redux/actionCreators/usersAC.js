import { INIT_USER, ADD_USERS } from '../actionTypes/usersAT'

export const initUserAC = (payload) => {
  return {
    type: INIT_USER,
    payload
  }
}

export const addUserAc = (payload) => {
  return {
    type: ADD_USERS,
    payload
  }
}
