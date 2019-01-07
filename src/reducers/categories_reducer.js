import {GET_CATEGORIES, CREATE_CATEGORY} from '../actions/types';

export default function categoriesReducer(state=[], action){
  switch(action.type) {
      case GET_CATEGORIES:
        return state.concat([action.categories]);
      case CREATE_CATEGORY:
        return [...state, action.category];
      default:
        return state;
  }
}