import {combineReducers} from 'redux'

import tasks from './tasks'
import hamburger from './hamburger'

export default combineReducers({
    tasks,
    hamburger
})