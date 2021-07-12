import { combineReducers } from "redux";
import ticketsReducer from "./tickets/reducer";

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
