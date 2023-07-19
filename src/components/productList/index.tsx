import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../instances/instance";
const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: any) => state.products);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await instance.get("/products");
                console.log({ data });
                dispatch({ type: "products/fetchProducts", payload: data });
            } catch (error: any) {
            } finally {
            }
        };
        fetchProducts();
    }, []);
    const addProduct = async (product: any) => {
        try {
            const data = await instance.post("/products", product);
            dispatch({ type: "products/addProduct", payload: data });
        } catch (error: any) {
        } finally {
        }
    };
    const updateProduct = async (product: any) => {
        try {
            const data = await instance.put(`/products/${product.id}`, product);
            dispatch({ type: "products/updateProduct", payload: data });
            console.log("update data :", data);

        } catch (error: any) {
            console.log(error);

        }
    };
    const deleteProduct = async (id: any) => {
        try {
            const data = await instance.delete("/products/" + id);
            dispatch({ type: "products/deleteProduct", payload: id });
            console.log("data delete :", data);


        } catch (error: any) {
        } finally {
        }
    };
    return (
        <div>
            {products.map((product: any) => (
                <div key={product.id}>{product.name}</div>
            ))}
            <button onClick={() => addProduct({ name: "Product ADDed" })}>Thêm</button>
            <button onClick={() => updateProduct({ name: "Productupdate hihihuhuhuhih", id: 3 })}>Cập nhật</button>
            <button onClick={() => deleteProduct(3)}>delete</button>
        </div>
    );
};

export default ProductList;