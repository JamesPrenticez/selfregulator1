import {combineReducers} from 'redux'

import habits from './habits/reducers'
import showAddHabit from './showAddHabit/reducers'

export default combineReducers({
    habits,
    showAddHabit
})