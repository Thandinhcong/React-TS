import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Products";
import { instance } from "../../instances/instance";
import Button from "../button";
import Skeleton from "react-loading-skeleton";

const ProductList = () => {
    const { state, dispatch } = useContext(ProductContext);
    console.log(state);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await instance.get("/products");
                console.log({ data });
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
    if (state.isLoading) return <Skeleton count={3} />;
    if (state.error) return <div>{state.error}</div>;
    return (
        <div>
            {state?.products?.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}

            <button onClick={() => addProduct({ name: "Product ADDed" })}>Thêm</button>
        </div>
    );
};

export default ProductList;