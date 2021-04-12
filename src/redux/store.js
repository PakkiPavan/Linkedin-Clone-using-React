import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/UserReducer";
console.log("STORE");

const rootReducer = combineReducers({
    user: userReducer
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
export default store;