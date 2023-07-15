import { useReducer, createContext } from 'react'


// export type CounterProps = {
//     children: React.ReactNode
// }

export const CouterContext = createContext({} as any)
const initalState = {
    count: 0
}
const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "INCREMENT": {
            return {
                count: state.count + 1
            }
        }
        case "DECREMENT": {
            return {
                count: state.count - 1
            }
        }
        case "INCREASE": {
            return {
                count: state.count + action.payload
            }
        }
        default: return state;
    }
}
const CounterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <CouterContext.Provider value={{ state, dispatch }}>
            {children}
        </CouterContext.Provider>
    )
}
export default CounterProvider;
