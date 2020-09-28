import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/authentication'

class LogoutButton extends Component {
  render() {
    if (this.props.loggedOut) {
      return <Redirect to="/login" />;
    }
    return (
      <div id="logout-button-holder">
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedOut: !state.authentication.id
  }
}
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
