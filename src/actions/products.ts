import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../instances/instance"
import { IProducts } from "../interfaces/product";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const data: any = await instance.get("/products");
    return data;
})
export const addProduct = createAsyncThunk('products/addProduct', async (product: IProducts) => {
    const data: any = await instance.post("/products", product);
    return data;
})
export const deleteProduct = createAsyncThunk('products/deleteProducts', async (id: number) => {
    await instance.delete("/products/" + id);
    return id;
})
export const updateProduct = createAsyncThunk('products/updateProducts', async (product: IProducts) => {
    const data: any = await instance.put("/products/" + product.id, product);
    return data;
})