import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authUser} from '../actions/index'; 

class Login extends Component {

  onSubmit(e) {
    e.preventDefault()
    const data = {
      email: this.refs.email.value,
      password: this.refs.password.value,
    }
    this.props.authUser(data)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label>Email</label>
            <input type="email"
              className=""
              placeholder="Email"
              name="email"
              ref="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password"
              className=""
              placeholder="Password"
              name="password"
              ref="password"
            />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { user: state.user }
}

const mapDispatchToProps = {
  authUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login); 