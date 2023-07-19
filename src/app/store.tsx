import { legacy_createStore as createStore, combineReducers } from 'redux'
import counterReducer from '../reducer/counter';
import productReducer from '../reducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer)
export default store;
