import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { RootState } from '../../app/store';
import { addProduct, deleteProduct, fetchProducts, updateProduct } from '../../actions/products';
import { IProducts } from '../../interfaces/product';
import Button from '../button';


const ProductList = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state: RootState) => state.products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            {products?.map((item) => (
                <div className='d-flex justify-content-center m-3'>
                    <div>{item?.name}</div>
                    <div>
                        {item?.price}
                    </div>
                </div>
            ))}
            <Button
                danger
                onClick={() => dispatch(addProduct({ name: "product add", price: 1000 }))}
            >
                Add
            </Button>
            <Button
                warning
                onClick={() => dispatch(updateProduct({ name: "product updated", price: 2000, id: 3 }))}
            >
                update
            </Button>
            <Button
                danger
                onClick={() => dispatch(deleteProduct(3))}
            >
                delete
            </Button>
        </div>
    )
}

export default ProductList