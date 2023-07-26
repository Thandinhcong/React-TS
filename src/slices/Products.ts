import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../interfaces/product";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../actions/products";


const initialState = {
    products: [],
    isLoading: false,
    error: ""
} as { products: IProducts[], isLoading: boolean, error: string }

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            const product = action.payload;
            state.products.push(product)
        })

        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            const id = action.payload;
            state.products = state.products.filter(item => item.id !== id)
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            const product = action.payload;
            state.products = state.products.map(item => item.id === product.id ? product : item)
        })

    }
})
export const productReducer = productSlice.reducer;