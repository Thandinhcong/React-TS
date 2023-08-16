// import { createSlice } from "@reduxjs/toolkit";
// import { IProducts } from "../interfaces/product";
// import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../actions/products";


// const initialState = {
//     products: [],
//     isLoading: false,
//     error: ""
// } as { products: IProducts[], isLoading: boolean, error: string };


// const productSlice = createSlice({
//     name: "product",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         //fetching
//         builder.addCase(fetchProducts.fulfilled, (state, action) => {
//             state.products = action.payload
//         })
//         //adding
//         builder.addCase(addProduct.fulfilled, (state, action) => {
//             const product = action.payload
//             state.products.push(product)
//         })
//         // updating
//         builder.addCase(updateProduct.fulfilled, (state, action) => {
//             const newProduct = action.payload;
//             state.products = state.products.map((item: IProducts) => item.id === newProduct?.id ? newProduct : item)

//         })
//         //delete
//         builder.addCase(deleteProduct.fulfilled, (state, action) => {
//             const id = action.payload;
//             state.products = state.products.filter((item: IProducts) => item.id !== id)
//         })
//     }
// })
// export const productReducer = productSlice.reducer;