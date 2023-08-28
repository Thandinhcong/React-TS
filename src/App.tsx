import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Form from "./components/Form"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Form />} />

        </Route>
        <Route path="/admin" element={<Outlet />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
