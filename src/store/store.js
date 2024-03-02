import { configureStore } from "@reduxjs/toolkit";
import basket from "../reducers/basket";
import { ProductsApi } from "../api/Product";
import { BrandsApi } from "../api/Brands";



export const store = configureStore({
    reducer: {
        [ProductsApi.reducerPath]: ProductsApi.reducer,
        [BrandsApi.reducerPath]: BrandsApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
         getDefaultMiddleware().concat(
            ProductsApi.middleware,
            BrandsApi.middleware
        )
      },
)