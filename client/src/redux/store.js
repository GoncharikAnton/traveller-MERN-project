import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {createReducer} from "@reduxjs/toolkit";


const previewReducer = createReducer({}, (builder)=> {
    builder
        .addCase('PREVIEW', (state, {payload}) => {
            console.log(payload)
        state.preview = {...payload};
    })
    .addCase('CLEAN', (state, {payload}) => {
        state.preview = {}
    })
})

const cartReducer = createReducer({}, (builder)=> {
    builder
        .addCase('ADDTOCART', (state, {payload}) => {
            console.log(payload)
            state.cart = {...payload};
        })
        .addCase('REMOVEFROMCART', (state, {payload}) => {
            state.cart = {}
        })
})


const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
    preview: previewReducer,

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