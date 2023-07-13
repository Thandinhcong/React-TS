import { createContext, useState } from 'react'


export const CounterContext = createContext({} as any)
const CounterProvider = ({ children }: any) => {
    const [counts, setCounts] = useState<number>(0);
    const increment = () => setCounts(counts + 1)
    const decrement = () => setCounts(counts - 1);
    return (
        <CounterContext.Provider value={{ counts, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;