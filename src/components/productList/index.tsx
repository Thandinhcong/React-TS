import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Products";
import { instance } from "../../instances/instance";
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
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put("/products/" + product.id, product);
            dispatch({ type: "UPDATE_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const deleteProduct = async (id: any) => {
        try {
            const data = await instance.delete("/products/" + id);
            dispatch({ type: "REMOVE_PRODUCT", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    return (
        <div>
            {state?.products?.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}
            <button onClick={() => addProduct({ name: "Product ADDed" })}>Thêm</button>
            <button onClick={() => updateProduct({ name: "Productupdate", id: 3 })}>Cập nhật</button>
            <button onClick={() => deleteProduct(5)}>delete</button>
        </div>
    );
};

export default ProductList;