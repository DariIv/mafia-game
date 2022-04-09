import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { messReducer } from "./chatReducer";
import { gameReducer } from "./gameReducer";

export const rootReducer = combineReducers({
  usersReducer,
  messReducer,
  gameReducer
});

