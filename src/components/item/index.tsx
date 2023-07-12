import Button from '../button'
import { ICar } from '../../interfaces/product'

type ItemProps = {
    car: ICar,
    onRemove: (id: number | undefined) => void;
}

const Item = ({ car, onRemove }: ItemProps) => {
    return (
        <div className='d-flex justify-content-between border p-2'>
            {car.name}
            <Button
                onClick={() => onRemove(car.id)}
                danger
            >
                xóa em đi
            </Button>
        </div>
    )
}

export default Item