import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory, getAllCategories } from '../actions/index';

class NewCategory extends Component {

  componentWillMount() {
    this.props.getAllCategories();
  }

  onSubmit(e) {
    e.preventDefault()
    const data = {
      name: this.refs.name.value,
    }
    this.props.createCategory(data)
  }

  render() {
    return (
      <div className="container">
        <div className="form-login">
          <h3> Create a new category </h3>
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
            <button type="submit" className="btn btn-success">Create</button>
            <a href="/categories" className="btn btn-info btn-back">Categories</a>
            <a href="/categories" className="btn btn-link">Back</a>
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
  createCategory,
  getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCategory); 