import { produce } from "immer";

const counterReducer = (state = { count: 10 }, action: any) => {
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
export default counterReducer;