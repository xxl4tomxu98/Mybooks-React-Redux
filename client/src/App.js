import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPanel from './components/LoginPanel';
import BookBrowser from './components/BookBrowser';
import UserList from './components/UsersList';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.needLogin === true
      ? <Redirect to='/login' />
      : <Component {...props}  />
  )} />
)



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            </ul>
        </nav>
        <Switch>
          <Route path="/login"  component={LoginPanel} />
          <Route path="/users">
                <UserList />
          </Route>
          <PrivateRoute path="/"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={BookBrowser}
                        />
          <PrivateRoute path="/books/:bookId"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={BookBrowser}
                        />
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id,
    needLogin: !state.authentication.id
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
