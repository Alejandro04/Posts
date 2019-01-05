import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/categories" className="btn btn-info">
            Categories
          </Link>
        </h1>
        <h1>
          <Link to="/posts" className="btn btn-warning">
            Posts
          </Link>
        </h1>
        <h1>
          <Link to="/subcategories" className="btn btn-danger">
            SubCategories
          </Link>
        </h1>
      </div>
    );
  }
}

export default Dashboard