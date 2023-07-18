import { legacy_createStore as createStore } from 'redux'
import { produce } from "immer"
const initialState = {
    count: 0
}

const reduce = (state = initialState, action: any) => {
    console.log("state :", state);
    return produce(state, draftState => {
        switch (action.type) {
            case "INCREMENT":
                draftState.count++;
                break;
            case "DECREMENT":
                draftState.count--;
                break;
            case "INCREASE":
                draftState.count += action.payload
                break
            default: return state
        }
    })

}
const store = createStore(reduce)
export default store;
