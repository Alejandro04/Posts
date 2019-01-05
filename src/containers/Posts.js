import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAllPosts} from '../actions/index';
import { Link } from 'react-router-dom';

class Posts extends Component {
  
  componentWillMount() {
    this.props.getAllPosts();
  }

  renderPosts() {
    if (this.props.posts[0] !== undefined) {
      return this.props.posts[0].map((post) => {
        return (
          <li key={post.id}>
            <Link to={"posts/" + post.id}>
              <h4> {post.title} </h4>
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
                <Link to="post/new" className="btn btn-warning">
                    Create Post
                </Link>
            </div>

            Posts
            <ul className="list-group">
                {this.renderPosts()}
            </ul>
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