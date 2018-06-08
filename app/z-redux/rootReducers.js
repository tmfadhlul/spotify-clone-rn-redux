import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import tabPlaylistReducer from '../library/reducers'
import nav from './nav'
// import contactsReducer from '../contacts/reducers'
// import productsReducer from '../products/reducers'

const appReducer = combineReducers({
  nav,
  tabPlaylistReducer
  // form,
  // contactsReducer,
  // productsReducer
})

export default appReducer
