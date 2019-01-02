import {GET_SUBCATEGORIES, GET_SUBCATEGORY} from '../actions/types';

export default function subcategoriesReducer(state=[], action){
  switch(action.type) {
      case GET_SUBCATEGORIES:
        return state.concat([action.subcategories]);
      default:
        return state;
  }
}
