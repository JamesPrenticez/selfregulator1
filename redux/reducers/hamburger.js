import {TOGGLE_HAMBURGER} from '../actions/hamburger'

export default function(state = false, action){
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return action.bool

      default: 
      return state
  }
}