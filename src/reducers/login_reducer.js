import {LOGIN} from '../actions/types';

export default function loginReducer(state=[], action){
  
  switch(action.type) {
      case LOGIN:
        return state.concat([action.user]);
      default:
        return state;
  }
}