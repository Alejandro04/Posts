import {
  LOGIN,
  GET_CATEGORIES,
  GET_CATEGORY,
  CREATE_CATEGORY,
  DELETE_CATEGORY,
  GET_SUBCATEGORIES,
  CREATE_SUBCATEGORY,
  GET_POSTS,
  CREATE_POST,
  GET_LANDING_POSTS
} from './types';
import axios from 'axios';
import hash from 'object-hash'
import { Redirect } from 'react-router-dom'


/*CONFIG ENDPOINT*/

//DEV
const API_URL = "http://localhost:3003/api/v1";
const LOGIN_URL = "http://localhost:3003/auth/sign_in"

//PROD
//const LOGIN_URL = "https://still-anchorage-83213.herokuapp.com/auth/sign_in"
//const API_URL = "https://still-anchorage-83213.herokuapp.com/api/v1/";

/*LOGIN*/
export function authUser(props) {
  return dispatch => {
    axios.post(`${LOGIN_URL}`, props)
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
        window.location.href = '/subcategories'
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
        window.location.href = '/subcategories'
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
        console.log(posts)
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
  return dispatch => {
    axios.post(`${API_URL}/articles`, props, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        "access-token": localStorage.getItem('access-token'),
        "client": localStorage.getItem('client'),
        "uid": localStorage.getItem('uid'),
      }
    })
      .then(res => {
        const post = res.post
        console.log(post)
        dispatch(newPost(post));
        window.location.href = '/subcategories'
      });
  }
}

function newPost(post) {
  return {
    type: CREATE_POST,
    post
  }
}


/*LANDING*/
export function getAllLandingPosts() {
  return dispatch => {
    axios.get(`${API_URL}/posts`, {})
      .then(res => {
        const posts = res.data
        console.log(posts)
        dispatch(getLandingPosts(posts));
      });
  }
}

function getLandingPosts(posts) {
  return {
    type: GET_LANDING_POSTS,
    posts
  }
}



