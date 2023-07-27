import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import ProductList from "./components/productList";
import Counter from "./components/counter";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <Outlet />
            </div>
        )
        , children: [
            {
                index: true,
                element: (
                    <ProductList />
                )
            },
            {
                path: "product/:id",
                element: (
                    <div>deiltail product</div>
                )
            },
            {
                path: "couter",
                element: <Counter />
            }
        ]

    }
])