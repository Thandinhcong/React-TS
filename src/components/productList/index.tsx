import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Products";
import { instance } from "../../instances/instance";
import Button from "../button";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await instance.get("/products");

                dispatch({ type: "FETCH_PRODUCTS", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post("/products", product);
            dispatch({ type: "ADD_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    return (
        <div>
            {state?.products?.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}
            <Button onClick={() => addProduct({ name: "Product ADDed" })}>Thêm</Button>
        </div>
    );
};

export default ProductList;