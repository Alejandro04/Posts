import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import CategoriesReducer from './categories_reducer'; 
import SubCategoriesReducer from './subcategories_reducer'; 
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers({
  categories: CategoriesReducer, 
  subcategories: SubCategoriesReducer, 
  form: formReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk, logger));

export default store;