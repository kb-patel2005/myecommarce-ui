import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addProductToCart = createAsyncThunk(
    "cart/addProductToCart", async (email) => {
        const res = await axios.get(`https://docker-apis.onrender.com/${email}`);
        const userData = await res.json();
        const oldProductItems = userData.productItems ; 
        let newProductItems = oldProductItems ? oldProductItems + "," + state.pId : state.pId; // If oldProductItems is empty, just use the new pId
        await axios.put(`https://docker-apis.onrender.com/${email}`, newProductItems );
    }
);

const CartReducer= createSlice({
    name: "cart",
    initialState: {error:false,productItems: []},
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(addProductToCart.fulfilled, (state, action) => {
            state.error = false;
        })
        .addCase(addProductToCart.rejected, (state, action) => {
            state.error = true; 
        });
    }
});

export default CartReducer.reducer;