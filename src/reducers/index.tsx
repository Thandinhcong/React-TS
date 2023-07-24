const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "products/fetchProducts": {
            state.products = action.payload
            break
        }
        case "products/addProduct": {
            state.products.push(action.payload)
            break
        }
        case "products/delete": {
            const id = action.payload
            state.products = state.products.filter((item: any) => item.id !== id)
            break
        }

        case "products/update": {
            const product = action.payload;
            state.products = state?.products.map((item: any) =>
                item.id === product.id ? product : item
            )
            break
        }
        default: return state
    }
}
export default productReducer;