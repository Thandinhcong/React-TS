import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { instance } from "../instances/instance";
import { pause } from "../utils/pause";
import { ICate } from "../interfaces/categories"

const CategoriApi = createApi({
    reducerPath: 'categori',
    tagTypes: ['Categories'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        getCates: builder.query<ICate[], void>({
            query: () => `/categories`,
            providesTags: ['Categories']
        }),
        getCateById: builder.query<ICate, number | string>({
            query: (id) => `/categories/` + id,
            providesTags: ['Categories']
        }),
        addCategorie: builder.mutation({
            query: (categori: ICate) => ({
                url: '/categories',
                method: "POST",
                body: categori
            }),
            invalidatesTags: ['Categories']
        }),
        updateCategorie: builder.mutation<ICate, ICate>({
            query: (categori) => ({
                url: '/categories/' + categori.id,
                method: "PUT",
                body: categori
            }),
            invalidatesTags: ['Categories']
        }),
        deleteCategorie: builder.mutation<{ id: number }, number>({
            query: (id) => ({
                url: '/categories/' + id,
                method: "DELETE",
            }),
            invalidatesTags: ['Categories']
        })
    })
})

export const {
    useGetCatesQuery,
    useGetCateByIdQuery,
    useAddCategorieMutation,
    useUpdateCategorieMutation,
    useDeleteCategorieMutation
} = CategoriApi
export const CategorieReducer = CategoriApi.reducer;
export default CategoriApi;