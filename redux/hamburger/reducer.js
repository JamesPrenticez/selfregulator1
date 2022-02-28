import {TOGGLE_HAMBURGER} from './action'

export default function(state = false, action){
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return action.bool

      default: 
      return state
  }
}