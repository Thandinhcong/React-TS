
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { decrement, increase, increment } from '../../slices/Counter';
import Button from '../button';

const Counter = () => {
    const { count } = useAppSelector((state: any) => state.counter);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div>
                Counter:{count}
                <Button success onClick={() => dispatch(increment())}>
                    inclement
                </Button>
                <Button warning onClick={() => dispatch(decrement())}>
                    decrement
                </Button>
                <Button danger onClick={() => dispatch(increase(10))}>
                    increase
                </Button>
            </div>
        </div >
    )


}

export default Counter;