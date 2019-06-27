import { createStore, applyMiddleware } from "redux";
import { addProjectReducer } from '../Reducers/addProjectReducer';
import logger from 'redux-logger';

export const store=createStore(addProjectReducer,applyMiddleware(logger))