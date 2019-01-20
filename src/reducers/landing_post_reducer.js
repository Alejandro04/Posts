import {GET_LANDING_POSTS, GET_LANDING_POST} from '../actions/types';

export default function LandingPostReducer(state=[], action){
  switch(action.type) {
      case GET_LANDING_POST:
        return action.post_landing
      default:
        return state;
  }
}