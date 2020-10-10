import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../store/authentication';
import SignupForm from './SignupForm';

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
    '"Where there is love there is life."',
    '"In a gentle way, you can shake the world."',
    '"If you don\'t ask, you don\'t get it."',
    '"The weak can never forgive. Forgiveness is the attribute of the strong."',
    '"Nobody can hurt me without my permission."',
    '"Hate the sin, love the sinner."',
    '"If we could change ourselves, the tendencies in the world would also change. As a man changes his own nature, so does the attitude of the world change towards him. We need not wait to see what others do."',
    '"A man is but a product of his thoughts. What he thinks he becomes."',
    '"A coward is incapable of exhibiting love; it is the prerogative of the brave."',
    '"Live as if you were to die tomorrow. Learn as if you were to live forever."',
    '"Service which is rendered without joy helps neither the servant nor the served."',
    '"Freedom is not worth having if it does not include the freedom to make mistakes."',
    '"The best way to find yourself is to lose yourself in the service of others."',
    '"Glory lies in the attempt to reach one’s goal and not in reaching it."',
    '"To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer."',
    '"It’s the action, not the fruit of the action, that’s important. You have to do the right thing. It may not be in your power, may not be in your time, that there’ll be any fruit. But that doesn’t mean you stop doing the right thing. You may never know what results come from your action. But if you do nothing, there will be no result."',
    '"You may never know what results come of your actions, but if you do nothing, there will be no results."',
    '"I cannot conceive of a greater loss than the loss of one’s self-respect."',
  ];

  randomNumGen = () => {
    return Math.floor(Math.random() * Math.floor(19))
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
          <SignupForm />
          <div className="quote-generator-container">
            <img className="quote-generator-img" src="./images/ghandi.jpg" alt="" />
            <p className="quote-generator-quote"> {this.ghandiQuotes[this.randomNumGen()] + '   -Ghandi'} </p>
          </div>
          <div className="discover-container">
            <p> Discover... </p>
            <div className="book-image-container">
              <img className="book-image__1" src="./images/1.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__2" src="./images/2.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__3" src="./images/3.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__4" src="./images/4.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__5" src="./images/8.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__6" src="./images/6.jpg" alt=""/>
            </div>
            <div className="book-image-container">
              <img className="book-image__7" src="./images/9.jpg" alt=""/>
            </div>
          </div>
        </>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPanel);
