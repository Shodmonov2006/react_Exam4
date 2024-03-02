import {createApi} from '@reduxjs/toolkit/query/react'
import GlobalBaseQuery, { providesList } from './index'

export const BrandsApi = createApi ({
    reducerPath: 'brands',
    baseQuery: GlobalBaseQuery,
    tagTypes: ['Brands'],
    endpoints: (build) => ({
        getBrands: build.query({
            query: () => 'brands',
            providesTags: (result) => providesList(result, 'Brands')
        })
    })
})  
// console.log(getProducts)
export const { useGetBrandsQuery } = BrandsApi