import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from '../reducer/counter';
import productReducer from '../reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store;
