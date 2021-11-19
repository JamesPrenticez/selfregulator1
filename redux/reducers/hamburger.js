// A reducer is a function that receives the current state and an action object
// Then decides how to update the state if necessary
// and returns the new state: (state, action) => newState
// You can think of a reducer as an event listener which handles events based on the received action (event) type.

// Reducers must always follow some specific rules:
// They should only calculate the new state value based on the state and action arguments
// They are not allowed to modify the existing state. Instead, they must make immutable updates
// They must not do any asynchronous logic, calculate random values, or cause other "side effects"

// The logic inside reducer functions typically follows the same series of steps:
// Check to see if the reducer cares about this action
// If so, make a copy of the state, update the copy with new values, and return it
// Otherwise, return the existing state unchanged

// Why Are They Called 'Reducers?'
// The Array.reduce() method lets you take an array of values, process each item in the array one at a time, and return a single final result. You can think of it as "reducing the array down to one value".

// Type is posts/setPosts which comes from our action

import {TOGGLE_HAMBURGER} from '../actions/hambuger'

export default function(state = false, action){
  console.log("reducer")
  switch(action.type) {
    case TOGGLE_HAMBURGER:
      return action.bool

      default: 
      return state
  }
}