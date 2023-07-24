import React, { useContext, useEffect } from 'react'
import ProductContext from '../contexts'
import { instance } from '../instances/instances';


const List = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await instance.get("/products");
                dispatch({ type: "products/fetchProducts", payload: data })
            } catch (error) {

            }
        }
        fetchProduct();
    }, [])
    const addProduct = async (product: any) => {
        try {
            const { data } = await instance.post("/products", product);
            dispatch({ type: "products/addProduct", payload: data })

        } catch (error) {
            console.log(error);

        }
    }
    const updateProduct = async (product: any) => {
        try {
            const { data } = await instance.put("/products/" + product.id, product);
            dispatch({ type: "products/update", payload: data })

        } catch (error) {
            console.log(error);

        }
    }
    const deleteProduct = async (id: number) => {
        try {
            await instance.delete("/products/" + id);
            dispatch({ type: "products/delete", payload: id })

        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div>
            {state?.products.map((item: any) => (
                <div key={item.id}>{item.name}</div>
            ))}
            <button onClick={() => addProduct({ name: "product" })}>AĐD</button>

            <button onClick={() => updateProduct({ name: "product update", id: 3 })}>update</button>
            <button onClick={() => deleteProduct(3)}>delete</button>


        </div>
    )
}

export default List