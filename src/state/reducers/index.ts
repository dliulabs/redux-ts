import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

// https://redux.js.org/usage/usage-with-typescript#type-checking-middleware
export type RootState = ReturnType<typeof reducers>;
export default reducers;
