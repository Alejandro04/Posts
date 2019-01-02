import {GET_CATEGORIES, GET_CATEGORY, CREATE_CATEGORY, DELETE_CATEGORY} from './types'; 
import  axios from 'axios';

const API_URL = "http://localhost:5000/api/v1" ;

export default function getAllCategories() {  
  return dispatch => {
      axios.get(`${API_URL}/categories`)
      .then(res => {
        const categories = res.data
        dispatch(getCategories(categories));
      });
    }
}

function getCategories(categories){ 
    return {
        type: GET_CATEGORIES,
        categories
    }
}

export function createCategory(props){
  const request = axios.post(`${API_URL}/categories`, props);
  return{
    type: CREATE_CATEGORY,
    payload: request
  };
}

export function deleteCategory(id){
  const request = axios.delete(`${API_URL}/categories/${id}`);

  return{
    type: DELETE_CATEGORY,
    payload: request
  }; 
}

export function getCategory(id){
  const request = axios.get(`${API_URL}/categories/${id}`);

  return{
    type: GET_CATEGORY,
    payload: request
  }; 
}