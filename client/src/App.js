import React from 'react';
import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import LoginPanel from './components/LoginPanel';
import SignupForm from './components/SignupForm';
import BookBrowser from './components/BookBrowser';
import ShelfBrowser from './components/ShelfBrowser';
import UserList from './components/UsersList';




const PrivateRoute = ({ component: Component, ...rest }) => {
    let needLogin = useSelector(state => !state.authentication.id);
    return (
      <Route {...rest} render={(props) => (
        needLogin === true
          ? <Redirect to='/login' />
          : <Component {...props}  />
      )} />
    )
}


const AuthRoute = ({ component: Component, ...rest }) => {
    let needLogin = useSelector(state => !state.authentication.id);
    return (
      <Route {...rest} render={(props) => (
        needLogin === false
          ? <Redirect to='/shelves' />
          : <Component {...props}  />
      )} />
    )
}

function App() {
    let needLogin = useSelector(state => !state.authentication.id);
    let location = useLocation();
    let needSignup = useSelector(state => !state.authentication.username);
    return (
      <>

        {location.pathname !== '/login' && location.pathname !== '/signup' ?
            <NavBar /> : null}
        <Switch>
          <AuthRoute path="/signup"
              exact={true}
              needLogin={needSignup}
              component={SignupForm}
              />
          <AuthRoute path="/login"
              exact={true}
              needLogin={needLogin}
              component={LoginPanel}
              />
          <Route path="/users">
                <UserList />
          </Route>
          <PrivateRoute path="/books"
                        exact={true}
                        needLogin={needLogin}
                        component={BookBrowser}
                        />
          <PrivateRoute path="/books/:bookid"
                        exact={true}
                        needLogin={needLogin}
                        component={BookBrowser}
                        />
          <PrivateRoute path="/shelves"
                        exact={true}
                        needLogin={needLogin}
                        component={ShelfBrowser}
                        />
          <PrivateRoute path="/shelves/:shelfId"
                        exact={true}
                        needLogin={needLogin}
                        component={ShelfBrowser}
                        />
        </Switch>
      </>
    )
}


export default App;
