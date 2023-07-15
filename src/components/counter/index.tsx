import { useContext } from 'react'
import { CouterContext } from '../../context/Couter';
import Button from '../button';


const Counter = () => {
    const { state, dispatch } = useContext(CouterContext);
    return (
        <div>
            <div>
                Counter:{state.count}
                <Button primary onClick={() => dispatch({ type: "INCREMENT" })}>
                    inclement
                </Button>
                <Button primary onClick={() => dispatch({ type: "DECREMENT" })}>
                    decrement
                </Button>
                <Button primary onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                    decrement
                </Button>
            </div>
        </div >
    )


}

export default Counter;