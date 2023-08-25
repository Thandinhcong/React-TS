import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import ProductList from "./components/admin/products/ProductList"
import ProductAdd from "./components/admin/products/ProductAdd"
import ProductUpdate from "./components/admin/products/ProductUpdate"
import ListCate from "./components/admin/categories/ListCate"
import AddCate from "./components/admin/categories/AddCate"
import UpdateCate from "./components/admin/categories/UpdateCate"
import Home from "./components/layout/clients/Main/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<Outlet />}>
          <Route index element={<ProductList />} />
          <Route path="add" element={<ProductAdd />} />
          <Route path="update/:id" element={<ProductUpdate />} />
          {/* categories */}
          <Route path="categories" element={<ListCate />} />
          <Route path="addCategories" element={<AddCate />} />
          <Route path="updateCategories/:idCate" element={<UpdateCate />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
