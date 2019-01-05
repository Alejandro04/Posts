import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost, getAllCategories } from '../actions/index';

class NewPost extends Component {

  componentWillMount() {
    this.props.getAllCategories()
    this.categories()
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
      title: this.refs.title.value,
      body: this.refs.body.value,
      category_id: this.refs.category_id.value,
    }
    this.props.createPost(data)
  }

  render() {
    return (
      <div className="container">

        <h1> Create a new Post </h1>

        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label>Title</label>
            <input type="text"
              className=""
              placeholder="Title"
              name="title"
              ref="title"
            />
          </div>
          <div className="form-group">
            <label>Body</label>
            <input type="text"
              className=""
              placeholder="Body"
              name="body"
              ref="body"
            />
          </div>

          <div className="form-group">
            <label>Categories</label>
            <select name="category_id" ref="category_id">
              {this.categories()}
            </select>
          </div>

          <button type="submit" className="btn btn-success">Create</button>
        </form>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

const mapDispatchToProps = {
  createPost,
  getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost); 