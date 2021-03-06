import {GET_LANDING_POSTS, GET_LANDING_POST} from '../actions/types';

export default function postsLandingReducer(state=[], action){
  switch(action.type) {
      case GET_LANDING_POSTS:
        return state.concat([action.posts_landing]);
      default:
        return state;
  }
}