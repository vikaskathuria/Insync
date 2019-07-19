// import {AsyncStorage} from 'react-native' 
import { createStore, applyMiddleware } from "redux";
import { addProjectReducer } from '../Reducers/addProjectReducer';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage'
// import { persistStore, autoRehydrate } from 'redux-persist'
// import { persistStore, persistReducer } from 'redux-persist'
// const persistConfig = {
//     key: 'root',
//     storage
//   }
//   const persistedReducer = persistReducer(persistConfig,addProjectReducer)

export const store=createStore(addProjectReducer,applyMiddleware(logger))
// export default () => {
//     let store = createStore(persistedReducer,{},applyMiddleware(logger))
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }
