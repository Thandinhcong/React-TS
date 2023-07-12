import { useState } from 'react'
import Form from './components/Form'
import List from './components/list'
import { ICar } from './interfaces/product'
import Table from './components/table'
const listCar = [
  { id: 1, name: "BMV", price: 200 },
  { id: 2, name: "MECSEDES", price: 300 },
  { id: 3, name: "FORD", price: 400 },
  { id: 4, name: "MAYBACH", price: 500 }
]
const colums = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: ({ name }: any) => <a className='text-danger text-decoration-none'>{name}</a>
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "name",
    render: ({ price }: any) => <span className="text-bold">{price}</span>
  },
];

function App() {
  const [cars, setCars] = useState<ICar[]>(listCar);
  const addCar = (car: ICar) => {
    setCars([...cars, car])
  }
  const removeCar = (id: any) => {
    setCars(cars.filter((item) => item.id !== id))
  }
  return (
    <div className='border container mt-5'>
      <Form onAdd={addCar} />
      <List cars={cars} onRemove={removeCar} />
      <br />
      <hr />
      <Table data={listCar} colums={colums} />
    </div>
  )
}

export default App
