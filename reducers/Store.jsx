import { combineReducers } from "@reduxjs/toolkit";
import ProductReducer from "./ProductReducer";
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import UserReducer from "./UserReducer";


const reducer = combineReducers({
    ProductReducer : ProductReducer,
    CartReducer : CartReducer,
    UserReducer : UserReducer
});

const Store = configureStore({
    reducer: reducer,
});

export default Store;