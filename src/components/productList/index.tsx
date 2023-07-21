import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, fetchProducts, updateProduct } from "../../actions/product";
import { Dispatch } from "redux";
import Button from "../button";
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
            <Button success onClick={() => dispatch(addProduct({ name: "Product ADDed" }))}>Thêm</Button>
            <Button warning onClick={() => dispatch(updateProduct({ name: "Product update", id: 3 }))}>Cập nhật</Button>
            <Button danger onClick={() => dispatch(deleteProduct(3))}>delete</Button>
        </div>
    );
};

export default ProductList;