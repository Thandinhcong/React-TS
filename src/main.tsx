import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import ProductProvider from './context/index.tsx'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductProvider>
    <App />
  </ProductProvider>


)
