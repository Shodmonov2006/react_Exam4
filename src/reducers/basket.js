import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "basket",
    initialState: {
        products: [],
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            if(state.products.find((el) => el.product.id === action.payload.id)) {
                state.products = state.products.map((elem) => {
                    if(elem.product.id === action.payload.id) {
                        elem.quantity++;
                    }
                    return elem
                })
                state.total = state.products.reduce((acc, curr) => {
                    return acc + curr.quantity * curr.product.price
                }, 0)
                return;
            }

            state.products.push({
                product: action.payload,
                quantity: 1 
            })

            state.total = state.products.reduce((acc, curr) => {
                return acc + curr.quantity * curr.product.price
            }, 0)
        },

        incrementProduct: (state, action) => {


            state.products = state.products.map((el) => {
                if(el.product.id === action.payload){
                    el.quantity ++
                }
                return el
            })
            state.total = state.products.reduce((acc, curr) => {
                return acc + curr.quantity * curr.product.price
            }, 0)
        },
        decrementProduct: (state, action) => {


            state.products = state.products.map((el) => {
                if(el.product.id === action.payload){
                    el.quantity --
                }
                return el
            })
            state.total = state.products.reduce((acc, curr) => {
                return acc + curr.quantity * curr.product.price
            }, 0)
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((el) => {
                return el.product.id !==action.payload
            })
            state.total = state.products.reduce((acc, curr) => {
                return acc + curr.quantity * curr.product.price
            }, 0)
        }

    }
})

export const {addProduct, incrementProduct, decrementProduct, deleteProduct} = slice.actions
export   default slice.reducer