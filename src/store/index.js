import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { calculatorReducer } from './Calculator/Calculator.reducer';
import { productsReducer } from './Products/Products.reducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  products: productsReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);