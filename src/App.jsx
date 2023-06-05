import React, { Suspense } from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout/Layout'
// import Buy from './Pages/Buy/Buy'
// import Blog from './Pages/Blog/Blog'
// import About from './Pages/About/About'
// import Contacts from './Pages/Contacts/Contacts'
// import Nothing from './Pages/Nothing/Nothing'
import './App.css'
import { About, Career, Contacts, Layout, Main, News, Objects, Reviews, Services } from './Routes/Routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nothing from './Pages/Nothing/Nothing'
import { useTranslation } from 'react-i18next'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Suspense fallback={ <div>Loading . . .</div> }> <Layout/> </Suspense>,
    children: [
      {
        index:true,
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Main/> </Suspense>
      },

      {
        path: "services",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Services/> </Suspense>
      },

      {
        path: "objects",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Objects/> </Suspense>
      },

      {
        path: "career",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Career/> </Suspense>
      },

      {
        path: "contacts",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Contacts/> </Suspense>
      },
      {
        path: "news",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <News/> </Suspense>
      },
      {
        path: "reviews",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <Reviews/> </Suspense>
      },
      {
        path: "about",
        element: <Suspense fallback={ <div>Loading . . .</div> }> <About/> </Suspense>
      },
      {
        path: "*",
        element: <Nothing/>
      }
    ]
  }
]) 

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App