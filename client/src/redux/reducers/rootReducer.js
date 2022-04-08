import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { messReducer } from "./chatReducer";

export const rootReducer = combineReducers({
  usersReducer,
  messReducer,
});
