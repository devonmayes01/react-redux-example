import { createStore } from "redux";
import reducers from "./reducer";

//STORE = Globalized State
const store = createStore(reducers);

export default store;
