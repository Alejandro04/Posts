import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="optionsDashboard">
        <h1>
          <Link to="/categories" className="btn btn-info btn-dashboard">
            Categories
          </Link>
        </h1>
        <h1>
          <Link to="/subcategories" className="btn btn-danger btn-dashboard">
            SubCategories
          </Link>
        </h1>
        <h1>
          <Link to="/posts" className="btn btn-warning btn-dashboard">
            Posts
          </Link>
        </h1>
      </div>
    );
  }
}

export default Dashboard