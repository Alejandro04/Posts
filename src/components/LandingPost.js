import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLandingPost } from '../actions/index';
import Footer from './Footer';

class LandingPost extends Component {

  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.getLandingPost(id);
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
                <div class="post-heading">
                  <h1>{this.props.post_landing.title}</h1>
                  <h2 class="subheading">details..</h2>
                  <span class="meta">Posted by
                    <a href="#">Author</a>
                    on August 24, 2018</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <p>{this.props.post_landing.body}</p>
              <p>Placeholder text by</p>
              <a href="#">Author</a>
            </div>
          </div>
        </div>

         <Footer/>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post_landing: state.post_landing }
}

const mapDispatchToProps = {
  getLandingPost
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPost); 