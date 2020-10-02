import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPanel from './components/LoginPanel';
import SignupForm from './components/SignupForm';
import BookBrowser from './components/BookBrowser';
import ShelfBrowser from './components/ShelfBrowser';
import UserList from './components/UsersList';
import { PrivateRoute, AuthRoute } from "./routes";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to="/login" activeclass="active">Landing</NavLink></li>
            <li><NavLink to="/signup" activeclass="active">Register</NavLink></li>
            <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
            <li><NavLink to="/shelves" activeclass="active">My Book Shelves</NavLink></li>
            <li><NavLink to="/books" activeclass="active">My Books</NavLink></li>
            <li><NavLink to="/shelves/:shelfId" activeclass="active">What Books on This Shelf?</NavLink></li>
          </ul>
        </nav>
        <Switch>
          <AuthRoute path="/signup"
              exact={true}
              needLogin={this.props.needSignup}
              component={SignupForm}
              />
          <AuthRoute path="/login"
              exact={true}
              needLogin={this.props.needLogin}
              component={LoginPanel}
              />
          <Route path="/users">
                <UserList />
          </Route>
          <PrivateRoute path="/books"
                        exact={false}
                        needLogin={this.props.needLogin}
                        component={BookBrowser}
                        />
          {/* <PrivateRoute path="/books/:bookId"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={BookBrowser}
                        /> */}
          <PrivateRoute path="/shelves"
                        exact={false}
                        needLogin={this.props.needLogin}
                        component={ShelfBrowser}
                        />
          {/* <PrivateRoute path="/shelves/:shelfId"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={ShelfBrowser}
                        /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.authentication.id,
    needLogin: !state.authentication.id,
    needSignup: !state.authentication.username,
  }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
