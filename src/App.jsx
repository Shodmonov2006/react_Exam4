import React, { Suspense } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AboutProduct, Basket, Catalog, Layout, Login, Main, ManCatalog, Nothing, Stock, WomanCatalog } from './Routes/Routes'
import Loader from './Routes/Loader/Loader'

const router =createBrowserRouter ([
  {
    path: "/",
    element: <Suspense> <Layout/> </Suspense>,
    children: [
      {
        index:true,
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Main/> </Suspense>
      },
      {
        path: "catalogBeatStile",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Catalog/> </Suspense>
      },

      {
        path: "womanCatalog",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <WomanCatalog/> </Suspense>
      },

      {
        path: "manCatalog",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <ManCatalog/> </Suspense>
      },
       
      {
        path: "login",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Login/> </Suspense>
      },

      {
        path: "basket",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Basket/> </Suspense>
      },

      {
        path: "stock",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Stock/> </Suspense>
      },

      {
        path: "aboutProduct",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <AboutProduct/> </Suspense>
      },

      {
        path: "*",
        element: <Suspense fallback={ <div className='flex justify-center items-center h-[100vh] bg-[white] rounded-[30px]'> <Loader/> </div> }> <Nothing/> </Suspense>
      }
    ]
  }
]) 

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
