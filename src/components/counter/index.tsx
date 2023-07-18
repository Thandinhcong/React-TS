
import Button from '../button';
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const { count } = useSelector((state: any) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                Counter:{count}
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