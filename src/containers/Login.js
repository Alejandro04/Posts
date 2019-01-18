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
      <div className="form-login">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label>Email</label>
            <input type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              ref="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              ref="password"
            />
          </div>
          <button type="submit" className="btn btn-success btn-login">Login</button>
        </form>
        <div className="access-data">
          <p>superadmin@superadmin.com | 12345678</p>
        </div>
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