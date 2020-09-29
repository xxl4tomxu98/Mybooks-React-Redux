import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/authentication';

const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id,
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
})

export class LoginPanel extends Component {
  constructor(props){
      super(props)
      this.state = {
          email: 'demo@example.com',
          password: 'password',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.updateEmail = this.updateValue('email');
      this.updatePassword = this.updateValue('password');
  }

  async handleSubmit(e) {
      e.preventDefault();
      this.props.login(this.state.email, this.state.password)
    }

    updateValue = name => e => {
      this.setState({ [name]: e.target.value });
    }

    render() {
      if(this.props.currentUserId !== undefined) {
        return <Redirect to='/'/>
      }
      return (
        <main className="centered middled">
          <form onSubmit={this.handleSubmit}>
            <input type="email"
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.updateEmail} />
            <input type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.updatePassword} />
            <button type="submit">Login</button>
          </form>
        </main>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
