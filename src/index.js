import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Switch } from "react-router-dom";
import store from './reducers'
import { createBrowserHistory } from "history";


/*COMPONENTS*/
import Dashboard from './components/Dashboard';

/*CONTAINERS*/
import Posts from './containers/Posts';
import NewPost from './containers/NewPost';
import Categories from './containers/Categories';
import NewCategory from './containers/NewCategory';
import SubCategories from './containers/SubCategories';
import NewSubCategory from './containers/NewSubCategory';
import Login from './containers/Login';


const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/posts" component={Posts} />
          <Route path="/post/new" component={NewPost} />
          <Route path="/categories" component={Categories} />
          <Route path="/category/new" component={NewCategory} />
          <Route path="/subcategories" component={SubCategories} />
          <Route path="/subcategory/new" component={NewSubCategory} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
