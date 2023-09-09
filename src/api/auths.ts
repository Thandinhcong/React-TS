import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pause } from '../utils/pause';


const authApi = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        }
    }),
    endpoints: (builder) => ({
        signin: builder.mutation<{ accessToken: string, user: {} }, { email: string, password: string }>({
            query: (credential) => ({
                url: `/signin`,
                method: "POST",
                body: credential
            })
        }),
        signup: builder.mutation<{ accessToken: string, user: {} }, { email: string, password: string }>({
            query: (credentials) => ({
                url: `/signup`,
                method: "POST",
                body: credentials
            })
        })
    }),
})
export const {
    useSigninMutation,
    useSignupMutation
} = authApi

export const authReducer = authApi.reducer;

export default authApi;