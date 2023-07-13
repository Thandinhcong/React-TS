// import { useContext, useEffect } from "react";
// import { ProductContext } from "../context/Product";

// const ProductList = () => {
//     const { products, fetchProducts, isLoading, error } = useContext(ProductContext);

//     useEffect(() => {
//         fetchProducts();
//     }, []);
//     if (isLoading) return <Skeleton count={3} />;
//     if (error) return <div>{error}</div>;
//     return (
//         <div>
//             {products?.map((product: any) => (
//                 <div key={product.id}>{product.name}</div>
//             ))}
//         </div>
//     );
// };

// export default ProductList;