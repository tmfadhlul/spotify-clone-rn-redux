import { combineReducers } from 'redux'
// import { reducer as form } from 'redux-form'

import tabPlaylistReducer from '../library/reducers'
import nav from './nav'
import {
  playbackReducer as playback,
  screenReducer as currentScreen, 
  libraryReducer as library,
} from '../premium/reducers'

const appReducer = combineReducers({
  nav,
  tabPlaylistReducer,
  playback,
  currentScreen,
  library
})

export default appReducer
