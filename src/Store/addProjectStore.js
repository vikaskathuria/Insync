import {AsyncStorage} from 'react-native' 
import { createStore, applyMiddleware, combineReducers } from "redux";
import { addProjectReducer } from '../Reducers/addProjectReducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage
  }
const rootReducer=combineReducers({
    project:addProjectReducer
})
  const persistedReducer = persistReducer(persistConfig,rootReducer)

// export const store=createStore(persistedReducer,applyMiddleware(logger))

export let store = createStore(persistedReducer,{},applyMiddleware(logger))
export let persistor = persistStore(store)

