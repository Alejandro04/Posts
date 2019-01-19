import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSubCategory, getAllCategories } from '../actions/index';

class NewSubCategory extends Component {

  componentWillMount() {
    this.props.getAllCategories()
  }

  categories() {
    if (this.props.categories[0] !== undefined) {
      return this.props.categories[0].map((category) => {
        return (
          <option value={category.id}>{category.name}</option>
        )
      });
    }
  }

  onSubmit(e) {
    e.preventDefault()
    const data = {
      name: this.refs.name.value,
      category_id: this.refs.category_id.value,
    }

    this.props.createSubCategory(data)
    window.location.href = '/subcategories'
  }

  render() {
    return (
      <div className="container">
        <div className="form-login">
          <h3> Create a new SubCategory </h3>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label>Name</label>
              <input type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref="name"
              />
            </div>

            <div className="form-group">
              <h3>Categories</h3>
              <select name="category_id" ref="category_id" className="form-control">
                {this.categories()}
              </select>
            </div>

            <button type="submit" className="btn btn-success">Create</button>
            <a href="/subcategories" className="btn btn-info btn-back">SubCategories</a>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

const mapDispatchToProps = {
  createSubCategory,
  getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSubCategory); 
