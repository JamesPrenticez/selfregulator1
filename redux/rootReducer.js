import {combineReducers} from 'redux'

import habits from './habits/reducer'
import hamburger from './hamburger/reducer'

export default combineReducers({
    habits,
    hamburger
})