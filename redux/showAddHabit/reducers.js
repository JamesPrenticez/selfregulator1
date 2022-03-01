import {TOGGLE_SHOWADDHABIT} from './actions'

export default function(state = false, action){
  switch(action.type) {
    case TOGGLE_SHOWADDHABIT:
      return action.bool

      default: 
      return state
  }
}