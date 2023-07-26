
import Counter from './components/counter'
import ProductList from './components/productList'

function App() {
  return (
    <div>
      <Counter />

      <br />
      <h2 className='text-center'>Products List :</h2>
      <div className='text-center'>
        <ProductList />
      </div>
    </div>
  )
}

export default App
