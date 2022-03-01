import {combineReducers} from 'redux'

import habits from './habits/reducers'
import hamburger from './hamburger/reducers'
import showAddHabit from './showAddHabit/reducers'

export default combineReducers({
    hamburger,
    habits,
    showAddHabit
})