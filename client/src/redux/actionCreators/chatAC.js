import { ADD_MESS } from "../actionTypes/shatAT";
export const addMessAC = (payload) => {
  return {
    type: ADD_MESS,
    payload,
  };
};
