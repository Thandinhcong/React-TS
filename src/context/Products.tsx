import React, { createContext, useReducer } from 'react'
import { produce } from "immer";
import productReducer from '../reducer';
type Props = {
    children: React.ReactNode
}
export const ProductContext = createContext({} as any);

const innitialState = {
    products: [],
    isLoading: false,
    error: "",
}

const ProductProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(produce(productReducer), innitialState)
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider