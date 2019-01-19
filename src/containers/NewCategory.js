import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCategory, getAllCategories } from '../actions/index';

class NewCategory extends Component {
  constructor() {
    super()

    this.state = {
      categories: [],
    }
  }

  componentWillMount() {
    this.props.getAllCategories();

    //is for view the new data in real time
    this.setState({
      categories: this.props.categories[0]
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const data = {
      name: this.refs.name.value,
    }
    this.state.categories.push(data)
    this.props.createCategory(data)
  }

  render() {
    var categories = []
    if (this.props.categories[0] !== undefined && this.state.categories !== undefined) {
      categories = this.state.categories.slice(0).reverse().map((cat, i) => {
        return (
          [
            <h5 className="alert-success">{cat.name}</h5>
          ]
        )
      })
    } else {
      //if there is no props it is because they must be loaded - go to categories for update the store.
      window.location.href = '/categories'
    }

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
          </form>
        </div>

        <h2>Categories:</h2>
        <div className="access-data items-box">
          {categories}
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