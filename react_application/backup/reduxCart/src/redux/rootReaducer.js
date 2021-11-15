import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
let rootReducer =combineReducers({cartReducer});
export {rootReducer};