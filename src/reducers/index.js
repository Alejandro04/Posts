import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import LoginReducer from './login_reducer';
import CategoriesReducer from './categories_reducer'; 
import SubCategoriesReducer from './subcategories_reducer'; 
import PostsReducer from './posts_reducer';
import PostsLandingReducer from './landing_reducer';

let rootReducer = combineReducers({
  user: LoginReducer,
  categories: CategoriesReducer, 
  subcategories: SubCategoriesReducer, 
  posts: PostsReducer,
  posts: PostsLandingReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk, logger));

export default store;