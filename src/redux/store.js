import { legacy_createStore as createStore } from "redux";
import AppReducer from "./reducer";

export const store = createStore(AppReducer);
