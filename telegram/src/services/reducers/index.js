import { combineReducers } from "redux";
import { planReducer } from "./plans.Reducer";

export const mainReducers = combineReducers({
  planReducer,
});
