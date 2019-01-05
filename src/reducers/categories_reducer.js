import {GET_CATEGORIES, GET_CATEGORY} from '../actions/types';

export default function categoriesReducer(state=[], action){
  switch(action.type) {
      case GET_CATEGORIES:
        return state.concat([action.categories]);
      default:
        return state;
  }
}