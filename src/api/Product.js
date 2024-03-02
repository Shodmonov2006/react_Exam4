import {createApi} from '@reduxjs/toolkit/query/react'
import GlobalBaseQuery, { providesList } from './index'

export const ProductsApi = createApi ({
    reducerPath: 'products',
    baseQuery: GlobalBaseQuery,
    tagTypes: ['Product'],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => 'products',
            providesTags: (result) => providesList(result, 'Product')
        })
    })
})  
// console.log(getProducts)
export const { useGetProductsQuery } = ProductsApi