import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import CategoriesReducer from './categories_reducer'; 
import SubCategoriesReducer from './subcategories_reducer'; 
import PostsReducer from './posts_reducer';


let rootReducer = combineReducers({
  categories: CategoriesReducer, 
  subcategories: SubCategoriesReducer, 
  posts: PostsReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk, logger));

export default store;