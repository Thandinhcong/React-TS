import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../../actions/product";
import { Dispatch } from "redux";
const ProductList = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div>
            {products.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}
            <button onClick={() => dispatch(addProduct({ name: "Product ADDed" }))}>Thêm</button>
            <button onClick={() => dispatch(updateProduct({ name: "Product update", id: 3 }))}>Cập nhật</button>
            <button onClick={() => dispatch(deleteProduct(3))}>delete</button>
        </div>
    );
};

export default ProductList;