import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { userProducts } from "./ProductReducer";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (data) => {
        try {
            let res = await axios.post("https://docker-apis.onrender.com/login", data);
            let responsedata = res.data;
            return responsedata;
        } catch (error) {
            alert(error);
        }
    }
)

export const userInsertion = createAsyncThunk(
    'user/userInsertion',
    async (data) => {
        try {
            let res = await axios.post("https://docker-apis.onrender.com/signup", data);
            let data1 = res.data;
            return data1;
        } catch (error) {
            alert(error);
        }
    }
);

export const saveCartItemsInDB = createAsyncThunk(
    'user/saveCartItemsInDB',
    async (_, { getState }) => {
        try {
            const state = getState();
            let res = await axios.put("https://docker-apis.onrender.com/", { ...state.UserReducer.loginUser, productItems: state.UserReducer.userProducts });
            let data1 = res.data;
            return data1;
        } catch (error) {
            alert(error);
        }
    }
);

function findIndexById(arr, id) {
    return arr.findIndex(item => item.productId === id);
}

const UserReducer = createSlice({
    name: "user",
    initialState: { error: false, loginUser: {}, userProducts: [] },
    reducers: {
        addToCart(state, action) {
            if (findIndexById(state.userProducts, action.payload.productId) == -1) {
                state.userProducts.push(action.payload);
            } else {
                let index = findIndexById(state.userProducts, action.payload.productId);
                state.userProducts = state.userProducts.map((item, i) =>
                    i === index ? { ...item, qty: item.qty + 1 } : item
                )
            }
        },
        deleteToCart(state, action) {
            state.userProducts = state.userProducts.filter((e) => e.productId !== action.payload);
        },
        incrementProduct(state, action) {
            state.userProducts = state.userProducts.map((item) => item.productId === action.payload ? { ...item, quantity: item.quantity + 1 } : item);
        },
        decrementProduct(state, action) {
            state.userProducts = state.userProducts.map((item) => item.productId === action.payload ? (item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : state.userProducts.filter((e) => e.productId !== action.payload)) : item);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                if (action.payload === "") {
                    state.error = true;
                } else {
                    state.loginUser = action.payload;
                    if (action.payload.productItems == null) {
                        state.userProducts = [];
                    } else {
                        state.userProducts = action.payload.productItems;
                    }
                    console.log(action.payload);
                    state.error = false;
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = true;
            })
            .addCase(userInsertion.fulfilled, (state) => {
                state.error = false;
            })
            .addCase(userInsertion.rejected, (state) => {
                alert('request is rejected');
                state.error = true;
            })
            .addCase(saveCartItemsInDB.fulfilled, (state) => {
                state.error = false;
            })
            .addCase(saveCartItemsInDB.rejected, (state) => {
                alert('request is rejected');
                state.error = true;
            })
    }
})

export const { addToCart, deleteToCart, incrementProduct, decrementProduct } = UserReducer.actions;
export default UserReducer.reducer;