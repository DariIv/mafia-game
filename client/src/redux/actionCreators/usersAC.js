import { ADD_USERS } from '../actionTypes/usersAT'
export const addUserAc = (payload) => {
  return {
    type: ADD_USERS,
    payload
  }
}
