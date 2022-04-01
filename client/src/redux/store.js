import {compose, createStore} from "redux";


const rootReducer = (state = {}, action = '') => {

    switch (action.type) {
        case 'PREVIEW':
            return {...action.payload}
        case 'CLEAN':
            return state
        default:
            break;
    }
    return state
}


const store = createStore(rootReducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store