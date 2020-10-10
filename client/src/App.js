import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
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

        {this.props.path !== '/login' && this.props.path !== '/signup' ?
            <NavBar />
            : null}
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
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={BookBrowser}
                        />
          <PrivateRoute path="/books/:bookid"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={BookBrowser}
                        />
          <PrivateRoute path="/shelves"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={ShelfBrowser}
                        />
          <PrivateRoute path="/shelves/:shelfId"
                        exact={true}
                        needLogin={this.props.needLogin}
                        component={ShelfBrowser}
                        />
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
