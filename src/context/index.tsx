import { produce } from "immer"
import { createContext, useReducer } from "react"
import productReducer from "../reducer"

export const ProductContext = createContext({} as any)

const initialState = {
    products: [],
    isLoading: false,
    error: ""
}

const ProductProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(produce(productReducer), initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider