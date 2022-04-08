import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { gameReducer } from "./gameReducer";

export const rootReducer = combineReducers({
  usersReducer,
  // gameReducer
})
