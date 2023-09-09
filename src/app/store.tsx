import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import productApi, { productReducer } from '../api/ProductApi';
import CategoriApi, { CategorieReducer } from '../api/CategoriApi';
import authApi, { authReducer } from '../api/auths';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', "auth"]
}
const rootReducer = combineReducers({
    [productApi.reducerPath]: productReducer,
    [CategoriApi.reducerPath]: CategorieReducer,
    [authApi.reducerPath]: authReducer
})
const middleware = [productApi.middleware, CategoriApi.middleware, authApi.middleware]

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(...middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default persistStore(store);