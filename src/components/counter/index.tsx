import { useContext } from 'react'
import { CounterContext } from '../context/Counter'
import Button from '../button';


const Counter = () => {
    const { counts, decrement, increment } = useContext(CounterContext);
    return (
        <div>
            <div>
                Counter:{counts}
                <Button primary onClick={() => increment()}>
                    inclement
                </Button>

                <Button primary onClick={() => decrement()}>
                    decrement
                </Button>
            </div>
        </div >
    )


}

export default Counter;