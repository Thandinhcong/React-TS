import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import CounterProvider from './context/Couter.tsx'
import ProductProvider from './context/Products.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </ProductProvider>
)
