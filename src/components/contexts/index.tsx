import React, { createContext, useReducer } from 'react';
import { produce } from "immer"
import productReducer from '../../reducers';
const initialState = {
    products: [],
    isLoading: false,
    error: "",

}
const ProductContext = createContext([])

console.log("product contexxt :", ProductContext);

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState);
    console.log("state :", state);

    return (
        < ProductContext.Provider value={{ state, dispatch } as any}>
            {children}
        </ ProductContext.Provider >
    )
}
export { ProductProvider }
export default ProductContext;