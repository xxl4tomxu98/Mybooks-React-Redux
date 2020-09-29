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

  ghandiQuotes= [
    '"An eye for eye only ends up making the whole world blind."',
    '"Happiness is when what you think, what you say, and what you do are in harmony."',
    '"Where there is love there is life."'
  ];

  randomNumGen = () => {
    return Math.floor(Math.random() * Math.floor(2))
  }

  render() {
      if(this.props.currentUserId !== undefined) {
        return <Redirect to='/'/>
      }
      return (
        <>
          <div className="login-container">
            <div>My-Books</div>
            <form onSubmit={this.handleSubmit} className="login-form">
              <input type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.updateEmail}
                    className="input login-form__email" />
              <input type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updatePassword}
                    className="input login-form__password" />
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="quote-generator-container">
            <img className="quote-generator-img" src="./public/images/ghandi.jpg" alt="" />
            <p className="quote-generator-quote"> {this.ghandiQuotes[this.randomNumGen()] + '   -Ghandi'} </p>
          </div>
          <div className="discover-container">
            <p> Discover... </p>
            <div className="book-image-container">
              <img className="book-image__1" src="./public/images/1.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__2" src="./public/images/2.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__3" src="./public/images/3.jpg" alt=""/>
            </div>
          </div>
        </>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
