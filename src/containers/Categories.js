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
      return this.props.categories[0].slice(0).reverse().map((category) => {
        return (
          <Link to={"category/" + category.id} className="list-group-item">
            <h4 className="list-group-item-heading"> {category.name} </h4>
          </Link>
        )
      });
    }
  }
  render() {
    return (
      <div className="container">

        <div>
          <Link to="category/new" className="btn btn-warning btn-create">
            Create Category
          </Link>
        </div>

          <h4 className="title-section">Categories  <a href="/" className="btn btn-link">Back</a> </h4>
          <div class="list-group">
            {this.renderCategories()}
          </div>
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