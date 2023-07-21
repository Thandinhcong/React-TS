
import Button from '../button';
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const { count } = useSelector((state: any) => state);// state=0
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                Counter:{count}
                <Button success onClick={() => dispatch({ type: "INCREMENT" })}>
                    inclement
                </Button>
                <Button warning onClick={() => dispatch({ type: "DECREMENT" })}>
                    decrement
                </Button>
                <Button danger onClick={() => dispatch({ type: "INCREASE", payload: 10 })}>
                    decrement
                </Button>
            </div>
        </div >
    )


}

export default Counter;