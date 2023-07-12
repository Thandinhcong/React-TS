import { useContext } from 'react'
import { CounterContext } from '../context/Counter'
import Button from '../button';


const Counter = () => {
    const { counts, decrement, increment } = useContext(CounterContext);
    return (
        <div>
            <div>
                Counter:{counts}
                <button onClick={() => increment()}>
                    inclement
                </button>

                <button onClick={() => decrement()}>
                    decrement
                </button>
            </div>
        </div >
    )


}

export default Counter;