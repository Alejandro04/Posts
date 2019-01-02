import {GET_CATEGORIES, GET_CATEGORY} from '../actions/types';

export default function categoriesReducer(state=[], action){
  switch(action.type) {
      case GET_CATEGORIES:
        return state.concat([action.categories]);
      default:
        return state;
  }
}

/*
const INITIAL_STATE = {all: [], category: null};
export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case GET_CATEGORIES:
      return { ...state, all: action.payload.data} ;
    case GET_CATEGORY:
      return { ...state, category: action.payload.data} ; 
    default:
      return state;
  }
}
*/