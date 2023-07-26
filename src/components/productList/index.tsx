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
                <div key={product.id} className=" d-flex justify-content-center">
                    <div className="text-danger m-2">
                        Name : {product.name}
                    </div>
                    <div className="text-danger m-2">
                        Price :{product.price}
                    </div>
                    <button
                        onClick={
                            () => dispatch({ type: "cart/add", payload: { ...product, quantity: 1 } })
                        }>
                        add to cart</button>
                </div>
            ))}
            <Button success onClick={() => dispatch(addProduct({ name: "Product Added", price: 1000 }))}>Thêm</Button>
            <Button warning onClick={() => dispatch(updateProduct({ name: "Product update", price: 2000, id: 3 }))}>Cập nhật</Button>
            <Button danger onClick={() => dispatch(deleteProduct(3))}>delete</Button>
        </div>
    );
};

export default ProductList;