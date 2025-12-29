import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setProducts = createAsyncThunk(
    "products/fetchProducts", async () => {
        const response = await axios.get("https://docker-apis.onrender.com/products");
        return response.data;
    }
);

export const userProducts = createAsyncThunk(
    "products/fetchUserProducts", async (id) => {
        const response = await axios.get(`https://docker-apis.onrender.com/product/${id}`);;
        return response.data;
    }
);

export const addProduct = createAsyncThunk(
    'products/addProduct', async (data) => {
        const response = await axios.post(`https://docker-apis.onrender.com/add/${data.userId}`, data.product);
        return response.data;
    }
)

export const fetchProductById = createAsyncThunk(
    "products/fetchProductById", async (pId) => {
        const responsedata = await axios.get(`https://docker-apis.onrender.com/cart/${pId}`);
        return responsedata.data;
    }
)

const ProductReducer = createSlice({
    name: "products",
    initialState: { products: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(setProducts.pending, (state, action) => {
                state.loading = true;
            }).addCase(setProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(userProducts.fulfilled, (state, action) => {
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.error = null;
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.error = null;
            });
    }

});

export default ProductReducer.reducer;