import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../store/authentication';

const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id,
  }
}
const mapDispatchToProps = dispatch => ({
  signup: (username, email, password) => dispatch(signup(username, email, password))
})

export class SignupForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        username: '',
        email: '',
        password: '',
    };
    this.registerUser = this.registerUser.bind(this);
    this.updateUsername = this.updateValue('username');
    this.updateEmail = this.updateValue('email');
    this.updatePassword = this.updateValue('password');
  }

  async registerUser(e) {
    e.preventDefault();
    this.props.signup(this.state.username, this.state.email, this.state.password)
  }

  updateValue = name => e => {
    this.setState({ [name]: e.target.value });
  }

  render() {
    if(this.props.currentUserId !== undefined) {
      return <Redirect to='/shelves'/>
    }
    return (
      <main className="signup-container">
        <div className="login-errors-container"/>
        <div className="signup-errors-container"/>
        <h6> New here? Create a free account! </h6>
        <form onSubmit={this.registerUser}>
          <input type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.updateUsername}
                className="input signup-form__username form-control" />
          <input type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.updateEmail}
                className="input signup-form__email form-control" />
          <input type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.updatePassword}
                className="input signup-form__password form-control" />
          <button type="submit">Signup</button>
        </form>
      </main>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
