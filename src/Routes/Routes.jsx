import { lazy } from "react"


export const Catalog = lazy (() => import ("../Pages/Catalog/Catalog.jsx"))
export const WomanCatalog = lazy (() => import ("../Pages/WomanCatalog/WomanCatalog.jsx"))
export const ManCatalog = lazy (() => import ("../Pages/ManCatalog/ManCatalog.jsx"))
export const Nothing = lazy (() => import ("../Pages/Nothing/Nothing.jsx"))
export const Layout = lazy (() => import ("../Layout/Layout.jsx"))
export const Main = lazy (() => import ("../Pages/Main/Main.jsx"))
export const Login = lazy (() => import ("../Pages/Login/Login.jsx"))
export const Basket = lazy (() => import ("../Pages/Basket/Basket .jsx"))
export const Stock = lazy (() => import ("../Pages/Stock/Stock.jsx"))
export const AboutProduct = lazy (() => import ("../Pages/AboutProduct/AboutProduct.jsx"))