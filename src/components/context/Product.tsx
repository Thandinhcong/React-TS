import { createContext, useState } from 'react'
import { instance } from '../../instances/instance';
import { pause } from '../../utils/pause';


export const ProductContext = createContext({} as any);

const ProductProvider = ({ children }: any) => {
    const [products, setProduct] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchProducts = async () => {
        setIsLoading(true);
        await pause(1000);
        try {
            const data = await instance.get('/products/')
            setProduct(data as any);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <ProductContext.Provider value={{ products, isLoading, error, fetchProducts }}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider 