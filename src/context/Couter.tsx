import React, { useReducer, createContext } from 'react'

export const CouterContext = createContext({} as any);
type counterReducerProps = {
    children: React.ReactNode
}
const initialState = { count: 0 };

const couterReducer = (state: any, action: any) => {
    console.log({ action });

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
        default:
            state;
    }
}
const CounterProvider = ({ children }: counterReducerProps) => {
    const [state, dispatch] = useReducer(couterReducer, initialState) as any;

    return (
        <CouterContext.Provider value={{ state, dispatch }}>
            {children}
        </CouterContext.Provider>
    )
}

export default CounterProvider