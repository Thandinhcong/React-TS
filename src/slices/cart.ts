import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProducts } from "../interfaces/product";


const initialState = {
    items: []
} as { items: any[] }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IProducts>) => {
            const newProduct = action.payload;
            const exitsProductIndex = state.items.findIndex((item: IProducts) => item.id == newProduct.id);
            if (exitsProductIndex === -1) {
                state.items.push(newProduct)
                console.log(action);

            } else {
                state.items[exitsProductIndex].quantity++
            }
        },
        increase: (state, action: PayloadAction<number>) => {
            const productIncrease = state.items.find((item: IProducts) => item.id === action.payload);
            productIncrease.quantity++;
        },
        decrease: (state, action: PayloadAction<number>) => {
            const productFound = state.items.find((item: IProducts) => item.id === action.payload);
            productFound.quantity--;
            if (productFound.quantity < 1) {
                const confilm = window.confirm("Do you want delete?");
                if (confilm) {
                    state.items = state.items.filter((item: IProducts) => item.id !== action.payload);
                }
                productFound.quantity = 1
            }
        }
    }
})
export const { add, decrease, increase } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;