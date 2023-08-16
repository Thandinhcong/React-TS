import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import ProductList from "./components/admin/ProductList"
import ProductAdd from "./components/admin/ProductAdd"
import ProductUpdate from "./components/admin/ProductUpdate"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>

        </Route>
        <Route path="/admin" element={<Outlet />}>
          <Route index element={<ProductList />} />
          <Route path="add" element={<ProductAdd />} />
          <Route path="update/:id" element={<ProductUpdate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
