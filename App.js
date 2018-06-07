import {
  createStackNavigator,
} from 'react-navigation';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createNavigationPropConstructor,       // handles #1 above
  createNavigationReducer,               // handles #2 above
  createReactNavigationReduxMiddleware,  // handles #4 above
  initializeListeners,                   // handles #4 above
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';
import React from 'react';

import RootNavigator from './app/z-navigators/RootNavigator';
import store from './app/z-redux/store';

const navReducer = createNavigationReducer(RootNavigator);

// Note: createReactNavigationReduxMiddleware must be run before createNavigationPropConstructor
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const navigationPropConstructor = createNavigationPropConstructor("root");

class App extends React.Component {

  componentDidMount() {
    initializeListeners("root", this.props.nav);
  }

  render() {
    const navigation = navigationPropConstructor(
      this.props.dispatch,
      this.props.nav,
    );
    return <RootNavigator navigation={navigation} />;
  }

}

const mapStateToProps = (state) => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

// const store = createStore(
//   appReducer,
//   applyMiddleware(middleware),
// );

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}