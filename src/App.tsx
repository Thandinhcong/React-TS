import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from "./components/productList"
import ProductAdd from "./components/productAdd"
import Update from "./components/productUpdate"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="add" element={<ProductAdd />} />
          <Route path="update/:id" element={<Update />} />

        </Route>
        <Route path="/admin" element={<Outlet />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
