import { useEffect } from "react";
import Button from "../button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../../actions/products";
import { RootState } from "../../app/store";
const ProductList = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            {products?.map((product: any) => (
                <div key={product.id}>
                    {product.name}
                    {/* <button
                        onClick={
                            () => dispatch({ type: "cart/add", payload: { ...product, quantity: 1 } })
                        }>
                        add to cart</button> */}
                </div>
            ))}
            <Button success onClick={() => dispatch(addProduct({ name: "Product Added" }))}>Thêm</Button>
            <Button warning onClick={() => dispatch(updateProduct({ name: "Product update", id: 3 }))}>Cập nhật</Button>
            <Button danger onClick={() => dispatch(deleteProduct(3))}>delete</Button>
        </div>
    );
};

export default ProductList;