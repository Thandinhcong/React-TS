import { produce } from "immer";

const initialState = {
    products: [] as any[],
    isLoading: false,
    error: ""
} as { products: any[], isLoading: boolean, error: string }
const productReducer = (state = initialState, action: any) => {
    return produce(state, drafState => {
        switch (action.type) {
            case "products/fetchProducts": {
                drafState.products = action.payload
                break
            }
            case "products/addProduct": {
                drafState.products.push(action.payload)
                break
            }
            case "products/deleteProduct": {
                const id = action.payload;
                drafState.products = state.products.filter((item: any) => item.id !== id);
                break
            }
            case "products/updateProduct": {
                const product = action.payload;
                drafState.products = state.products.map((item: any) => item.id === product.id ? product : item);
                break;
            }
            default: return state;

        }
    })


}

export default productReducer