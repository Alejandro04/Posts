import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class Posts extends Component {

  componentWillMount() {
    this.props.getAllPosts();
  }

  renderPosts() {
    if (this.props.posts[0] !== undefined) {
      return this.props.posts[0].map((post) => {
        return (
          <Link to={"posts/" + post.id} className="list-group-item">
            <h4 className="list-group-item-heading"> {post.title} </h4>
            <p className="list-group-item-text">{post.body}</p>
            <p className="list-group-item-text">Author</p>
          </Link>
        )
      });
    }
  }
  render() {
    return (
      <div className="container">

        <div>
          <Link to="post/new" className="btn btn-warning btn-create">
            Create Post
          </Link>
        </div>

        <h4 className="title-section">Posts  <a href="/" className="btn btn-link">Back</a> </h4>
          <div class="list-group">
            {this.renderPosts()}
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

const mapDispatchToProps = {
  getAllPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts); 