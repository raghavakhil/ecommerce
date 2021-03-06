import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'

import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop page/shoppage.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './components/pages/check-out/check-out.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      setCurrentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch =>
  ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);