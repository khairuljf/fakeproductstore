import { createStore, combineReducers } from "redux";

import products from '../reducers/products'
import filterReducer from '../reducers/filters'

//create store

export default () =>{

    const store = createStore(combineReducers({
        allProducts:products,
        filters:filterReducer
    }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    )

    return store;

}


