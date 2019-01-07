import {
  LOGIN,
  GET_CATEGORIES,
  GET_CATEGORY,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_SUBCATEGORIES,
  CREATE_SUBCATEGORY,
  GET_POSTS,
  CREATE_POST
} from './types';
import axios from 'axios';
import hash from 'object-hash'
import { Redirect } from 'react-router-dom'


/*CONFIG ENDPOINT*/
const API_URL = "http://localhost:3003/api/v1";

/*LOGIN*/
export function authUser(props) {
  return dispatch => {
    axios.post('http://localhost:3003/auth/sign_in', props)
      .then(res => {
        const user = res.data
        const headers = res.headers
        localStorage.setItem('access-token', headers['access-token']);
        localStorage.setItem('client', headers['client']);
        localStorage.setItem('uid', headers['uid']);

        /*SECURITY*/
        const secret = hash({access_token: headers['access-token'], client: headers['client'], uid: headers['uid']})
        localStorage.setItem('axyz', secret);

        /*REDIRECT*/
        if(user){
          window.location.href = '/'
        }

        dispatch(userLogin(user));
      });
  }
}

function userLogin(user) {
  return {
    type: LOGIN,
    user
  }
}

/*CATEGORIES*/
export function getAllCategories() {
  return dispatch => {
    axios.get(`${API_URL}/categories`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid'),
      }
    })
      .then(res => {
        const categories = res.data
        dispatch(getCategories(categories));
      });
  }
}

function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function createCategory(props) {
  return dispatch => {
    axios.post(`${API_URL}/categories`, props, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid'),
      }
    })
      .then(res => {
        const category = res.data
        console.log(category)
        dispatch(newCategory(category));
      });
  }
}

function newCategory(category) {
  return {
    type: CREATE_CATEGORY,
    category
  }
}

export function deleteCategory(id) {
  const request = axios.delete(`${API_URL}/categories/${id}`);

  return {
    type: DELETE_CATEGORY,
    payload: request
  };
}

export function getCategory(id) {
  const request = axios.get(`${API_URL}/categories/${id}`);

  return {
    type: GET_CATEGORY,
    payload: request
  };
}


/*SUBCATEGORIES*/
export function getAllSubCategories() {
  return dispatch => {
    axios.get(`${API_URL}/subcategories`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid'),
      }
    })
      .then(res => {
        const subcategories = res.data
        dispatch(getSubCategories(subcategories));
      });
  }
}

function getSubCategories(subcategories) {
  return {
    type: GET_SUBCATEGORIES,
    subcategories
  }
}

export function createSubCategory(props) {
  return dispatch => {
    axios.post(`${API_URL}/subcategories`, props, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid'),
      }
    })
      .then(res => {
        const subcategory = res.data
        console.log(subcategory)
        dispatch(newSubCategory(subcategory));
      });
  }
}

function newSubCategory(subcategory) {
  return {
    type: CREATE_SUBCATEGORY,
    subcategory
  }
}


/*POSTS*/
export function getAllPosts() {
  return dispatch => {
    axios.get(`${API_URL}/articles`, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid'),
      }
    })
      .then(res => {
        const posts = res.data
        dispatch(getPosts(posts));
      });
  }
}

function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts
  }
}

export function createPost(props) {
  const request = axios.post(`${API_URL}/articles`, props);
  return {
    type: CREATE_POST,
    payload: request
  };
}


