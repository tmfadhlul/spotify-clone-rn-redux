import { AppRegistry } from 'react-native';
import App from './App';
import TrackPlayer from 'react-native-track-player';

import createEventHandler from './app/premium/event-handler';
import store from './app/z-redux/store'

AppRegistry.registerComponent('Spotify', () => App);
TrackPlayer.registerEventHandler(createEventHandler(store));

console.disableYellowBox = true
