import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {createReducer} from "@reduxjs/toolkit";


const previewReducer = createReducer({}, (builder)=> {
    builder
        .addCase('PREVIEW', (state, {payload}) => {
        state.preview = {...payload};
    })
    .addCase('CLEAN', (state, {payload}) => {
        state.preview = {}
    })
})

const cartReducer = createReducer({}, (builder)=> {
    builder
        .addCase('ADDTOCART', (state, {payload}) => {
            state.cart = {...payload};
        })
        .addCase('REMOVEFROMCART', (state) => {
            state.cart = {}
        })
})


const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
    preview: previewReducer,
    cart: cartReducer

});

const init = {
    preview: {
        preview: {}
    },
    cart: {
        cart: {}
    }
}

const store = createStore(rootReducer, init, composedEnhancers)

export default store