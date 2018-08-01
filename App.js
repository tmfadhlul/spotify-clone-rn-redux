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
import TrackPlayer from 'react-native-track-player'; // TODO remove temp code

import { updatePlayback } from './app/premium/actions';
import RootNavigator from './app/z-navigators/RootNavigator';
import store from './app/z-redux/store';

const navReducer = createNavigationReducer(RootNavigator);

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const navigationPropConstructor = createNavigationPropConstructor("root");

class App extends React.Component {
  static store = null;

  async componentDidMount() {
    initializeListeners("root", this.props.nav);

    AppState.addEventListener('change', this._handleStateChange);

    // TODO remove temp code
    await TrackPlayer.setupPlayer({});
    TrackPlayer.updateOptions({
        capabilities: [
            TrackPlayer.CAPABILITY_PLAY,
            TrackPlayer.CAPABILITY_PAUSE,
            TrackPlayer.CAPABILITY_SEEK_TO,
            TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
            TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS
        ]
    });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleStateChange);
}

_handleStateChange(appState) {
    if(appState == 'active') {
        // Updates the playback information when the app is back from background mode
        App.store.dispatch(updatePlayback());
    }
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

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}