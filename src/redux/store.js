// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"
// import rootReducer from "./Reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "./counterSlicer";
// Redux devtools
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(rootReducer, enhancer(applyMiddleware(thunk)));
const store = configureStore({
    reducer:{
        counter: counterSlicer
    }
})
export default store;
