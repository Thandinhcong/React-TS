import { instance } from "../instances/instance";

export const fetchProducts = () => async (dispatch: any) => {
    try {
        const data = await instance.get("/products");
        console.log({ data });
        dispatch({ type: "products/fetchProducts", payload: data });
    } catch (error: any) {
    } finally {
    }
};
export const addProduct = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.post("/products", product);
        dispatch({ type: "products/addProduct", payload: data });
    } catch (error: any) {
        console.log(error);

    } finally {
    }
};
export const updateProduct = (product: any) => async (dispatch: any) => {
    try {
        const data = await instance.put(`/products/` + product.id, product);
        dispatch({ type: "products/updateProduct", payload: data });
        console.log("update data :", data);

    } catch (error: any) {
        console.log(error);
    }
};
export const deleteProduct = (id: any) => async (dispatch: any) => {
    try {
        const data = await instance.delete("/products/" + id);
        dispatch({ type: "products/deleteProduct", payload: id });
        console.log("data delete :", data);
    } catch (error: any) {
    } finally {
    }
};