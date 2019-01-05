import {
  GET_CATEGORIES, 
  GET_CATEGORY, 
  CREATE_CATEGORY, 
  DELETE_CATEGORY,
  GET_SUBCATEGORIES,
  CREATE_SUBCATEGORY,
  GET_POSTS,
  CREATE_POST } from './types'; 
import  axios from 'axios';

const API_URL = "http://localhost:5000/api/v1" ;


/*CATEGORIES*/
export function getAllCategories() {  
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


/*SUBCATEGORIES*/
export function getAllSubCategories() {  
  return dispatch => {
      axios.get(`${API_URL}/subcategories`)
      .then(res => {
        const subcategories = res.data
        dispatch(getSubCategories(subcategories));
      });
    }
}

function getSubCategories(subcategories){ 
    return {
        type: GET_SUBCATEGORIES,
        subcategories
    }
}

export function createSubCategory(props){
  const request = axios.post(`${API_URL}/subcategories`, props);
  return{
    type: CREATE_SUBCATEGORY,
    payload: request
  };
}


/*POSTS*/
export function getAllPosts() {  
  return dispatch => {
      axios.get(`${API_URL}/articles`)
      .then(res => {
        const posts = res.data
        dispatch(getPosts(posts));
      });
    }
}

function getPosts(posts){ 
    return {
        type: GET_POSTS,
        posts
    }
}

export function createPost(props){
  const request = axios.post(`${API_URL}/articles`, props);
  return{
    type: CREATE_POST,
    payload: request
  };
}


