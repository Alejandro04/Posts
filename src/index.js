import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, Route, Switch } from "react-router-dom";
import store from './reducers'
import { createBrowserHistory } from "history";


/*COMPONENTES AND CONTAINERS*/
import Categories from './containers/Categories';
import NewCategory from './components/NewCategory';


const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/categories" component={Categories} />
          <Route path="/category/new" component={NewCategory} />
        </Switch>
      </Router>
    </Provider>,
    document.getElementById("root")
  );
