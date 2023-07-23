import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from '../reducer/counter';
import productReducer from '../reducer';
import thunk from 'redux-thunk';
import cartReducer from '../reducer/cart';


const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,


})

const store = createStore(rootReducer, enhancer)
export default store;
