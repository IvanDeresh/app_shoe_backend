import { createStore } from "redux";
import { basketReducer } from "./basketReducer";
export const store = createStore(basketReducer);
