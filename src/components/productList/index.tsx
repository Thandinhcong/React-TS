import React, { useContext, useEffect } from 'react'

import { instance } from '../instances/instances';
import ProductContext from '../contexts';



const List = () => {
    const { state, dispatch } = useContext(ProductContext) as any;
    console.log("state", state);

    console.log("huhu", state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await instance.get("/products")
                console.log("data :", data);
                dispatch({ type: "products/FetchProducts", payload: data })
            } catch (error) {
            }
        };
        fetchProducts()
    }, [])
    return (
        <div>
            {state?.products.map((item: any) => {
                return <div key={item.id}>{item.name}</div>
            })}
        </div>
    )
}

export default List