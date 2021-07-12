import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk"
import {rootReducer} from "./rootReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer,compose(applyMiddleware(thunk),
    composeEnhancers()
))

export default store