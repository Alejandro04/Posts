import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCategories } from '../actions/index';
import { Link } from 'react-router-dom';

class Categories extends Component {

  componentWillMount() {
    this.props.getAllCategories();
  }

  renderCategories() {
    if (this.props.categories[0] !== undefined) {
      return this.props.categories[0].map((category) => {
        return (
          <li key={category.id}>
            <Link to={"categories/" + category.id}>
              <h4> {category.name} </h4>
            </Link>
          </li>
        )
      });
    }
  }
  render() {
    return (
      <div className="container">

        <div>
          <Link to="category/new" className="btn btn-warning">
            Create Category
                </Link>
        </div>

        Categories
            <ul className="list-group">
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

const mapDispatchToProps = {
  getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories); 