import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./Reducers/rootReducer";
// Redux devtools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, enhancer(applyMiddleware(thunk)));

export default store;
