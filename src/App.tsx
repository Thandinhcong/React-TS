import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Home from "./components/productList"
import ProductAdd from "./components/productAdd"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="add" element={<ProductAdd />} />

        </Route>
        <Route path="/admin" element={<Outlet />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
