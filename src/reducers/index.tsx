const productReducer = (state: any, action: any) => {
    switch (action.type) {
        case "products/FetchProducts": {
            state.products = state.payload;
            return
        }
        case "products/addProduct": {
            state.products.push(action.payload)
            break
        }
        case "products/remove": {
            const id = action.payload;
            state.products = state.products.filter((item: any) => item.id !== id)
            break
        }
        default: return state
    }
}
export default productReducer