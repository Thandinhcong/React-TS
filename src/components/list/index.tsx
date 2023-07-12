import Item from '../item'
import { ICar } from '../../interfaces/product'

type ListProps = {
    cars: ICar[]
    onRemove: (id: number | undefined) => void;
}

const List = ({ cars, onRemove }: ListProps) => {
    return (
        <div>
            {cars.map((car) => {
                return <Item
                    key={car.id}
                    car={car}
                    onRemove={onRemove}
                />
            })}
        </div>
    )

}


export default List