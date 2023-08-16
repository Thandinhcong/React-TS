import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '../utils/pause';
import { IProducts } from '../interfaces/product';
const productApi = createApi({
    reducerPath: "product",
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProducts[], void>({
            query: () => `/products`,
            providesTags: ['Product']
        }),
        getById: builder.query<IProducts, number | string>({
            query: (id) => `/products/` + id,
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: (product: IProducts) => ({
                url: '/products',
                method: "POST",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation<IProducts, IProducts>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: ['Product']
        }),
        deleteProduct: builder.mutation<{ id: number }, number>({
            query: (id) => ({
                url: `/products/` + id,
                method: "DELETE"
            }),
            invalidatesTags: ['Product']
        })
    })
})
export const {
    useGetProductsQuery,
    useGetByIdQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,

} = productApi;

export const productReducer = productApi.reducer;
export default productApi;