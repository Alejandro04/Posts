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
    //window.location.href = '/posts'
  }

  render() {
    return (
      <div className="container">
        <div className="form-login">
          <h3> Create a new Post </h3>

          <form onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label>Title</label>
              <input type="text"
                className="form-control"
                placeholder="Title"
                name="title"
                ref="title"
              />
            </div>
            <div className="form-group">
              <label>Body</label>
              <textarea
                className="form-control"
                placeholder="Body"
                name="body"
                ref="body"
              />
            </div>

            <div className="form-group">
              <label>Categories</label>
              <select name="category_id" ref="category_id" className="form-control">
                {this.categories()}
              </select>
            </div>

            <button type="submit" className="btn btn-success">Create</button>
            <a href="/posts" className="btn btn-link">Back</a>
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
  createPost,
  getAllCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost); 