import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Switch } from "react-router-dom";
import store from './reducers'
import { createBrowserHistory } from "history";


/*COMPONENTS*/
import Dashboard from './components/Dashboard';
import Landing from './components/Landing'

/*CONTAINERS*/
import Posts from './containers/Posts';
import NewPost from './containers/NewPost';
import Categories from './containers/Categories';
import NewCategory from './containers/NewCategory';
import SubCategories from './containers/SubCategories';
import NewSubCategory from './containers/NewSubCategory';
import SubCategory from './containers/SubCategory';
import Category from './containers/Category';
import Login from './containers/Login';


const history = createBrowserHistory();
const secret = localStorage.getItem('axyz');

/************SECURITY************
If you try to change a header from the localstorage you will not be able to see the info.
If the entire localstorage header is removed, you will not be able to access the components.
/***************************/

//if I am logged in
if(secret){
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/post/new" component={NewPost} />
          <Route path="/categories" component={Categories} />
          <Route path="/category/new" component={NewCategory} />
          <Route path="/category/:id" component={Category} />
          <Route path="/subcategories" component={SubCategories} />
          <Route path="/subcategory/new" component={NewSubCategory} />
          <Route path="/subcategory/:id" component={SubCategory} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}


//if I am NOT logged in
if(secret == null){
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}

