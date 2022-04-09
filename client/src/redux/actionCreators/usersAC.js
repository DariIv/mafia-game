import { INIT_USER } from '../actionTypes/usersAT'

export const initUserAC = (payload) => {
  return {
    type: INIT_USER,
    payload
  }
}
