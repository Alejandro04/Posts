import {GET_POSTS} from '../actions/types';

export default function postsReducer(state=[], action){
  switch(action.type) {
      case GET_POSTS:
        return state.concat([action.posts]);
      default:
        return state;
  }
}