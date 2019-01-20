import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllLandingPosts } from '../actions/index';
import Footer from './Footer';

class Landing extends Component {

    componentWillMount() {
        this.props.getAllLandingPosts();
    }

    renderPosts() {
        if (this.props.posts_landing[0] !== undefined) {
          return this.props.posts_landing[0].slice(0).reverse().map((post) => {
            return (
                <div class="post-preview">
                    <Link to={"landing/post/" + post.id}>
                        <h2 class="post-title">
                            {post.title}
                        </h2>
                        <h4 class="post-subtitle">
                            {post.body}
                        </h4>
                    </Link>
                    <p class="post-meta">Posted by
                    <a href="#"> Author </a>
                    on January 19, 2019</p>
                </div>
            )
          });
        }
    }

  render() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="/">Learn Ruby and Js</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="site-heading">
                    <h1>Learn Ruby and Js</h1>
                    <span class="subheading">Tips, Tutorials, Solutions and More</span>
                    </div>
                </div>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">           
                    {this.renderPosts()}


                    <div class="clearfix">
                        <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    
        <Footer/>

      </div>
    );
  }
}

function mapStateToProps(state) {
    return { posts_landing: state.posts_landing }
  }
  
  const mapDispatchToProps = {
    getAllLandingPosts
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Landing); 