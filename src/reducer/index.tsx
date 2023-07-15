
const productReducer = (state: any, action: any) => {

    switch (action.type) {
        case "FETCH_PRODUCTS": {
            state.products = action.payload
            return
        }
        case "ADD-PRODUCTS": {
            state.products.push(action.payload)
            return
        }
        default: return state;
    }
}

export default productReducer