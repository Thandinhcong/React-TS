import { useContext } from 'react'
import { CouterContext } from '../../context/Couter';

const Counter = () => {
    const { state, dispatch } = useContext(CouterContext);
    console.log(state);
    return (
        <div>
            <div>
                Counter:{state.count}
                <button onClick={() => dispatch({ type: "INCREMENT" })}>
                    inclement
                </button>

                <button onClick={() => dispatch({ type: "DECREMENT" })}>
                    decrement
                </button>
                <button onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                    decrement
                </button>
            </div>
        </div >
    )


}

export default Counter;