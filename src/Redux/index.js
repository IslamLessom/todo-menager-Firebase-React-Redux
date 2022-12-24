import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";

const initialState = {}

const composeFunc = process.env.NODE_ENV == 'development' ? composeWithDevTools : compose

const composeEnhancers = composeFunc(applyMiddleware(thunk))

export const store = createStore(rootReducer(), initialState, composeEnhancers)
